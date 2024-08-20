<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class OrderController extends Controller
{

    public function index(Request $request)
    {
        // dd($request);
        $cartitem = Cart::where('email_user', Auth::user()->email)
            ->with(['paketsoal'])->get();
        $base_url = url('/');
        return Inertia::render('frontpage/Checkout', ['base_url' => $base_url, 'cartitem' => $cartitem]);
    }


    public function makeOrder(Request $request)
    {

        dd($request);

        $order = null;


        $resp = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json'

        ])->withBasicAuth('SB-Mid-server-W_ylgZ9Ji3fCSgB6v9H1qmeX', '')
            ->post('https://api.sandbox.midtrans.com/v2/charge', [
                'pyment_type' => 'gopay',
                'transaction_details' => [
                    'order_id' => $order->id,
                    'gross_amount' => $order->gross_amount,
                ]
            ]);
    }
}
