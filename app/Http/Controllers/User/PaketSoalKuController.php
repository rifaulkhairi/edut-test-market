<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PaketSoalKuController extends Controller
{
    public function index()
    {
        $cartitem = Cart::where('email_user', Auth::user()->email)
            ->with(['paketsoal'])->get();

        $base_url = url('/');

        $orders = Order::where('order_tbl.email_user', '=', Auth::user()->email)
            ->with(['order_items', 'order_items.paketsoal'])
            ->get();
        // dd(Auth::user()->email);
        $paidOrder = Order::where('order_tbl.email_user', '=', Auth::user()->email)
            ->where('order_tbl.status', '=', 'paid')
            ->with(['order_items', 'order_items.paketsoal'])
            ->get();

        $paketsoalku = [];
        foreach ($paidOrder as $order) {
            foreach ($order->order_items as $item) {
                array_push($paketsoalku, $item);
            }
        }

        return Inertia::render('frontpage/SoalKu', [
            'base_url' => $base_url,
            'cartitem' => $cartitem,
            'orders' => $orders,
            'paketsoaluser' => $paketsoalku,
        ]);
    }
}
