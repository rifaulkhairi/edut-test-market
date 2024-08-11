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
        return Inertia::render('admin/Pages/ListPaketSoal', ['daftarpaketsoal' => $daftarpaketsoal]);
    }

    public function addPaketSoal()
    {

        return Inertia::render('admin/Pages/AddPaketSoal');
    }

    public function viewPaketSoal(Request $request, $id)
    {
        $paketsoal = PaketSoal::find($id);
        $paketsoal['base_url'] = url("/");
        $penilaian = Penilaian::where('penilaian_tbl.id_paket_soal', '=', $id)
            ->with('replies')
            ->get();

        // dd($penilaian[0]->replies);

        $datapenilaian = $penilaian->map(function ($item) {
            return [
                "id" => $item->id,
                "comment" => $item->comment,
                "id_paket_soal" => $item->id_paket_soal,
                "created_by" => $item->created_by,
                "rating" => $item->rating,
                "created_at" => Carbon::parse($item->created_at)->format('Y-m-d H:i:s'),
                "updated_at" => Carbon::parse($item->updated_at)->format('Y-m-d H:i:s'),
                "replies" => $item->replies,

            ];
        });
        $paketsoal['penilaian'] = $datapenilaian;

        $averageRating = Penilaian::where('id_paket_soal', $id)->avg('rating');
        $paketsoal['rating'] = $averageRating;

        return Inertia::render('admin/Pages/ViewPaketSoal', ['paketsoal' => $paketsoal]);
    }
    public function editPaketSoal()
    {
        return Inertia::render('admin/Pages/EditPaketSoal');
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


        // dd($data);

        if ($request->hasFile('cover')) {
            $file = $request->file('cover');
            $path = $file->store('cover', 'public');
        }

        PaketSoal::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'link_cover' => $path,
            'price' => $request['price'],
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
        ];

        $paketsoal->update($data);
        return to_route('daftarpaketsoal');
    }

    public function edit(Request $request, $id)
    {
        $paketsoal = PaketSoal::find($id);

        return Inertia::render('admin/Pages/EditPaketSoal', ['paketsoal' => $paketsoal]);
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
