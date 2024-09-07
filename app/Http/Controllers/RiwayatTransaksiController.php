<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RiwayatTransaksiController extends Controller
{
    public function index()
    {
        $cartitem = Cart::where('email_user', Auth::user()->email)
            ->with(['paketsoal'])->get();

        $base_url = url('/');

        $orders = Order::where('order_tbl.email_user', '=', Auth::user()->email)
            ->with(['order_items', 'order_items.paketsoal'])
            ->get();

        return Inertia::render('frontpage/PesananSaya', [
            'base_url' => $base_url,
            'cartitem' => $cartitem,
            'orders' => $orders
        ]);
    }
}
