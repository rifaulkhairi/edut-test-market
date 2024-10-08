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
        Schema::create('paket_soal_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('link_cover')->nullable();
            $table->double('price');
            $table->float('discount');
            $table->integer('terjual')->default(0);
            $table->integer('suka')->default(0);
            $table->string('status')->default('pending'); //pending, publish
            $table->float('rating')->nullable();
            $table->integer('jam')->default(0);
            $table->integer('menit')->default(0);
            $table->integer('detik')->default(0);
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->timestamps();

            $table->foreign('created_by')->references('email')->on('users')->onDelete('set null');
            $table->foreign('updated_by')->references('email')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paket_soal_tbl');
    }
};
