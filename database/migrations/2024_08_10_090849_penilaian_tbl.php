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
        Schema::create('penilaian_tbl', function (Blueprint $table) {
            $table->id();
            $table->text('comment');
            $table->unsignedBigInteger('id_paket_soal');
            $table->string('created_by');
            $table->float('rating');
            $table->timestamps();

            $table->foreign('id_paket_soal')->references('id')->on('paket_soal_tbl')->onDelete("cascade");
            $table->foreign('created_by')->references('email')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('penilaian_tbl');
    }
};
