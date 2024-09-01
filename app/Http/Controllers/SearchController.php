<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\PaketSoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $baseurl = url("/");
        $cart = null;

        $paketsoal['base_url'] = url("/");


        if (Auth::user()) {
            // dd("test");
            $cart = Cart::where('email_user', Auth::user()->email)
                ->with(['paketsoal'])->get();
        }
        $query = $request->search_query;
        // dd($query);
        $products = PaketSoal::where('name', 'like', "%{$query}%")
            ->orWhere('description', 'like', "%{$query}%")
            ->get();
        return Inertia::render('frontpage/SearchResult', [
            'base_url' => url('/'),
            'products' => $products,
            'cart' => $cart,
            'searchkey' => $request->search_query,
        ]);

        dd($products);
    }
}
