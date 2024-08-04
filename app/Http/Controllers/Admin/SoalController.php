<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PaketSoal;
use App\Models\SoalPG;
use App\Models\TipeTest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SoalController extends Controller
{
    public function addsoalpg()
    {
        $tipetest = TipeTest::select('tipe_test_tbl.id', 'tipe_test_tbl.name')->get();

        $paketsoal = PaketSoal::select('paket_soal_tbl.id', 'paket_soal_tbl.name')->get();

        return Inertia::render('admin/Pages/soal/addSoalPG', ['tipetest' => $tipetest, 'paketsoal' => $paketsoal]);
    }
    public function show()
    {
        $soal = SoalPG::join('paket_soal_tbl', 'soalpg_tbl.paketsoal_id', '=', 'paket_soal_tbl.id')
            ->join('tipe_test_tbl', 'soalpg_tbl.tipetest_id', '=', 'tipe_test_tbl.id')
            ->select(
                'soalpg_tbl.id',
                'soalpg_tbl.soal',
                'soalpg_tbl.opsiB',
                'paket_soal_tbl.name as nama_paket_soal',
                'tipe_test_tbl.name as nama_tipe_test'
            )

            ->get();

        return Inertia::render('admin/Pages/soal/ListSoal', ['soal' => $soal]);
    }
    public function store(Request $request)
    {
        // dd($request);

        $data = [
            'paketsoal_id' => $request->idpaketsoal,
            'nilai' => $request->nilai,
            'jawaban_betul' => $request->jawabanBetul,
            'status' => 'publish',
            'tipetest_id' => $request->idtipetest,
            'created_by' => Auth::user()->email,
            'updated_by' => Auth::user()->email,
            'soal' => $request->soal,
            'opsiA' => $request->opsiA,
            'opsiB' => $request->opsiB,
            'opsiC' => $request->opsiC,
            'opsiD' => $request->opsiD,
            'opsiE' => $request->opsiE,
            'pembahasan' => $request->pembahsan,


        ];

        SoalPG::create($data);
        return to_route('daftarsoal');
    }
}
