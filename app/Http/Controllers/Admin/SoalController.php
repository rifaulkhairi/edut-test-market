<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SoalController extends Controller
{
    public function addsoalpg()
    {
        return Inertia::render('admin/Pages/soal/addSoalPG');
    }
    public function show()
    {
        return Inertia::render('admin/Pages/soal/ListSoal');
    }
    public function store(Request $request)
    {
        dd($request);
    }
}
