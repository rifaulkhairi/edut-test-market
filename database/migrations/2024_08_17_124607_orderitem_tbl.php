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
        Schema::create('orderitem_tbl', function (Blueprint $table) {
            $table->id();
            $table->foreignId('paketsoal_id')->constrained('paket_soal_tbl', 'id')->onDelete('cascade');
            $table->foreignId('order_id')->constrained('order_tbl', 'id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orderitem_tbl');
    }
};
