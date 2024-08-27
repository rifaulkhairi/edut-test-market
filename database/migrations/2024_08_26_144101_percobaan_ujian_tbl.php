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
        Schema::create('percobaan_ujian_tbl', function (Blueprint $table) {
            $table->id();
            $table->foreignId('paketsoal_id')->constrained('paket_soal_tbl')->cascadeOnDelete();
            $table->string('email_user');
            $table->string('status')->default('pending');
            $table->double('total_nilai')->nullable();
            $table->timestamp('diselesaikan_pada')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('percobaan_ujian_tbl');
    }
};
