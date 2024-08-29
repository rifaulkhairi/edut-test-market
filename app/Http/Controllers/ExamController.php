<?php

namespace App\Http\Controllers;

use App\Models\PaketSoal;
use App\Models\PercobaanUjian;
use App\Models\Question;
use App\Models\TipeTest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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

        $groupedAnswers = [];
        if ($datainprogressujian) {
            $groupedAnswers = collect($datainprogressujian->useranswer)->groupBy(function ($item) {
                return $item['soal']['tipetest_id'];
            });
        }

        if ($percobaanujian->isEmpty()) {
            $datapercobaanujian = [
                'paketsoal_id' => $request->paketsoal_id,
                'email_user' => Auth::user()->email,

            ];

            $percobaanujian = PercobaanUjian::create($datapercobaanujian);
        } else {

            if ($datainprogressujian) {
                // $datainprogressujian->update(['created_at' => now()]);

                $waktuujiandikerjakan = $datainprogressujian->created_at;
                $detikBerjalan = $waktuujiandikerjakan->diffInSeconds(now());

                $timer = ($paketSoal->jam * 60 * 60) + ($paketSoal->menit * 60) + $paketSoal->detik;


                $difwaktu = $timer - $detikBerjalan;
                $seconds = $difwaktu;
                $hours = floor($seconds / 3600);
                $minutes = floor(($seconds % 3600) / 60);
                $seconds = $seconds % 60;
                $paketSoal['jam'] = $hours;
                $paketSoal['menit'] = $minutes;
                $paketSoal['detik'] = $seconds;

                $percobaanujian = $datainprogressujian;
            } else {
                //batasi percobaan ujian hanya 5 kali
                if (count($percobaanujian) < 5) {
                    $datapercobaanujian = [
                        'paketsoal_id' => $request->paketsoal_id,
                        'email_user' => Auth::user()->email,

                    ];

                    $percobaanujian = PercobaanUjian::create($datapercobaanujian);
                }
            }
        }
        return Inertia::render('frontpage/exam/ExamRoom', [
            'paketsoal' => $paketSoal,
            'groupedQuestions' => $groupedQuestions,
            'tipetestData' => $tipetestData,
            'percobaanujian' => $percobaanujian,
            'groupedAnswers' => $groupedAnswers,
        ]);
    }
    public function dashboard(Request $request)
    {

        $datasoal = PaketSoal::where('paket_soal_tbl.id', $request->paketsoal_id)
            ->with('questions.options')
            ->first();
        $datasoal = $datasoal->questions;

        $datatipetest = TipeTest::all();
        // dd($datatipetest);



        $tipetest = Question::where('questions_tbl.paketsoal_id', $request->paketsoal_id)
            ->select('questions_tbl.tipetest_id')
            ->distinct()
            ->get();

        $percobaanujian = PercobaanUjian::where('percobaan_ujian_tbl.email_user', '=', Auth::user()->email)
            ->where('percobaan_ujian_tbl.paketsoal_id', $request->paketsoal_id)
            ->with('useranswer')
            ->orderBy('created_at', 'asc')
            ->get();

        $items = [];


        foreach ($percobaanujian as $index => $dt) {
            $create = Carbon::parse($dt->created_at);
            $finish_at = Carbon::parse($dt->diselesaikan_pada);

            $diffInSeconds = $create->diffInSeconds($finish_at);
            $hours = floor($diffInSeconds / 3600);
            $minutes = floor(($diffInSeconds % 3600) / 60);
            $seconds = $diffInSeconds % 60;

            $waktu = $hours . ":" . $minutes . ":" . $seconds;
            $data = [];

            $resultanalisisglobal = $this->analisisKeseluruhanSoal($datasoal, $dt->useranswer);

            $data[] = [
                'name' => 'total',
                'jumlahsoal' => $resultanalisisglobal['jumlahsoal'],
                'jumlahbenar' => $resultanalisisglobal['jumlahbetul'],
                'jumlahsalah' => $resultanalisisglobal['jumlahsoal'] - $resultanalisisglobal['jumlahbetul'],
                'nilai' => $resultanalisisglobal['nilai'],

            ];


            foreach ($tipetest as $tp) {
                $result = $this->calculateJumlahSoalBenar($datasoal, $dt->useranswer, $tp->tipetest_id);

                $data[] = [
                    'name' => $this->getNamaTipeTest($datatipetest, $tp->tipetest_id),
                    'jumlahsoal' => $result['jumlahsoal'],
                    'jumlahbenar' => $result['jumlahbetul'],
                    'jumlahsalah' => $result['jumlahsoal'] - $result['jumlahbetul'],
                    'nilai' => $result['nilai'],

                ];
            }


            $items[] = [
                'id' => $dt->id,
                'name' => "percobaan " . ($index + 1),
                'nilai' => $dt->total_nilai,
                'data' => $data,
                'waktu' => $waktu,
            ];
        }
        $paketsoal = PaketSoal::find($request->paketsoal_id);



        $latestAttempts = DB::table('percobaan_ujian_tbl')
            ->select('email_user', DB::raw('MAX(created_at) as tgl_atempt'))
            ->groupBy('email_user');

        $userRank = 0;
        // dd($latestAttempts);

        if (count($percobaanujian) > 0) {
            $attemptsWithScores = DB::table('percobaan_ujian_tbl as pu')
                ->joinSub($latestAttempts, 'latest', function ($join) {
                    $join->on('pu.email_user', '=', 'latest.email_user')
                        ->on('pu.created_at', '=', 'latest.tgl_atempt');  // Perbaikan di sini
                })
                ->select('pu.*')
                ->orderBy('pu.total_nilai', 'desc')
                ->get();
            $rankedAttempts = $attemptsWithScores->map(function ($item, $key) {
                $item->rank = $key + 1;
                return $item;
            });

            $userRank = $rankedAttempts->firstWhere('email_user', Auth::user()->email)->rank ?? null;
        }



        $inprogresspercobaanujian = PercobaanUjian::where('percobaan_ujian_tbl.email_user', '=', Auth::user()->email)
            ->where('percobaan_ujian_tbl.paketsoal_id', $request->paketsoal_id)
            ->where('percobaan_ujian_tbl.status', 'pending')
            ->with('useranswer')
            ->orderBy('created_at', 'asc')
            ->first();

        // dd($userRank);
        return Inertia::render('frontpage/HasilUjian', [
            'percobaanujian' => $percobaanujian,
            'paketsoal' => $paketsoal,
            'statistik' => $items,
            'userrank' => $userRank,
            'base_url' => url('/'),
            'inprogresspercobaanujian' => $inprogresspercobaanujian
        ]);
    }

    public function endExam(Request $request)
    {

        $percobaanujian = PercobaanUjian::find($request->percobaan_id);


        $datasoal = PaketSoal::where('paket_soal_tbl.id', $request->paketsoal_id)
            ->with('questions.options')
            ->first();
        $datasoal = $datasoal->questions;
        $answeredata = PercobaanUjian::where('percobaan_ujian_tbl.id', $request->percobaan_id)
            ->with('useranswer')
            ->first();


        $nilai = 0;

        foreach ($answeredata->useranswer as $ans) {
            $jwb = $this->findjawabanbetulsoalpg($datasoal, $ans->question_id);
            if ($ans->answer === $jwb->Alias) {
                $nilai += $jwb->nilai;
            }
        }

        $data = [
            'status' => 'dkerjakan',
            'diselesaikan_pada' => now(),
            'total_nilai' => $nilai,
            'status' => 'dikerjakan',
        ];


        $percobaanujian->update($data);

        return redirect('/examdashboard?paketsoal_id=' . $request->paketsoal_id);
    }

    public function findjawabanbetulsoalpg($datasoal, $questionid)
    {
        return collect($datasoal)->filter(function ($soal) use ($questionid) {
            return $soal["id"] === $questionid;
        })->first()['options']->sortByDesc('nilai')->first();
    }


    public function getNamaTipeTest($datatipetest, $idtipetest)
    {
        $result = collect($datatipetest)->filter(function ($dt) use ($idtipetest) {

            return $dt->id === $idtipetest;
        })->first()->name;
        return $result;
    }

    public function getTipeTestWithQuestionID($questiondata, $questionid)
    {
        $result = collect($questiondata)->filter(function ($dt) use ($questionid) {
            return $dt->id === $questionid;
        })->first()->tipetest_id;
        return $result;
    }

    public function calculateJumlahSoalBenar($datasoal, $dataanswer, $tipetestid)
    {
        $data = [];

        $jumlahbetul = 0;
        $jumlahsoal = 0;
        $nilai = 0;
        foreach ($dataanswer as $ans) {
            if ($this->getTipeTestWithQuestionID($datasoal, $ans->question_id) === $tipetestid) {
                $jumlahsoal += 1;
                $jwb = $this->findjawabanbetulsoalpg($datasoal, $ans->question_id);
                if ($ans->answer === $jwb->Alias) {
                    $jumlahbetul += 1;
                    $nilai += $jwb->nilai;
                }
            }
        }
        $data['jumlahbetul'] = $jumlahbetul;
        $data['jumlahsoal'] = $jumlahsoal;
        $data['nilai'] = $nilai;


        return $data;
    }
    public function analisisKeseluruhanSoal($datasoal, $dataanswer)
    {
        $data = [];

        $jumlahbetul = 0;
        $jumlahsoal = 0;
        $nilai = 0;
        foreach ($dataanswer as $ans) {
            $jwb = $this->findjawabanbetulsoalpg($datasoal, $ans->question_id);
            $jumlahsoal += 1;
            // dd($jwb);
            if ($ans->answer === $jwb->Alias) {
                $jumlahbetul += 1;
                $nilai += $jwb->nilai;
            }
        }
        $data['jumlahbetul'] = $jumlahbetul;
        $data['jumlahsoal'] = $jumlahsoal;
        $data['nilai'] = $nilai;
        return $data;
    }
}
