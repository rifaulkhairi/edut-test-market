<?php

namespace App\Http\Controllers;

use App\Models\Penilaian;
use App\Models\Reply;
use Illuminate\Http\Request;

class PenilaianController extends Controller
{
    public function delete($id)
    {


        $penilaian = Penilaian::find($id);
        $idpaketsoal = $penilaian->id_paket_soal;
        $penilaian->delete();

        return redirect('/admin/viewpaketsoal/' . $idpaketsoal);
    }

    public function reply(Request $request, $id)
    {

        // dd($id);
        $data = [
            'comment' => $request->reply,
            'penilaian_id' => $id,
        ];
        // dd($data);
        Reply::create($data);
        return redirect()->back();
    }
}
