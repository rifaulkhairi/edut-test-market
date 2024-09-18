<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\PaketSoal;
use App\Models\QrisPayment;
use App\Models\TransferBank;
use DateTime;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class OrderController extends Controller
{

    public function index(Request $request)
    {
        $selecteditem = $request->orderitem;
        $cartitem = Cart::where('email_user', Auth::user()->email)
            ->with(['paketsoal'])->get();
        $base_url = url('/');
        return Inertia::render('frontpage/Checkout', ['base_url' => $base_url, 'cartitem' => $cartitem, 'selecteditem' => $selecteditem]);
    }

    public function store(Request $request)
    {
        $grossamont = 0;
        $orderitems = $request->orderitem;
        foreach ($orderitems as $item) {
            $grossamont += ($item["paketsoal"]["price"] - round($item["paketsoal"]["price"] * $item["paketsoal"]["discount"]));
        }
        $data = [];
        $data["payment_type"] = $request->pymentMethod;
        $data['email_user'] = Auth::user()->email;
        $data['gross_amount'] = $grossamont;
        $data['bank'] = $request->bank;

        if ($data['payment_type'] === 'gopay') {
            // dd('gopay');
            $this->pembayaran_qris($data, $request, $orderitems);
        } else if ($data['payment_type'] === 'bank_transfer') {
            // dd($data['bank']);
            $this->pembayaran_tf_bank($data, $request, $orderitems);
        }
    }


    public function verify(Request $request)
    {
        $orderId = $request->order_id;
        $status_code = $request->status_code;
        $gross_amont = $request->gross_amount;

        $signature = hash('sha512', $orderId . $status_code . $gross_amont . env('MIDTRANS_SERVER_KEY'));
        if ($signature != $request->signature_key) {
            return response()->json(['message' => 'invalid Signature'], 400);
        }

        $order = $order = Order::with('order_items')->find($request->order_id);

        if ($order) {
            $status = 'pending';

            if ($request->transaction_status == 'settlement') {
                $status = 'paid';
                foreach ($order->order_items as $item) {
                    $paketsoal = PaketSoal::find($item->paketsoal_id);
                    if ($paketsoal) {
                        $paketsoal->update([
                            'terjual' => $paketsoal->terjual + 1
                        ]);
                    }
                }
            } else if ($request->transaction_status == 'expire') {
                $status = 'expired';
            }

            $order->status = $status;
            $order->save();
        }


        return response()->json(['message' => 'success']);
    }

    public function bayar(Request $request, $id)
    {
        $order = Order::find($id);
        // dd($order);
        if ($order) {
            if ($order->payment_type === 'gopay') {
                $order = Order::with('qrisPayment')->find($id);
            } else if ($order->payment_type === 'bank_transfer') {
                $order = Order::with('bankTransfer')->find($id);
            }
        }


        return Inertia::render('frontpage/Pembayaran', ['base_url' => url('/'), 'order' => $order]);
    }

    public function generateInvoiceNumber($orderid)
    {
        $prefix = "INV";
        $datePart = date('Ymd');
        $paddedOrderId = str_pad($orderid, 8, '0', STR_PAD_LEFT);
        return $prefix . '-' . $datePart . $paddedOrderId;
    }

    public function pembayaran_qris($data, Request $request, $orderitems)
    {
        DB::beginTransaction();
        try {
            $order = Order::create([
                'payment_type' => $data['payment_type'],
                'email_user' => Auth::user()->email,
                'gross_amount' => $data['gross_amount'],
            ]);
            $invoiceNumber = $this->generateInvoiceNumber($order->id);
            $order->update(['invoice' => $invoiceNumber]);

            foreach ($orderitems as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'paketsoal_id' => $item['paketsoal']['id'],
                ]);
            }
            $detail_payment = QrisPayment::create([
                'order_id' => $order->id,

            ]);
            $resp = Http::withHeaders([
                'Accept' => 'application/json',
                'Content-Type' => 'application/json'

            ])->withBasicAuth(env('MIDTRANS_SERVER_KEY'), '')
                ->post(env('MIDTRANS_ENDPOINT'), [
                    'payment_type' => 'gopay',
                    'transaction_details' => [
                        'order_id' => $order->id,
                        'gross_amount' => $order->gross_amount,
                    ]
                ]);
            // dd($order->gross_amount);

            if ($resp->status() == 201 || $resp->status() == 200) {
                $actions = $resp->json('actions');
                $transactiontime = $resp->json('transaction_time');
                $expiry_time = new DateTime($transactiontime);
                $expiry_time = $expiry_time->modify('+15 minutes')->format('Y-m-d H:i:s');
                if (empty($actions)) {
                    return redirect()->back()->with('message', ['error' => $resp['status_message']]);
                }
                $actionmap = [];
                foreach ($actions as $action) {
                    $actionmap[$action['name']] = $action['url'];
                }
                $detail_payment->update(['qr_code_link' => $actionmap['generate-qr-code'], 'expiry_time' => $expiry_time]);
                DB::commit();
                // $url = url('/pembayaran' . $order->id);

                return redirect('/riwayattransaksi')->with('message', ['success' => 'Pesanan Berhasil Dibuat']);;
            } else {
                return redirect('/cart')->with('message', ['error' => $resp['status_message']]);
            }
        } catch (Exception $e) {
            DB::rollBack();
            return redirect('/cart')->with('message', ['error' => $e->getMessage()]);
        }
    }
    public function pembayaran_tf_bank($data, Request $request, $orderitems)
    {
        DB::beginTransaction();
        try {
            $order = Order::create([
                'email_user' => Auth::user()->email,
                'payment_type' => $data['payment_type'],
                'gross_amount' => $data['gross_amount'],
            ]);

            $detail_payment = TransferBank::create([
                'order_id' => $order->id,
                'bank' => $data['bank'],
            ]);

            $invoiceNumber = $this->generateInvoiceNumber($order->id);

            foreach ($orderitems as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'paketsoal_id' => $item['paketsoal']['id'],
                ]);
            }

            $order->update(['invoice' => $invoiceNumber]);

            $resp = Http::withHeaders([
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
            ])->withBasicAuth(env('MIDTRANS_SERVER_KEY'), '')
                ->post(env('MIDTRANS_ENDPOINT'), [
                    'payment_type' => 'bank_transfer',
                    'transaction_details' => [
                        'order_id' => $order->id,
                        'gross_amount' => $order->gross_amount,
                    ],
                    'bank_transfer' => [
                        'bank' => $detail_payment->bank,
                    ],
                ]);

            if ($resp->status() == 201 || $resp->status() == 200) {
                $va_numbers = $resp->json('va_numbers');
                $transactiontime = $resp->json('transaction_time');

                if ($va_numbers && isset($va_numbers[0]['va_number'])) {
                    $expiry_time = new DateTime($transactiontime);
                    $expiry_time = $expiry_time->modify('+1440 minutes')->format('Y-m-d H:i:s');

                    $detail_payment->update([
                        'virtual_account' => $va_numbers[0]['va_number'],
                        'expiry_time' => $expiry_time,
                    ]);

                    DB::commit();
                    // $url = url('/pembayaran/' . $order->id);
                    return redirect('/riwayattransaksi')->with('message', ['success' => 'Pesanan Berhasil Dibuat']);
                    // return redirect($url);
                } else {
                    throw new Exception("VA number not found in the response.");
                }
            } else {
                return redirect('/cart')->with('message', ['error' => $resp['status_message']]);
            }
        } catch (Exception $e) {
            DB::rollBack();
            return redirect('/cart')->with('message', ['error' => $e->getMessage()]);
        }
    }
}
