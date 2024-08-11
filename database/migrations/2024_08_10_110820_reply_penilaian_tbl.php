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
        Schema::create('reply_penilaian_tbl', function (Blueprint $table) {
            $table->id();
            $table->text('comment');
            $table->foreignId('penilaian_id')->constrained('penilaian_tbl')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reply_penilaian_tbl');
    }
};
