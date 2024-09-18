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
        Schema::create('qris_payment_tbl', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('order_tbl', 'id')->cascadeOnDelete();
            $table->timestamp('expiry_time')->nullable();
            $table->string('qr_code_link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('qris_payment_tbl');
    }
};
