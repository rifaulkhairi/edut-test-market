<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PaketSoal;
use App\Models\Penilaian;
use App\Models\SoalPG;
use App\Models\TipeTest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use PDO;

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
            'created_by' => Auth::user()->username,
            'updated_by' => Auth::user()->username,


        ];

        SoalPG::create($data);
        return to_route('daftarsoal');
    }

    public function detail(Request $request, $id)
    {
        $soal = SoalPG::join('paket_soal_tbl', 'soalpg_tbl.paketsoal_id', '=', 'paket_soal_tbl.id')
            ->join('tipe_test_tbl', 'soalpg_tbl.tipetest_id', '=', 'tipe_test_tbl.id')
            ->where('soalpg_tbl.id', '=', $id) // Moved after the joins for clarity
            ->select(
                'soalpg_tbl.id',
                'soalpg_tbl.soal',
                'soalpg_tbl.opsiA',
                'soalpg_tbl.opsiB',
                'soalpg_tbl.opsiC',
                'soalpg_tbl.opsiD',
                'soalpg_tbl.opsiE',
                'soalpg_tbl.pembahasan',
                'soalpg_tbl.jawaban_betul',
                'paket_soal_tbl.name as nama_paket_soal',
                'tipe_test_tbl.name as nama_tipe_test'
            )
            ->get();
        // dd($soal);
        $data = [
            'id' => $soal[0]['id'],
            'soal' => $soal[0]['soal'],
            'nama_paket_soal' => $soal[0]['nama_paket_soal'],
            'nama_tipe_test' => $soal[0]['nama_tipe_test'],
            'pembahasan' => $soal[0]['pembahasan'],
            'jawaban_betul' => $soal[0]['jawaban_betul'],

            'choices' => [
                '0' => ['content' => $soal[0]['opsiA'], 'option' => 'A'],
                '1' => ['content' => $soal[0]['opsiB'], 'option' => 'B'],
                '2' => ['content' => $soal[0]['opsiC'], 'option' => 'C'],
                '3' => ['content' => $soal[0]['opsiD'], 'option' => 'D'],
                '4' => ['content' => $soal[0]['opsiE'], 'option' => 'E'],

            ],

        ];
        // dd($data);
        return Inertia::render('admin/Pages/soal/DetailSoal', ['soal' => $data]);
    }

    public function edit($id)
    {
        $soal = SoalPG::join('paket_soal_tbl', 'soalpg_tbl.paketsoal_id', '=', 'paket_soal_tbl.id')
            ->join('tipe_test_tbl', 'soalpg_tbl.tipetest_id', '=', 'tipe_test_tbl.id')
            ->where('soalpg_tbl.id', '=', $id) // Moved after the joins for clarity
            ->select(
                'soalpg_tbl.id',
                'soalpg_tbl.soal',
                'soalpg_tbl.opsiA',
                'soalpg_tbl.opsiB',
                'soalpg_tbl.opsiC',
                'soalpg_tbl.opsiD',
                'soalpg_tbl.opsiE',
                'soalpg_tbl.pembahasan',
                'soalpg_tbl.jawaban_betul',
                'soalpg_tbl.nilai',
                'paket_soal_tbl.name as nama_paket_soal',
                'tipe_test_tbl.name as nama_tipe_test',
                'tipe_test_tbl.id as id_tipe_test',
                'paket_soal_tbl.id as id_paket_soal',



            )
            ->get();

        $tipetest = TipeTest::all();
        $paketsoal = PaketSoal::all();
        return Inertia::render('admin/Pages/soal/EditSoalPG', ['datasoal' => $soal, 'tipetest' => $tipetest, 'paketsoal' => $paketsoal]);
    }

    public function update(Request $request, $id)
    {
        $soal = SoalPG::find($id);

        $data = [
            'soal' => $request->soal,
            'nilai' => $request->nilai,
            'opsiA' => $request->opsiA,
            'opsiB' => $request->opsiB,
            'opsiC' => $request->opsiC,
            'opsiD' => $request->opsiD,
            'opsiE' => $request->opsiE,
            'pembahasan' => $request->pembahsan,
            'paketsoal_id' => $request->idpaketsoal,
            'tipetest_id' => $request->idtipetest,
            'jawaban_betul' => $request->jawabanBetul,
            'updated_by' => Auth::user()->username,

        ];

        $soal->update($data);

        return redirect('admin/daftarsoal');
    }

    public function delete($id)
    {
        $soalpg = SoalPG::find($id);
        $soalpg->delete();
        return redirect('admin/daftarsoal');
    }
}
