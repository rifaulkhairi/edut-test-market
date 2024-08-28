import SimpleFrontpageLayout from "@/Layouts/SimpleFrontpageLayout";
import React from "react";
import { Autocomplete, Breadcrumbs, TextField } from "@mui/material";
import { Link, router } from "@inertiajs/react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Image from "@/Components/Image";
import Button from "@/Components/Button";
import { BiCoinStack } from "react-icons/bi";
import { LuClock3 } from "react-icons/lu";
import { GiLaurelsTrophy } from "react-icons/gi";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useState } from "react";

const colors = ["#0075a3", "#009dad", "#00c29d", "#8be281", "#f9f871"];

const HasilUjian = ({
    auth,
    percobaanujian,
    paketsoal,
    statistik,
    userrank,
    inprogresspercobaanujian,
    base_url,
}) => {
    const [percobaan, setPercobaan] = useState(
        statistik[statistik.length - 1] || null
    );

    const handlePercobaanChange = (event, value) => {
        setPercobaan(value);
        console.log("percobaan", percobaan);
        console.log("data percobaan", percobaan.data);
    };
    // console.log(statistik.data);
    return (
        <SimpleFrontpageLayout user={auth}>
            <div className="flex flex-col w-full max-w-5xl mt-9">
                <Breadcrumbs separator={<MdOutlineNavigateNext />}>
                    <Link href="/">Beranda</Link>
                    <Link>Analitic</Link>
                </Breadcrumbs>
                <h1 className="mt-4 font-bold text-secondary text-xl">
                    Analitic
                </h1>
                <div className="flex gap-4 mt-3">
                    <div className="w-fit h-40">
                        <Image
                            src={`${base_url}/storage/${paketsoal.link_cover}`}
                            className="w-40 h-40 rounded-md"
                        />
                    </div>

                    <div className="flex flex-col justify-between pb-2">
                        <div className="text-lg font-bold text-gray-700">
                            {paketsoal.name}
                        </div>
                        <ul className="flex  gap-x-4">
                            <li className="relative flex flex-col w-32 bg-white px-4 py-3 gap-y-3 rounded-xl shadow-md shadow-secondary/15 border-l-4 border-secondary">
                                <div className="absolute top-2 right-3">
                                    <GiLaurelsTrophy className="text-2xl text-secondary/35" />
                                </div>
                                <p className="text-secondary text-xl font-bold">
                                    {userrank}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Peringkat
                                </p>
                            </li>
                            {inprogresspercobaanujian !== null ? (
                                <li>
                                    <Button
                                        title="Lanjut Ujian"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.get("examroom", {
                                                paketsoal_id: paketsoal.id,
                                            });
                                        }}
                                    />
                                </li>
                            ) : percobaanujian.length === 0 ? (
                                <li>
                                    <Button
                                        title="Mulai Ujian"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.get("examroom", {
                                                paketsoal_id: paketsoal.id,
                                            });
                                        }}
                                    />
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Button
                                            title="Ulangi Ujian"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                router.get("examroom", {
                                                    paketsoal_id: paketsoal.id,
                                                });
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <Button title="Lihat Pembahasan" />
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
                <hr className="mt-4" />
                {statistik.length > 0 ? (
                    <>
                        <div className="bg-white rounded-md mt-4">
                            <div className="text-secondary font-semibold text-md mb-2 mt-4 pl-4">
                                Statistik
                            </div>

                            <div className="p-4 w-60">
                                <Autocomplete
                                    disableClearable={true}
                                    id="percobaan"
                                    value={percobaan}
                                    options={statistik}
                                    getOptionLabel={(option) => option.name}
                                    onChange={(event, value) =>
                                        handlePercobaanChange(event, value)
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Percobaan"
                                        />
                                    )}
                                />
                            </div>
                            <ul className="flex  gap-x-4 w-full justify-center">
                                <li className="relative flex flex-col w-32 bg-white border-l-4 border-green-500 shadow-md shadow-green-500/15 px-4 py-3 gap-y-3 rounded-xl">
                                    <div className="absolute top-2 right-3">
                                        <BiCoinStack className="text-2xl text-gray-400" />
                                    </div>
                                    <p className="text-gray-600 text-xl font-bold">
                                        {percobaan.nilai}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Skor rata-rata
                                    </p>
                                </li>
                                <li className="relative flex flex-col w-32 bg-white border-l-4 border-orange-500 shadow-md shadow-orange-500/15 px-4 py-3 gap-y-3 rounded-xl">
                                    <div className="absolute top-2 right-3">
                                        <LuClock3 className="text-2xl text-gray-400" />
                                    </div>
                                    <p className="text-gray-600 text-xl font-bold">
                                        {percobaan.waktu}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Waktu
                                    </p>
                                </li>
                            </ul>
                            <div className="h-80  p-4">
                                <ResponsiveContainer>
                                    <ComposedChart
                                        width={730}
                                        height={250}
                                        data={percobaan.data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend
                                            align="right"
                                            verticalAlign="middle"
                                            layout="vertical"
                                        />

                                        <Bar
                                            dataKey="jumlahsoal"
                                            fill={colors[0]}
                                        />
                                        <Bar
                                            dataKey="jumlahbenar"
                                            fill={colors[1]}
                                        />
                                        <Bar
                                            dataKey="jumlahsalah"
                                            fill={colors[2]}
                                        />
                                        {/* <Bar dataKey="tkp" fill={colors[3]} /> */}
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </div>
                            <hr className="my-4" />
                            <ul className="flex  gap-x-4 w-full justify-center mb-4">
                                {percobaan.data.map(
                                    (item, index) =>
                                        item.name !== "total" && (
                                            <li
                                                key={index}
                                                className="relative flex flex-col w-40 bg-white px-4 py-3 gap-y-3 rounded-xl shadow-md shadow-secondary/15 border-l-4 border-secondary"
                                            >
                                                <div className="absolute top-2 right-3">
                                                    <BiCoinStack className="text-2xl text-gray-400" />
                                                </div>
                                                <p className="text-gray-600 text-xl font-bold">
                                                    {item.nilai}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {item.name}
                                                </p>
                                            </li>
                                        )
                                )}
                            </ul>
                        </div>
                        <div className="bg-white rounded-md mt-4">
                            <div className="text-secondary font-semibold text-md mb-2 mt-4 pl-4">
                                Data Hasil Percobaan
                            </div>
                            <div className="h-80  p-4">
                                <ResponsiveContainer>
                                    <LineChart
                                        width={730}
                                        height={250}
                                        data={statistik}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend
                                            align="right"
                                            verticalAlign="middle"
                                            layout="vertical"
                                        />

                                        <Line
                                            type="natural"
                                            dataKey="nilai"
                                            stroke={colors[2]}
                                            strokeWidth={3}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>
                        Kamu belum mengerjakan ujian. Silakan Mengerjakan ujian
                        terlebih dahulu
                    </p>
                )}
            </div>
        </SimpleFrontpageLayout>
    );
};

export default HasilUjian;
