<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {

        $email = Auth::user()->email;

        $item = Cart::where('email_user', $email)
            ->with(['paketsoal'])->get();


        return Inertia::render('frontpage/Cart', ['cartitem' => $item, 'base_url' => url('/')]);
    }
    public function addtocart($id)
    {
        $itemcart = Cart::where('cart_tbl.paketsoal_id', '=', $id)
            ->where('cart_tbl.email_user', '=', Auth::user()->email)->first();
        if ($itemcart) {
            return redirect('/cart');
        } else {
            $data = [
                'paketsoal_id' => $id,
                'email_user' => Auth::user()->email,
            ];
            Cart::create($data);
            return redirect('/cart');
        }
    }

    public function delete($id)
    {
        $cartitem = Cart::where('cart_tbl.id', '=', $id)->where('cart_tbl.email_user', '=', Auth::user()->email)->first();
        if ($cartitem) {
            $cartitem->delete();
        }
        return redirect('/cart');
    }
}
