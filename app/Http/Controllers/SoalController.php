<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\PaketSoal;

use App\Models\TipeTest;
use Inertia\Inertia;

class SoalController extends Controller
{
    public function index($id)
    {



        $paketSoal = PaketSoal::where('paket_soal_tbl.id', '=', $id)
            ->with(['questions' => function ($query) {
                $query->where('preview', 1);  // Filter questions where preview is 1
            }, 'questions.options', 'questions.tipetest'])
            ->first();

        $tipetestData = TipeTest::all();
        $groupedQuestions = $paketSoal->questions->groupBy('tipetest_id');


        return Inertia::render('frontpage/PreviewSoal', ['paketsoal' => $paketSoal, 'groupedQuestions' => $groupedQuestions, 'tipetestData' => $tipetestData]);
    }



    public function hasilujian()
    {
        return Inertia::render('frontpage/HasilUjian');
    }
}
