import CS from "@/Components/CS";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Link, router } from "@inertiajs/react";
import { Autocomplete, TextField } from "@mui/material";
import { LuUser2 } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";

import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { provinsi, kabupaten } from "daftar-wilayah-indonesia";
import PrimaryButton from "@/Components/PrimaryButton";

const UpdatePassword = ({ auth, base_url, cart }) => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [selectedSubMenu, setSelectedSubMenu] = useState(0);
    const dataprovinsi = provinsi();

    const [dataKabupaten, setDataKabupaten] = useState(null);
    const [selectedProv, setSelectedProv] = useState(null);

    const [selectedKab, setSelectedKab] = useState(null);

    const [selectedIdProv, setSelectedIdProv] = useState(null);

    const handleMenuClick = (menuIndex) => {
        setSelectedMenu(menuIndex);
    };

    const handleProvinsiChange = (e, value) => {
        setSelectedProv(value);
        setDataKabupaten(kabupaten(value.kode));
        setSelectedKab(null);
        console.log("data kabupaten", dataKabupaten);
    };
    const handleKabupatenChange = (e, value) => {
        setSelectedKab(value);
    };

    return (
        <FrontpageLayout user={auth} cart={cart} base_url={base_url}>
            <div className="container max-w-5xl mt-9">
                <div className="flex flex-col w-full gap-x-3 gap-y-3 mt-3">
                    <ul className="flex gap-x-2">
                        <li>
                            <ul className="w-40">
                                <li
                                    className="flex flex-row w-fit items-center text-secondary font-bold justify-center gap-x-2 hover:text-secondary cursor-pointer"
                                    onClick={() => handleMenuClick(0)}
                                >
                                    <span>
                                        <LuUser2 className="text-lg" />
                                    </span>
                                    <span>Akun Saya</span>
                                </li>
                                {selectedMenu === 0 && (
                                    <li className="submenu-container ml-7 flex flex-col overflow-hidden  gap-y-1 mt-1 mb-1">
                                        <div
                                            className={`submenu transition-all duration-5000 ${
                                                selectedMenu === 0
                                                    ? "max-h-[200px] opacity-100 transform translate-y-0"
                                                    : "max-h-0 h-0 opacity-0 transform -translate-y-2"
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                id="profil"
                                                className="hidden peer"
                                                name="account"
                                            />
                                            <label
                                                htmlFor="profil"
                                                className="peer-checked:text-secondary cursor-pointer"
                                                onClick={() =>
                                                    router.visit("/user/info")
                                                }
                                            >
                                                Profil Saya
                                            </label>
                                        </div>
                                        <div
                                            className={`submenu transition-all duration-500 ease-in-out ${
                                                selectedMenu === 0
                                                    ? "max-h-[200px] opacity-100 transform translate-y-0"
                                                    : "max-h-0 opacity-0 transform -translate-y-2"
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                id="change-password"
                                                name="account"
                                                className="hidden peer"
                                            />
                                            <label
                                                htmlFor="change-password"
                                                className="peer-checked:text-secondary cursor-pointer text-secondary font-semibold"
                                            >
                                                Ubah Password
                                            </label>
                                        </div>
                                    </li>
                                )}
                            </ul>
                            <ul>
                                <li
                                    className="flex flex-row w-fit items-center justify-center gap-x-2 hover:text-secondary cursor-pointer"
                                    onClick={() =>
                                        router.visit("/riwayattransaksi")
                                    }
                                >
                                    <span>
                                        <LuClipboardList className="text-lg" />
                                    </span>
                                    <span>Pesanan Saya</span>
                                </li>
                            </ul>
                        </li>

                        <li className="flex bg-white w-full h-full p-3 flex-col gap-y-3">
                            <ul>
                                <li className="text-black font-bold">
                                    Ubah Password
                                </li>
                                <li>
                                    Kelola informasi profil Anda untuk
                                    mengontrol, melindungi dan mengamankan akun
                                </li>
                            </ul>
                            <hr />
                            <ul className="mt-3 gap-y-3 flex flex-col">
                                <form
                                    autoComplete="off"
                                    className="flex flex-col gap-y-3"
                                >
                                    <TextField
                                        type="password"
                                        id="current-password"
                                        autoComplete="off"
                                        label="Password Sekarang"
                                        sx={{
                                            width: "100%",

                                            "& .MuiOutlinedInput-root.Mui-focused":
                                                {
                                                    outline: "none",
                                                    boxShadow: "none",
                                                },
                                            "& .MuiInputBase-input:focus": {
                                                outline: "none",
                                                boxShadow: "none",
                                            },
                                        }}
                                    />
                                    <TextField
                                        type="password"
                                        id="new-password"
                                        autoComplete="off"
                                        label="Password Baru"
                                        sx={{
                                            width: "100%",

                                            "& .MuiOutlinedInput-root.Mui-focused":
                                                {
                                                    outline: "none",
                                                    boxShadow: "none",
                                                },
                                            "& .MuiInputBase-input:focus": {
                                                outline: "none",
                                                boxShadow: "none",
                                            },
                                        }}
                                    />
                                    <TextField
                                        type="password"
                                        id="confirm-password"
                                        label="Konfirmasi Password"
                                        autoComplete="off"
                                        sx={{
                                            width: "100%",

                                            "& .MuiOutlinedInput-root.Mui-focused":
                                                {
                                                    outline: "none",
                                                    boxShadow: "none",
                                                },
                                            "& .MuiInputBase-input:focus": {
                                                outline: "none",
                                                boxShadow: "none",
                                            },
                                        }}
                                    />
                                </form>
                            </ul>

                            <ul>
                                <PrimaryButton>Simpan</PrimaryButton>
                            </ul>
                        </li>
                    </ul>
                </div>
                <CS />
            </div>
        </FrontpageLayout>
    );
};

export default UpdatePassword;
