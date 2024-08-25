<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Termwind\Components\Dd;

class AnswerController extends Controller
{
    public function store(Request $request)
    {
        return response()->json(['success' => true, 'message' => 'Jawaban berhasil disimpan']);
    }
}
