<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\Admin\OrderController as AdminOrderController;
use App\Http\Controllers\Admin\PenggunaController;
use App\Http\Controllers\Admin\SoalController as AdminSoalController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\Editor;
use App\Http\Controllers\Editor\SoalController as EditorSoalController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PeketSoalController;
use App\Http\Controllers\PembahasanController;
use App\Http\Controllers\PenilaianController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\RiwayatTransaksiController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SoalController;
use App\Http\Controllers\TipeTestController;
use App\Http\Controllers\User\PaketSoalKuController;
use App\Http\Controllers\User\ProfileController as UserProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ProdukController::class, 'index'])->name('frontpage');
Route::get('/produks/{id}', [ProdukController::class, 'detail'])->name('detailproduct');
Route::get('/preview/{id}', [SoalController::class, 'index'])->name('kerjakansoal');
Route::get('/cart', [CartController::class, 'index'])->middleware(['auth', 'verified'])->name('cart');
Route::delete('/cartitem/delete/{id}', [CartController::class, 'delete'])->middleware(['auth', 'verified'])->name('delete.cartitem');
Route::post('/addtocart/{id}', [CartController::class, 'addtocart'])->name('addtocart')->middleware(['auth', 'verified']);
Route::get('/riwayattransaksi', [RiwayatTransaksiController::class, 'index'])->middleware(['auth', 'verified']);
Route::get('/checkout', [OrderController::class, 'index'])->name('checkout')->middleware(['auth', 'verified']);
Route::post('/buatpesanan', [OrderController::class, 'store'])->name('buatpesanan')->middleware(['auth', 'verified']);
Route::get('/pembayaran/{id}', [OrderController::class, 'bayar'])->name('pembayaran')->middleware(['auth', 'verified']);
Route::get('/hasilujian/{id}', [SoalController::class, 'hasilujian'])->name('hasilujian')->middleware(['auth', 'verified']);
Route::get('/examroom', [ExamController::class, 'initExam'])->name('initExam')->middleware(['auth', 'ordered', 'verified']);
Route::get('/examdashboard', [ExamController::class, 'dashboard'])->name('dashboard.exam')->middleware(['auth', 'ordered', 'verified']);
Route::get('/user/paketsoal', [PaketSoalKuController::class, 'index'])->name('user.paketsoal')->middleware(['auth', 'verified']);
Route::post('/endexam', [ExamController::class, 'endExam'])->name('exam.end')->middleware(['auth', 'verified']);
Route::get('/user/view/pembahasan', [PembahasanController::class, 'index'])->name('view.pembahasan')->middleware(['auth', 'ordered', 'verified']);
Route::post('/rating/save', [PenilaianController::class, 'store'])->name('rating.save')->middleware(['auth', 'ordered', 'verified']);
Route::get('/paketsoal/search', [SearchController::class, 'search'])->name('paketsoal.search');
Route::get('/user/info', [UserProfileController::class, 'index'])->name('user.info')->middleware(['auth', 'verified']);
Route::patch('/user/info', [UserProfileController::class, 'update'])->name('user.info.update')->middleware(['auth', 'verified']);
Route::get('/user/info/password', [UserProfileController::class, 'password'])->name('user.info')->middleware(['auth', 'verified']);
Route::put('/user/info/password', [UserProfileController::class, 'updatePassoword'])->name('user.passoword.update')->middleware(['auth', 'verified']);


Route::middleware('auth', 'admin')->group(function () {
    Route::get('/admin/dashboard', [Admin::class, 'index']);

    // Paket Soal
    Route::get('/admin/addpaketsoal', [PeketSoalController::class, 'addPaketSoal']);
    Route::get('/admin/viewpaketsoal/{id}', [PeketSoalController::class, 'viewPaketSoal']);
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

    // pengguna
    Route::get('/admin/listpengguna', [PenggunaController::class, 'list'])->name('pengguna.list');
    Route::post('/admin/save/pengguna', [PenggunaController::class, 'save'])->name('pengguna.save');
    Route::delete('/admin/delete/pengguna/{id}', [PenggunaController::class, 'delete'])->name('pengguna.delete');

    // Order
    Route::get('/admin/order/list', [AdminOrderController::class, 'index'])->name('order.list');
});


Route::middleware('auth', 'editor')->group(function () {
    Route::get('/editor/dashboard', [Editor::class, 'index'])->name('editor.dashboard');

    // soal
    Route::get('/editor/addsoalpg', [EditorSoalController::class, 'addsoalpg'])->name('editor.addsoalpg');
    Route::get('/editor/daftarsoal', [EditorSoalController::class, 'show'])->name('editor.daftarsoal');
    Route::post('/editor/storsoal', [EditorSoalController::class, 'store'])->name('editor.storesoal');
    Route::get('/editor/detailsoal/{id}', [EditorSoalController::class, 'detail'])->name('admin.detailsoal');
    Route::get('/editor/editsoal/{id}', [EditorSoalController::class, 'edit'])->name('admin.editsoal');
    Route::patch('/editor/updatesoal/{id}', [EditorSoalController::class, 'update'])->name('admin.update.soal');
    Route::delete('/editor/deletesoal/{id}', [EditorSoalController::class, 'delete'])->name('admin.delete.soal');
});

require __DIR__ . '/auth.php';
