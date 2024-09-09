<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Option;
use App\Models\PaketSoal;
use App\Models\Question;
use App\Models\TipeTest;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

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

        $questions = Question::with('options', 'author', 'paketsoal', 'tipetest')->get();



        return Inertia::render('admin/Pages/soal/ListSoal', ['question' => $questions]);
    }
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'soal' => 'required|string',
            'choices' => 'required|array|min:2',
            'choices.*.choice_text' => 'required|string',
            'choices.*.points' => 'required|numeric',
            'pembahasan' => 'required|string',
            'idpaketsoal' => 'required',
            'idtipetest' => 'required',
            'tipesoal' => 'required|string|in:pg,pgcomplex,bs',

        ]);
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }
        DB::beginTransaction();
        try {
            $questiondata = [
                'question' => $request->soal,
                'paketsoal_id' => $request->idpaketsoal,
                'tipetest_id' => $request->idtipetest,
                'created_by' => Auth::user()->email,
                'tipe_soal' => $request->tipesoal,
                'pembahasan' => $request->pembahasan,
            ];

            $question = Question::create($questiondata);
            // dd($question);

            foreach ($request->choices as $choice) {
                $optionsdata = [
                    'option' => $choice["choice_text"],
                    'nilai' => $choice["points"],
                    'Alias' => $choice["alias"],
                    'question_id' => $question["id"],
                ];
                Option::create($optionsdata);
            }

            DB::commit();
            return to_route('daftarsoal')->with('message', ['success' => 'Soal Berhasil Ditambahkan']);
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Error while storing question and choices: ' . $e->getMessage());
            return redirect()->back()->with('message', ['error' => 'Something went wrong']);
        }
    }

    public function detail(Request $request, $id)
    {
        $question = Question::where('questions_tbl.id', '=', $id)->with('options', 'author', 'paketsoal', 'tipetest')->first();


        return Inertia::render('admin/Pages/soal/DetailSoal', ['question' => $question]);
    }

    public function edit(Request $request, $id)
    {
        $question = Question::where('questions_tbl.id', '=', $id)->with('options', 'author', 'paketsoal', 'tipetest')->first();



        $tipetest = TipeTest::all();
        $paketsoal = PaketSoal::all();
        return Inertia::render('admin/Pages/soal/EditSoalPG', ['tipetest' => $tipetest, 'paketsoal' => $paketsoal, 'question' => $question]);
    }

    public function update(Request $request, $id)
    {

        // dd($request);
        $validator = Validator::make($request->all(), [
            'soal' => 'required|string',
            'choices' => 'required|array|min:2',
            'choices.*.option' => 'required|string',
            'choices.*.nilai' => 'required|numeric',
            'pembahasan' => 'required|string',
            'idpaketsoal' => 'required',
            'idtipetest' => 'required',
            'tipesoal' => 'required|string|in:pg,pgcomplex,bs',

        ]);
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }
        DB::beginTransaction();
        try {
            $questiondata = [
                'question' => $request->soal,
                'paketsoal_id' => $request->idpaketsoal,
                'tipetest_id' => $request->idtipetest,
                'tipe_soal' => $request->tipesoal,
                'pembahasan' => $request->pembahasan,
                'preview' => $request->preview,
            ];

            $question = Question::find($id);
            if ($question) {
                $question->update($questiondata);
            }

            foreach ($request->choices as $choice) {
                $optionsdata = [
                    'option' => $choice["option"],
                    'nilai' => $choice["nilai"],
                    'Alias' => $choice["Alias"],
                ];

                $option = Option::find($choice["id"]);
                if ($option) {
                    $option->update($optionsdata);
                }
            }

            DB::commit();
            return to_route('daftarsoal')->with('message', ['success' => 'Soal Berhasil di Perbaharui']);
        } catch (Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('message', ['error' => 'Something went wrong']);
        }
    }

    public function delete($id)
    {
        $question = Question::find($id);
        $question->delete();
        return redirect()->back()->with('message', ['success' => 'Soal Berhasil Dihapus']);
    }
}
