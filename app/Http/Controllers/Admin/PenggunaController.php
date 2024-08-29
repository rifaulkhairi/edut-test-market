<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class PenggunaController extends Controller
{
    public function list()
    {

        $users = User::all();

        return Inertia::render('admin/Pages/pengguna/ListPengguna', ['users' => $users]);
    }
    public function save(Request $request)
    {

        // dd($request);
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'userType' => $request->usertype,
            'password' => Hash::make($request->password),
        ];
        $user = User::create($data);
        if ($user) {
            return redirect()->back()->with('message', ['success' => 'Pengguna Berhasil ditambahkan']);
        } else {
            return redirect()->back()->with('message', ['error' => 'Terjadi Kesalahan']);
        }
    }
    public function delete(Request $request, $id)
    {

        $user = User::find($id)->delete();
        if ($user) {
            if ($user) {
                return redirect()->back()->with('message', ['success' => 'User Berhasil Dihapus']);
            } else {
                return redirect()->back()->with('message', ['error' => 'Terjadi Kesalahan']);
            }
        }
    }
}
