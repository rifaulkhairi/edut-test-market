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
        Schema::create('order_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('email_user')->nullable();
            $table->string('status')->default('pending');
            $table->string('payment_type');
            $table->string('invoice')->nullable();
            $table->timestamps();
            $table->timestamp('expiry_time')->nullable();
            $table->double('gross_amount');
            $table->text('qr_code_link')->nullable();
            $table->foreign('email_user')->references('email')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_tbl');
    }
};
