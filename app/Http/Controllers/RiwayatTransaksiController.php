<?php

namespace App\Http\Controllers;

use App\Models\Cart;
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

        return Inertia::render('frontpage/RiyawatTransaksi', ['base_url' => $base_url, 'cartitem' => $cartitem]);
    }
}
