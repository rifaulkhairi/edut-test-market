<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('questions_tbl', function (Blueprint $table) {
            $table->id();
            $table->text('question');
            $table->foreignId('paketsoal_id')->constrained('paket_soal_tbl', 'id')->onDelete('cascade');
            $table->foreignId('tipetest_id')->constrained('tipe_test_tbl', 'id');
            $table->string('created_by')->nullable();
            $table->string('tipe_soal')->default('pg'); //pg pg-v2 pgcomplex benarsalah
            $table->text('pembahasan');
            $table->timestamps();
            $table->foreign('created_by')->references('email')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions_tbl');
    }
};
