<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DataProduk;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

class ProdukController extends Controller
{
    public function index()
    {
        $produks = DataProduk::all();
        // dd($produks);
        return Inertia::render('frontpage/Frontpage', [
            'produks' => $produks,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function detail($id)
    {
        $produk = DataProduk::find($id);

        if (!$produk) {
            return redirect('/produks')->with('error', 'Produk tidak ditemukan');
        }

        // dd($produk);
        return Inertia::render('frontpage/DetailProduct', ['detail' => $produk]);
    }
}
