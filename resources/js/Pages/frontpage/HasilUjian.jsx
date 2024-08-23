import SimpleFrontpageLayout from "@/Layouts/SimpleFrontpageLayout";
import React from "react";
import {
    Box,
    Breadcrumbs,
    capitalize,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    Radio,
    RadioGroup,
} from "@mui/material";
import { Link } from "@inertiajs/react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Image from "@/Components/Image";
import Button from "@/Components/Button";
import { BiCoinStack } from "react-icons/bi";
import { LuClock3 } from "react-icons/lu";
import { GiLaurelsTrophy } from "react-icons/gi";

const HasilUjian = ({ auth }) => {
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
                <div className="flex flex-row w-full gap-x-3 items-stretch mt-3">
                    <Image
                        src="https://github.com/rifaulkhairi/edu-test-market-public-assets/blob/main/4.png?raw=true"
                        className="w-40 h-40 rounded-md"
                    />
                    <div className="flex flex-col justify-between pb-2">
                        <div className="text-lg font-bold text-gray-700">
                            Soal TKD BUMN 2024
                        </div>
                        <ul className="flex  gap-x-4">
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

                            <li>
                                <Button title="Lihat Pembahasan" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SimpleFrontpageLayout>
    );
};

export default HasilUjian;
