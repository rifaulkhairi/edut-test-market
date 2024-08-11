<?php

namespace App\Http\Controllers;

use App\Models\PaketSoal;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

class ProdukController extends Controller
{
    public function index()
    {
        $produks = PaketSoal::all();
        $baseurl = url("/");
        return Inertia::render('frontpage/Frontpage', [
            'produks' => $produks,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'base_url' => $baseurl,
        ]);
    }

    public function detail($id)
    {
        $produks = PaketSoal::all();
        $produk = PaketSoal::find($id);
        $baseurl = url("/");
        if (!$produk) {
            return redirect('/produks')->with('error', 'Produk tidak ditemukan');
        }
        return Inertia::render('frontpage/DetailProduct', ['base_url' => $baseurl, 'detail' => $produk, 'products' => $produks]);
    }
    public function addPaketSoal() {}
}
