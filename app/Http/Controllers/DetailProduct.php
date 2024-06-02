<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailProduct extends Controller
{
    public function index(){
        return Inertia::render('frontpage/DetailProduct', []);
    }
}
