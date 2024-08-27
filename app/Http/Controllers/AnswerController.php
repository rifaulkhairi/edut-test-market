<?php

namespace App\Http\Controllers;

use App\Models\UserAnswer;
use Illuminate\Http\Request;
use Termwind\Components\Dd;

class AnswerController extends Controller
{
    public function store(Request $request)
    {
        if ($request->tipesoal == 'pg') {
            $useranswer = UserAnswer::where('user_answer_tbl.question_id', $request->question_id)
                ->where('user_answer_tbl.percobaan_id', $request->percobaan_id)
                ->first();
            $data = [
                'question_id' => $request->question_id,
                'percobaan_id' => $request->percobaan_id,
                'answer' => $request->answer,
                'option_id' => $request->option_id,
            ];

            if ($useranswer) {
                $useranswer->update(['answer' => $request->answer]);
            } else {
                UserAnswer::create($data);
            }
        }



        return response()->json(['success' => true, 'message' => 'Jawaban berhasil disimpan']);
    }
}
