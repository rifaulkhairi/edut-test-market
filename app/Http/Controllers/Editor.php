<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Editor extends Controller
{
    public function index()
    {
        return Inertia::render('editor/Dashboard', []);

    }
}
