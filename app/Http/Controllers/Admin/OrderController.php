<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with('order_items')->get();
        return Inertia::render('admin/Pages/order/ListOrder', ['orders' => $orders]);
    }
}
