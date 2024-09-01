<?php

namespace App\Http\Controllers;

use App\Models\PaketSoal;
use App\Models\Penilaian;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PeketSoalController extends Controller
{
    public function showAll()
    {
        $daftarpaketsoal = PaketSoal::select(
            'id',
            'name',
            'description',
            'price',
            'link_cover',
            'discount'
        )->get();
        return Inertia::render('admin/Pages/paketsoal/ListPaketSoal', ['daftarpaketsoal' => $daftarpaketsoal]);
    }

    public function addPaketSoal()
    {

        return Inertia::render('admin/Pages/paketsoal/AddPaketSoal');
    }

    public function viewPaketSoal(Request $request, $id)
    {
        $paketsoal = PaketSoal::where('paket_soal_tbl.id', '=', $id)->with("penilaian.replies")->get()->first();

        $paketsoal['base_url'] = url("/");

        // $averageRating = Penilaian::where('id_paket_soal', $id)->avg('rating');
        // $paketsoal['rating'] = $averageRating;

        return Inertia::render('admin/Pages/paketsoal/ViewPaketSoal', ['paketsoal' => $paketsoal]);
    }


    public function storePaketSoal(Request $request)
    {

        $data = [
            'name' => $request->name,
            'description' => $request->description,
            'cover' => $request->cover,
            'price' => $request->price,
            'discount' => $request->discount
        ];


        // dd($request);

        if ($request->hasFile('cover')) {
            $file = $request->file('cover');
            $path = $file->store('cover', 'public');
        }

        PaketSoal::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'link_cover' => $path,
            'price' => $request['price'],
            'jam' => $request['jam'],
            'menit' => $request['menit'],
            'detik' => $request['detik'],
            'discount' => $request['discount']
        ]);
        return to_route('daftarpaketsoal');
    }

    public function update(Request $request, $id)
    {


        $paketsoal = PaketSoal::find($id);
        $data = [
            "name" => $request->name,
            "description" => $request->description,
            "price" => $request->price,
            "discount" => $request->discount,
            "jam" => $request->jam,
            "menit" => $request->menit,
            "detik" => $request->detik,
        ];

        $paketsoal->update($data);
        return to_route('daftarpaketsoal');
    }

    public function edit(Request $request, $id)
    {
        $paketsoal = PaketSoal::find($id);

        return Inertia::render('admin/Pages/paketsoal/EditPaketSoal', ['paketsoal' => $paketsoal]);
    }

    public function delete(Request $request, $id)
    {
        $paketsoal = PaketSoal::find($id);
        if ($paketsoal) {
            if (Storage::exists($paketsoal->link_cover)) {
                Storage::delete($paketsoal->link_cover);
            }
            $paketsoal->delete();
            return to_route('daftarpaketsoal')->with('status', 'sukses')->with('message', 'Record deleted successfully.');
        } else {
            return to_route('daftarpaketsoal')->with('status', 'gagal')->with('message', 'Record not found.');
        }
    }
}
