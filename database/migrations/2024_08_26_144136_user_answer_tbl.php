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
        Schema::create('user_answer_tbl', function (Blueprint $table) {
            $table->id();
            $table->foreignId('question_id')->constrained('questions_tbl');
            $table->string('answer')->nullable();
            $table->foreignId('option_id')->constrained('options_tbl')->nullable();
            $table->foreignId('percobaan_id')->constrained('percobaan_ujian_tbl');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_answer_tbl');
    }
};
