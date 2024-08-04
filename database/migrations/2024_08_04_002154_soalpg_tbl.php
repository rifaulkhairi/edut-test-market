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
        Schema::create('soalpg_tbl', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('paketsoal_id')->nullable();
            $table->text('soal');
            $table->text('opsiA');
            $table->text('opsiB');
            $table->text('opsiC');
            $table->text('opsiD');
            $table->text('opsiE');
            $table->text('pembahasan');
            $table->unsignedBigInteger('tipetest_id')->nullable();
            $table->string('jawaban_betul');
            $table->string('status');
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->timestamps();

            $table->foreign('created_by')->references('email')->on('users')->onDelete('set null');
            $table->foreign('updated_by')->references('email')->on('users')->onDelete('set null');
            $table->foreign('paketsoal_id')->references('id')->on('paket_soal_tbl')->onDelete('set null');
            $table->foreign('tipetest_id')->references('id')->on('tipe_test_tbl')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('soalpg_tbl');
    }
};
