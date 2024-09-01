<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\PaketSoal;
use App\Models\Penilaian;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class ProdukController extends Controller
{
    public function index()
    {
        $produks = PaketSoal::all();
        $baseurl = url("/");

        $cart = null;

        if (Auth::user()) {
            // dd("test");
            $cart = Cart::where('email_user', Auth::user()->email)
                ->with(['paketsoal'])->get();
        }
        return Inertia::render('frontpage/Frontpage', [
            'produks' => $produks,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'base_url' => $baseurl,
            'cart' => $cart,

        ]);
    }

    public function detail($id)
    {
        $produks = PaketSoal::all();
        $produk = PaketSoal::find($id);
        $baseurl = url("/");
        $cart = null;
        $paketsoal = PaketSoal::where('paket_soal_tbl.id', '=', $id)->with("penilaian.replies")->get()->first();

        $paketsoal['base_url'] = url("/");


        if (Auth::user()) {
            // dd("test");
            $cart = Cart::where('email_user', Auth::user()->email)
                ->with(['paketsoal'])->get();
        }


        if (!$produk) {
            return redirect('/produks')->with('error', 'Produk tidak ditemukan');
        }
        return Inertia::render('frontpage/DetailProduct', ['base_url' => $baseurl, 'detail' => $produk, 'products' => $produks, 'cart' => $cart, 'paketsoal' => $paketsoal]);
    }
    public function addPaketSoal() {}
}
