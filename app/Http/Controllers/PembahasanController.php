<?php

namespace App\Http\Controllers;

use App\Models\PaketSoal;
use App\Models\PercobaanUjian;
use App\Models\TipeTest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PembahasanController extends Controller
{
    public function index(Request $request)
    {
        $paketSoal = PaketSoal::where('paket_soal_tbl.id', '=', $request->paketsoal_id)
            ->with('questions.options', 'questions.tipetest')
            ->first();
        $groupedQuestions = $paketSoal->questions->groupBy('tipetest_id');
        $tipetestData = TipeTest::all();

        
        $percobaanujian = PercobaanUjian::where('percobaan_ujian_tbl.id', '=', $request->percobaan_id)
            ->with('useranswer')->first();

        // dd($percobaanujian);
        $groupedAnswers = collect($percobaanujian->useranswer)->groupBy(function ($item) {
            return $item['soal']['tipetest_id'];
        });



        return Inertia::render('frontpage/exam/Pembahasan', [
            'paketsoal' => $paketSoal,
            'groupedQuestions' => $groupedQuestions,
            'tipetestData' => $tipetestData,
            'percobaanujian' => $percobaanujian,
            'groupedAnswers' => $groupedAnswers,
        ]);
    }
}
