<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\Admin\OrderController as AdminOrderController;
use App\Http\Controllers\Admin\PenggunaController;
use App\Http\Controllers\Admin\SoalController as AdminSoalController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\Editor;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PeketSoalController;
use App\Http\Controllers\PenilaianController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\RiwayatTransaksiController;
use App\Http\Controllers\SoalController;
use App\Http\Controllers\TipeTestController;
use App\Http\Controllers\User\PaketSoalKuController;
use Illuminate\Support\Facades\Route;



Route::get('/', [ProdukController::class, 'index'])->name('frontpage');
Route::get('/produks/{id}', [ProdukController::class, 'detail'])->name('detailproduct');
Route::get('/kerjakansoal/{id}', [SoalController::class, 'index'])->name('kerjakansoal');
Route::get('/cart', [CartController::class, 'index'])->middleware('auth')->name('cart');
Route::delete('/cartitem/delete/{id}', [CartController::class, 'delete'])->middleware('auth')->name('delete.cartitem');
Route::post('/addtocart/{id}', [CartController::class, 'addtocart'])->name('addtocart')->middleware('auth');
Route::get('/riwayattransaksi', [RiwayatTransaksiController::class, 'index'])->name('riwayattransaksi')->middleware('auth');
Route::get('/checkout', [OrderController::class, 'index'])->name('checkout')->middleware('auth');
Route::post('/buatpesanan', [OrderController::class, 'store'])->name('buatpesanan')->middleware('auth');
Route::get('/pembayaran/{id}', [OrderController::class, 'bayar'])->name('pembayaran')->middleware('auth');
Route::get('/hasilujian/{id}', [SoalController::class, 'hasilujian'])->name('hasilujian')->middleware('auth');
Route::get('/examroom', [ExamController::class, 'initExam'])->name('initExam')->middleware('auth');
Route::get('/examdashboard', [ExamController::class, 'dashboard'])->name('initExam')->middleware('auth');
Route::get('/user/paketsoal', [PaketSoalKuController::class, 'index'])->name('user.paketsoal')->middleware('auth');
Route::post('/endexam', [ExamController::class, 'endExam'])->name('exam.end')->middleware('auth');
// Route::post('/user/lihatpembahasan', [])



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

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

Route::get('/editor/dashboard', [Editor::class, 'index'])->middleware('auth', 'editor');

require __DIR__ . '/auth.php';
