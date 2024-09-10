<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\PaketSoal;
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
        // dd($grossamont);
        $data = [];
        $data["payment_type"] = $request->pymentMethod;
        $data['email_user'] = Auth::user()->email;
        $data['gross_amount'] = $grossamont;

        DB::beginTransaction();
        try {
            $order = Order::create([
                'payment_type' => $request->pymentMethod,
                'email_user' => Auth::user()->email,
                'gross_amount' => $grossamont,
            ]);
            $invoiceNumber = $this->generateInvoiceNumber($order->id);
            $order->update(['invoice' => $invoiceNumber]);

            foreach ($orderitems as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'paketsoal_id' => $item['paketsoal']['id'],
                ]);
            }
            DB::commit();
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
                    return response()->json(['message' => $resp['status_message'], 500]);
                }
                $actionmap = [];
                foreach ($actions as $action) {
                    $actionmap[$action['name']] = $action['url'];
                }
                $order->update(['qr_code_link' => $actionmap['generate-qr-code'], 'expiry_time' => $expiry_time]);

                return redirect(url('/pembayaran/' . $order->id));
            }
            return response()->json(['message' => $resp['status_message'], 500]);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Order creation failed', 'error' => $e->getMessage()], 500);
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


        return Inertia::render('frontpage/Pembayaran', ['base_url' => url('/'), 'order' => $order]);
    }

    public function generateInvoiceNumber($orderid)
    {
        $prefix = "INV";
        $datePart = date('Ymd');
        $paddedOrderId = str_pad($orderid, 8, '0', STR_PAD_LEFT);
        return $prefix . '-' . $datePart . $paddedOrderId;
    }
}
