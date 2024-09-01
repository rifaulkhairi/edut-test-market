<?php

namespace App\Http\Controllers;

use App\Models\PaketSoal;
use App\Models\Penilaian;
use App\Models\Reply;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PenilaianController extends Controller
{
    public function delete($id)
    {


        $penilaian = Penilaian::find($id);
        $idpaketsoal = $penilaian->id_paket_soal;
        $paketsoal = PaketSoal::find($penilaian->id_paket_soal);

        DB::beginTransaction();
        try {
            $result = $penilaian->delete();
            if ($result) {
                $newPenilaian = Penilaian::where('penilaian_tbl.id_paket_soal', $idpaketsoal)->avg('rating');
                $paketsoal->update([
                    'rating' => ceil($newPenilaian),
                ]);
            }
            DB::commit();
            return redirect('/admin/viewpaketsoal/' . $idpaketsoal)->with('message', ['success' => 'Berhasil Menghapus Penilaian']);
        } catch (Exception $e) {
            DB::rollBack();
            return redirect('/admin/viewpaketsoal/' . $idpaketsoal)->with('message', ['error' => 'terjadi kesalahan']);
        }
    }

    public function reply(Request $request, $id)
    {

        $data = [
            'comment' => $request->reply,
            'penilaian_id' => $id,
        ];

        Reply::create($data);
        return redirect()->back();
    }
    public function store(Request $request)
    {
        $data = [
            'rating' => $request->rating,
            'comment' => $request->comment,
            'created_by' => Auth::user()->email,
            'id_paket_soal' => $request->paketsoal_id,
        ];

        $jumlahpenilai = Penilaian::where('penilaian_tbl.id_paket_soal', $data["id_paket_soal"])
            ->count();

        $paketsoal = PaketSoal::find($data['id_paket_soal']);


        if ($jumlahpenilai === 0) {
            $paketsoal = $paketsoal->update(['rating' => $data["rating"]]);
        } else {
            $newPenilaian = ceil(($paketsoal->rating + $data['rating']) / ($jumlahpenilai + 1));
            $paketsoal = $paketsoal->update(['rating' => $newPenilaian]);
        }


        $result = Penilaian::create($data);
        if ($result) {
            return redirect()->back();
        } else {
            return redirect()->back();
        }
    }
}
