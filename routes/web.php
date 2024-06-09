<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\DetailProduct;
use App\Http\Controllers\Editor;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Test;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\SoalController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('frontpage/Frontpage', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// })->name('frontpage');

Route::get('/', [ProdukController::class, 'index']);
Route::get('/produks/{id}', [ProdukController::class, 'detail']);

Route::get('/paketsoal/{id}', [SoalController::class, 'index']);


Route::get('/detailproduct', [DetailProduct::class, 'index'])->name('detailproduct');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/dashboard', function () {
//     return Inertia::render('admin/Dashboard');
// })->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/admin/dashboard', [Admin::class, 'index'])->middleware('auth', 'admin');
Route::get('/editor/dashboard', [Editor::class, 'index'])->middleware('auth', 'editor');

require __DIR__ . '/auth.php';
