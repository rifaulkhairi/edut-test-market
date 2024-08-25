<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::post('/verify-pyment', [OrderController::class, 'verify'])->name('verify-pyment');
Route::post('/save-answer', [AnswerController::class, 'store'])->name('answere.store');

