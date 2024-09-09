<?php

namespace App\Http\Middleware;

use App\Models\Order;
use App\Models\OrderItem;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class orderMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $orders = Order::where('order_tbl.email_user', Auth::user()->email)
            ->with('order_items')
            ->get();
        $orderItem = [];
        if ($orders->count() > 0) {
            foreach ($orders as $order) {
                $orderItem = $order->order_items->filter(function ($item) use ($request) {
                    return (string)$item->paketsoal_id === $request->paketsoal_id;
                })->first();
            }
            if ($orderItem) {
                return $next($request);
            } else {
                return redirect()->back();
            }
        } else {
            return redirect()->back();
        }
    }
}
