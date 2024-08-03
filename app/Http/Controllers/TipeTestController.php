<?php

namespace App\Http\Controllers;

use App\Models\TipeTest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TipeTestController extends Controller
{
    public function show()
    {
        $typeTests = TipeTest::all();
        return Inertia::render('admin/Pages/tipetest/ListTipeTes', ['tipe_test' => $typeTests]);
    }
    public function add()
    {
        return Inertia::render('admin/Pages/tipetest/AddTipeTes');
    }

    public function edit(Request $request, $id)
    {
        $tipetest = TipeTest::find($id);
        return Inertia::render('admin/Pages/tipetest/EditTipeTes', ['tipetest' => $tipetest]);
    }
    public function store(Request $request)
    {
        $data = ['name' => $request->name];

        TipeTest::create($data);

        return to_route('daftartipetest');
    }

    public function delete(Request $request, $id)
    {
        $tipetest = TipeTest::find($id);

        if ($tipetest) {
            $tipetest->delete();
        }

        return to_route('daftartipetest');
    }
    public function update(Request $request, $id)
    {
        $data = [
            'name' => $request->name,
        ];

        $tipetest = TipeTest::find($id);

        $tipetest->update($data);

        return to_route('daftartipetest');
    }
}
