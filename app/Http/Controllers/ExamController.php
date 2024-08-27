<?php

namespace App\Http\Controllers;

use App\Models\PaketSoal;
use App\Models\PercobaanUjian;
use App\Models\TipeTest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function initExam(Request $request)
    {
        $paketSoal = PaketSoal::where('paket_soal_tbl.id', '=', $request->paketsoal_id)
            ->with('questions.options', 'questions.tipetest')
            ->first();

        $tipetestData = TipeTest::all();

        $groupedQuestions = $paketSoal->questions->groupBy('tipetest_id');

        $percobaanujian = PercobaanUjian::where('percobaan_ujian_tbl.email_user', '=', Auth::user()->email)
            ->where('percobaan_ujian_tbl.paketsoal_id', $request->paketsoal_id)
            ->get();

        $datainprogressujian = PercobaanUjian::where('percobaan_ujian_tbl.email_user', '=', Auth::user()->email)
            ->where('percobaan_ujian_tbl.paketsoal_id', $request->paketsoal_id)
            ->where('percobaan_ujian_tbl.status', 'pending')
            ->with(['useranswer.soal'])
            ->first();

        $groupedAnswers = collect($datainprogressujian->useranswer)->groupBy(function ($item) {
            return $item['soal']['tipetest_id'];
        });




        if ($percobaanujian->isEmpty()) {
            $datapercobaanujian = [
                'paketsoal_id' => $request->paketsoal_id,
                'email_user' => Auth::user()->email,

            ];

            $percobaanujian = PercobaanUjian::create($datapercobaanujian);
        } else {
            // dd($percobaanujian);
            $waktuujiandikerjakan = $percobaanujian[0]->created_at;
            $detikBerjalan = $waktuujiandikerjakan->diffInSeconds(now());

            $timer = ($paketSoal->jam * 60 * 60) + ($paketSoal->menit * 60) + $paketSoal->detik;

            $difwaktu = $timer - $detikBerjalan;
            // dd($difwaktu);
        }
        return Inertia::render('frontpage/exam/ExamRoom', [
            'paketsoal' => $paketSoal,
            'groupedQuestions' => $groupedQuestions,
            'tipetestData' => $tipetestData,
            'percobaanujian' => $percobaanujian,
            // 'datainprogressujian' => $datainprogressujian,
            'groupedAnswers' => $groupedAnswers,
        ]);
    }
    public function dashboard(Request $request)
    {
        // dd($request->paketsoal_id);
        $paketsoal = PaketSoal::find($request->paketsoal_id);

        $percobaanujian = PercobaanUjian::where('percobaan_ujian_tbl.email_user', '=', Auth::user()->email)
            ->where('percobaan_ujian_tbl.paketsoal_id', $request->paketsoal_id)
            ->get();

        if ($percobaanujian) {
            $percobaanujian['status'] = 'pending';
        }
        return Inertia::render('frontpage/HasilUjian', ['percobaanujian' => $percobaanujian, 'paketsoal' => $paketsoal]);
    }
}
