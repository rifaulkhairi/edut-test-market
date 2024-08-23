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
        Schema::create('options_tbl', function (Blueprint $table) {
            $table->id();
            $table->text('option');
            $table->double('nilai');
            $table->foreignId('question_id')->constrained('questions_tbl', 'id')->onDelete('cascade');
            $table->char('Alias');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('options_tbl');
    }
};
