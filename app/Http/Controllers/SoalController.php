<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DataSoal;
use Inertia\Inertia;

class SoalController extends Controller
{
    public function index($id)
    {
        $paketSoal = DataSoal::find($id);

        function generateRandomOrderQuestions($questions)
        {
            // Shuffle the array of questions
            shuffleArray($questions);

            // Shuffle the choices for each question
            foreach ($questions as &$question) {
                shuffleArray($question['choices']);
            }

            return $questions;
        }

        function shuffleArray(&$array)
        {
            $length = count($array);
            for ($i = $length - 1; $i > 0; $i--) {
                $j = mt_rand(0, $i); // Generate a random index
                // Swap elements
                $temp = $array[$i];
                $array[$i] = $array[$j];
                $array[$j] = $temp;
            }
        }

        // if (!$paketSoal) {
        //     return redirect('/produk')->with('error', 'Produk tidak ditemukan');
        // }
        $randomOrderQuestions = generateRandomOrderQuestions($paketSoal['soal']);
        dd($randomOrderQuestions);
        // return Inertia::render('frontpage/DetailSoal', ['soal' => $randomOrderQuestions]);
    }
}
