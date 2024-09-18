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
        Schema::create('transfer_bank_payment_tbl', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('order_tbl', 'id')->cascadeOnDelete();
            $table->string('bank');
            $table->timestamp('expiry_time')->nullable();
            $table->string('virtual_account')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transfer_bank_payment_tbl');
    }
};
