<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function initExam($id) {}
    public function dashboard(Request $request)
    {
        return Inertia::render('frontpage/HasilUjian');
    }
}
