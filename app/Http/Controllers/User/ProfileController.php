<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\UserData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;

use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        $cart = null;
        $userdata = null;

        $paketsoal['base_url'] = url("/");


        if (Auth::user()) {
            // dd("test");
            $cart = Cart::where('email_user', Auth::user()->email)
                ->with(['paketsoal'])->get();
            $userdata = UserData::where('user_data_tbl.email', Auth::user()->email)->first();
        }
        return Inertia::render('frontpage/UserInfo', ['base_url' => url('/'), 'cart' => $cart, 'user_data' => $userdata]);
    }
    public function update(Request $request)
    {
        $data = [
            'provinsi' => $request->provinsi,
            'kabupaten' => $request->kabupaten,
            'nohp' => $request->nohp,
        ];


        $userdata = UserData::where('user_data_tbl.email', Auth::user()->email)->first();
        $userdata = $userdata->update($data);
        if ($userdata) {
            return redirect()->back()->with('message', ['success' => 'Profil Berhasil Di simpan']);
        }
        return redirect()->back()->with('message', ['error' => 'Terjadi Kesalahan']);
    }

    public function password()
    {
        $cart = null;

        $paketsoal['base_url'] = url("/");

        $userdata = UserData::where('user_data_tbl.email', Auth::user()->email);


        if (Auth::user()) {
            // dd("test");
            $cart = Cart::where('email_user', Auth::user()->email)
                ->with(['paketsoal'])->get();
        }
        return Inertia::render('frontpage/UpdatePassword', ['base_url' => url('/'), 'cart' => $cart]);
    }

    public function updatePassoword(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);
        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);
        return back();
    }
}
