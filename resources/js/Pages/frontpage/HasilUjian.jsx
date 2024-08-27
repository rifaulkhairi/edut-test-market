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

const data = [
    {
        name: "Jumlah Soal",
        keseluruhan: 150,
        tiu: 50,
        twk: 60,
        tkp: 40,
    },
    {
        name: "Jumlah Benar",
        keseluruhan: 120,
        tiu: 20,
        twk: 40,
        tkp: 60,
    },
    {
        name: "Jumlah Salah",
        keseluruhan: 30,
        tiu: 7,
        twk: 12,
        tkp: 10,
    },
];
const datapercobaan = [
    {
        name: "percobaan 1",
        nilai: 350,
    },
    {
        name: "percobaan 2",
        nilai: 400,
    },
    {
        name: "percobaan 3",
        nilai: 430,
    },
    {
        name: "percobaan 4",
        nilai: 450,
    },
    {
        name: "percobaan 5",
        nilai: 500,
    },
];

const atempData = [
    { id: 1, id_paket_soal: 2, nilai: 20, name: "percobaan 1" },
    { id: 2, id_paket_soal: 2, nilai: 20, name: "percobaan 2" },
    { id: 3, id_paket_soal: 2, nilai: 20, name: "percobaan 3" },
    { id: 4, id_paket_soal: 2, nilai: 20, name: "percobaan 4" },
    { id: 5, id_paket_soal: 2, nilai: 20, name: "percobaan 5" },
];

const HasilUjian = ({ auth, percobaanujian, paketsoal }) => {
    const [percobaan, setPercobaan] = useState();
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
                            src="https://github.com/rifaulkhairi/edu-test-market-public-assets/blob/main/4.png?raw=true"
                            className="w-40 h-40 rounded-md"
                        />
                    </div>

                    <div className="flex flex-col justify-between pb-2">
                        <div className="text-lg font-bold text-gray-700">
                            Soal TKD BUMN 2024
                        </div>
                        <ul className="flex  gap-x-4">
                            <li className="relative flex flex-col w-32 bg-white px-4 py-3 gap-y-3 rounded-xl shadow-md shadow-secondary/15 border-l-4 border-secondary">
                                <div className="absolute top-2 right-3">
                                    <GiLaurelsTrophy className="text-2xl text-secondary/35" />
                                </div>
                                <p className="text-secondary text-xl font-bold">
                                    230
                                </p>
                                <p className="text-sm text-gray-500">
                                    Peringkat
                                </p>
                            </li>
                            {percobaanujian.status === "pending" ? (
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
                                        <Button title="Ulangi Ujian" />
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
                <div className="bg-white rounded-md mt-4">
                    <div className="text-secondary font-semibold text-md mb-2 mt-4 pl-4">
                        Statistik
                    </div>
                    <div className="p-4 w-60">
                        <Autocomplete
                            id="percobaan"
                            value={percobaan}
                            options={atempData}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, value) => {
                                setPercobaan(value);
                                // setSelectedIdTipeTest(value.id);

                                // setData("id_prodi", value.id);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label="Percobaan" />
                            )}
                        />
                    </div>
                    <ul className="flex  gap-x-4 w-full justify-center">
                        <li className="relative flex flex-col w-32 bg-white border-l-4 border-green-500 shadow-md shadow-green-500/15 px-4 py-3 gap-y-3 rounded-xl">
                            <div className="absolute top-2 right-3">
                                <BiCoinStack className="text-2xl text-gray-400" />
                            </div>
                            <p className="text-gray-600 text-xl font-bold">
                                400pts
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
                                2:30:31
                            </p>
                            <p className="text-sm text-gray-500">Waktu</p>
                        </li>
                    </ul>
                    <div className="h-80  p-4">
                        <ResponsiveContainer>
                            <ComposedChart
                                width={730}
                                height={250}
                                data={data}
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
                                    type="linear"
                                    dataKey="keseluruhan"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="linear"
                                    dataKey="tiu"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="linear"
                                    dataKey="twk"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="linear"
                                    dataKey="tkp"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                    <hr className="my-4" />
                    <ul className="flex  gap-x-4 w-full justify-center mb-4">
                        <li className="relative flex flex-col w-32 bg-white px-4 py-3 gap-y-3 rounded-xl shadow-md shadow-secondary/15 border-l-4 border-secondary">
                            <div className="absolute top-2 right-3">
                                <BiCoinStack className="text-2xl text-gray-400" />
                            </div>
                            <p className="text-gray-600 text-xl font-bold">
                                90
                            </p>
                            <p className="text-sm text-gray-500">TIU</p>
                        </li>
                        <li className="relative flex flex-col w-32 bg-white px-4 py-3 gap-y-3 rounded-xl shadow-md shadow-secondary/15 border-l-4 border-secondary">
                            <div className="absolute top-2 right-3">
                                <BiCoinStack className="text-2xl text-gray-400" />
                            </div>
                            <p className="text-gray-600 text-xl font-bold">
                                65
                            </p>
                            <p className="text-sm text-gray-500">TWK</p>
                        </li>

                        <li className="relative flex flex-col w-32 bg-white px-4 py-3 gap-y-3 rounded-xl shadow-md shadow-secondary/15 border-l-4 border-secondary">
                            <div className="absolute top-2 right-3">
                                <BiCoinStack className="text-2xl text-gray-400" />
                            </div>
                            <p className="text-gray-600 text-xl font-bold">
                                120
                            </p>
                            <p className="text-sm text-gray-500">TKP</p>
                        </li>
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
                                data={datapercobaan}
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
                                    stroke="#8884d8"
                                    strokeWidth={3}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </SimpleFrontpageLayout>
    );
};

export default HasilUjian;
