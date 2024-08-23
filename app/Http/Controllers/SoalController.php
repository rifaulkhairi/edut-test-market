<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DataSoal;
use App\Models\PaketSoal;
use App\Models\SoalPG;
use Inertia\Inertia;

class SoalController extends Controller
{
    public function index($id)
    {
        $soal = SoalPG::where('soalpg_tbl.paketsoal_id', '=', $id)
            ->get();
        $paketsoal = PaketSoal::find($id);

        // dd($paketSoal);

        // $soalsoal = DataSoal::find($id);

        // function generateRandomOrderQuestions($questions)
        // {
        //     shuffle($questions);

        //     foreach ($questions as &$question) {
        //         shuffle($question['choices']);
        //     }

        //     return $questions;
        // }

        // if (!$soal) {
        //     return redirect('/produk')->with('error', 'Produk tidak ditemukan');
        // }

        // $randomOrderQuestions = generateRandomOrderQuestions($soalsoal['soal']);

        return Inertia::render('frontpage/DetailSoal', ['soal' => $soal, 'paketsoal' => $paketsoal]);
    }

    public function hasilujian()
    {
        return Inertia::render('frontpage/HasilUjian');
    }
}
