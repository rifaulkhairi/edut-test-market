<?php

namespace App\Http\Controllers;

use App\Models\UserData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RankController extends Controller
{
    public function rank(Request $request)
    {
        $rankedusers = [];
        $userrank = null;

        // Check for `provinsi`, `kabupaten`, and `paketsoal_id` in the request
        if ($request->provinsi != null && $request->kabupaten != null) {
            // Query with both provinsi and kabupaten
            $rankedusers = DB::select("
                SELECT 
                    ROW_NUMBER() OVER (ORDER BY MAX(p.total_nilai) DESC) AS ranking,
                    u.name, 
                    u.email, 
                    ud.provinsi, 
                    ud.kabupaten, 
                    MAX(p.total_nilai) AS total_nilai
                FROM percobaan_ujian_tbl AS p
                JOIN user_data_tbl AS ud ON p.email_user = ud.email
                JOIN users AS u ON p.email_user = u.email
                WHERE p.paketsoal_id = :paketSoalId AND ud.provinsi = :provinsi AND ud.kabupaten = :kabupaten
                GROUP BY u.name, u.email, ud.provinsi, ud.kabupaten
                ORDER BY total_nilai DESC
                LIMIT 10
            ", [
                'paketSoalId' => $request->paketsoal_id,
                'provinsi' => $request->provinsi,
                'kabupaten' => $request->kabupaten,
            ]);
            if ($request->email) {
                $user = UserData::where('user_data_tbl.email', $request->email)->first();
                if ($user->provinsi === $request->provinsi) {
                    $userrank = DB::select("
                        WITH RankedUsers AS (
                            SELECT 
                                ROW_NUMBER() OVER (ORDER BY MAX(p.total_nilai) DESC) AS ranking,
                                u.name, 
                                u.email, 
                                ud.provinsi, 
                                ud.kabupaten, 
                                MAX(p.total_nilai) AS total_nilai
                            FROM percobaan_ujian_tbl AS p
                            JOIN user_data_tbl AS ud ON p.email_user = ud.email
                            JOIN users AS u ON p.email_user = u.email
                            WHERE p.paketsoal_id = :paketSoalId AND ud.provinsi = :provinsi AND ud.kabupaten = :kabupaten
                            GROUP BY u.name, u.email, ud.provinsi, ud.kabupaten
                        )
                        SELECT * 
                        FROM RankedUsers 
                        WHERE email = :email
                    ", [
                        'paketSoalId' => $request->paketsoal_id,
                        'email' => $request->email,
                        'provinsi' => $request->provinsi,
                        'kabupaten' => $request->kabupaten,
                    ]);
                }
            }
            return response()->json([
                'ranked_users' => $rankedusers,
                'user_rank' => $userrank
            ]);
        } else if ($request->provinsi != null) {
            // Query with only provinsi
            $rankedusers = DB::select("
                SELECT 
                    ROW_NUMBER() OVER (ORDER BY MAX(p.total_nilai) DESC) AS ranking,
                    u.name, 
                    u.email, 
                    ud.provinsi, 
                    ud.kabupaten, 
                    MAX(p.total_nilai) AS total_nilai
                FROM percobaan_ujian_tbl AS p
                JOIN user_data_tbl AS ud ON p.email_user = ud.email
                JOIN users AS u ON p.email_user = u.email
                WHERE p.paketsoal_id = :paketSoalId AND ud.provinsi = :provinsi
                GROUP BY u.name, u.email, ud.provinsi, ud.kabupaten
                ORDER BY total_nilai DESC
                LIMIT 10
            ", [
                'paketSoalId' => $request->paketsoal_id,
                'provinsi' => $request->provinsi
            ]);
        } else {
            // Query without any filters
            $rankedusers = DB::select("
                SELECT 
                    ROW_NUMBER() OVER (ORDER BY MAX(p.total_nilai) DESC) AS ranking,
                    u.name, 
                    u.email, 
                    ud.provinsi, 
                    ud.kabupaten, 
                    MAX(p.total_nilai) AS total_nilai
                FROM percobaan_ujian_tbl AS p
                JOIN user_data_tbl AS ud ON p.email_user = ud.email
                JOIN users AS u ON p.email_user = u.email
                WHERE p.paketsoal_id = :paketSoalId
                GROUP BY u.name, u.email, ud.provinsi, ud.kabupaten
                ORDER BY total_nilai DESC
                LIMIT 10
            ", [
                'paketSoalId' => $request->paketsoal_id,
            ]);
        }

        // Get the ranking of the authenticated user
        // if (Auth::user()) {

        if ($request->email) {
            $userrank = DB::select("
            WITH RankedUsers AS (
                SELECT 
                    ROW_NUMBER() OVER (ORDER BY MAX(p.total_nilai) DESC) AS ranking,
                    u.name, 
                    u.email, 
                    ud.provinsi, 
                    ud.kabupaten, 
                    MAX(p.total_nilai) AS total_nilai
                FROM percobaan_ujian_tbl AS p
                JOIN user_data_tbl AS ud ON p.email_user = ud.email
                JOIN users AS u ON p.email_user = u.email
                WHERE p.paketsoal_id = :paketSoalId
                GROUP BY u.name, u.email, ud.provinsi, ud.kabupaten
            )
            SELECT * 
            FROM RankedUsers 
            WHERE email = :email
        ", [
                'paketSoalId' => $request->paketsoal_id,
                'email' => $request->email,
            ]);
        }

        // }
        // dd($userrank);


        // Return the ranked users and the authenticated user's rank in JSON format
        return response()->json([
            'ranked_users' => $rankedusers,
            'user_rank' => $userrank
        ]);
    }
}
