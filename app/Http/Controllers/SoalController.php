<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DataSoal;

use Inertia\Inertia;

class SoalController extends Controller
{
    public function index($id)
    {
        $paketSoal = DataSoal::find($id);

        function generateRandomOrderQuestions($questions)
        {
            shuffle($questions);

            foreach ($questions as &$question) {
                shuffle($question['choices']);
            }

            return $questions;
        }

        if (!$paketSoal) {
            return redirect('/produk')->with('error', 'Produk tidak ditemukan');
        }

        $randomOrderQuestions = generateRandomOrderQuestions($paketSoal['soal']);
        
        return Inertia::render('frontpage/DetailSoal', ['soal' => $randomOrderQuestions]);
    }
}
