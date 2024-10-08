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
        Schema::create('user_data_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('provinsi')->nullable();
            $table->string('kabupaten')->nullable();
            $table->string('nohp')->nullable();
            $table->timestamps();
            $table->foreign('email')->references('email')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_data_tbl');
    }
};
