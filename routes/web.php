<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\Admin\SoalController as AdminSoalController;
use App\Http\Controllers\DetailProduct;
use App\Http\Controllers\Editor;
use App\Http\Controllers\PeketSoalController;
use App\Http\Controllers\PenilaianController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Test;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\SoalController;
use App\Http\Controllers\TipeTestController;
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
Route::get('/produks/{id}', [ProdukController::class, 'detail'])->name('detailproduct');

Route::get('/paketsoal/{id}', [SoalController::class, 'index'])->name('paketsoal');



// Route::get('/detailproduct', [DetailProduct::class, 'index'])->name('detailproduct');

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

Route::middleware('auth', 'admin')->group(function () {
    Route::get('/admin/dashboard', [Admin::class, 'index']);
    Route::get('/admin/addsoal', [Admin::class, 'addSoal']);

    // Paket Soal
    Route::get('/admin/addpaketsoal', [PeketSoalController::class, 'addPaketSoal']);
    Route::get('/admin/viewpaketsoal/{id}', [PeketSoalController::class, 'viewPaketSoal']);
    Route::get('/admin/editpaketsoal', [PeketSoalController::class, 'editPaketSoal']);
    Route::get('/admin/daftarpaketsoal', [PeketSoalController::class, 'showAll'])->name('daftarpaketsoal');
    Route::get('/admin/editpaketsoal/{id}', [PeketSoalController::class, 'edit'])->name('editpaketsoal');
    Route::patch('/admin/paketsoal/update/{id}', [PeketSoalController::class, 'update']);
    Route::delete('/admin/paketsoal/{id}/delete', [PeketSoalController::class, 'delete']);
    Route::post('/admin/storepaketsoal', [PeketSoalController::class, 'storePaketSoal']);

    // tipe test
    Route::get('/admin/addtipetest', [TipeTestController::class, 'add'])->name('addtipetest');
    Route::get('/admin/daftartipetest', [TipeTestController::class, 'show'])->name('daftartipetest');
    Route::get('/admin/edittipetest/{id}', [TipeTestController::class, 'edit'])->name('edittipetest');
    Route::post('/admin/tipetest/store', [TipeTestController::class, 'store']);
    Route::patch('/admin/tipetest/update/{id}', [TipeTestController::class, 'update']);
    Route::delete('/admin/tipetest/delete/{id}', [TipeTestController::class, 'delete']);


    // soal
    Route::get('/admin/addsoalpg', [AdminSoalController::class, 'addsoalpg'])->name('addsoalpg');
    Route::get('/admin/daftarsoal', [AdminSoalController::class, 'show'])->name('daftarsoal');
    Route::post('/admin/storsoal', [AdminSoalController::class, 'store'])->name('store');
    Route::get('/admin/detailsoal/{id}', [AdminSoalController::class, 'detail'])->name('admin.detailsoal');
    Route::get('/admin/editsoal/{id}', [AdminSoalController::class, 'edit'])->name('admin.editsoal');
    Route::patch('/admin/updatesoal/{id}', [AdminSoalController::class, 'update'])->name('admin.update.soal');
    Route::delete('/admin/deletesoal/{id}', [AdminSoalController::class, 'delete'])->name('admin.delete.soal');

    Route::delete('/admin/deletepenilaian/{id}', [PenilaianController::class, 'delete'])->name('admin.delete.penilaian');
    Route::post('/admin/storereply/{id}', [PenilaianController::class, 'reply'])->name('admin.reply.penilaian');





    // Route::get('/admin/edittipetest/{id}', [TipeTestController::class, 'edit'])->name('edittipetest');
    // Route::post('/admin/tipetest/store', [TipeTestController::class, 'store']);
    // Route::patch('/admin/tipetest/update/{id}', [TipeTestController::class, 'update']);
    // Route::delete('/admin/tipetest/delete/{id}', [TipeTestController::class, 'delete']);
});

// Route::get('/admin/dashboard', [Admin::class, 'index'])->middleware('auth', 'admin');
Route::get('/editor/dashboard', [Editor::class, 'index'])->middleware('auth', 'editor');

require __DIR__ . '/auth.php';
