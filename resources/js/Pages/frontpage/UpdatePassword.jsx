import CS from "@/Components/CS";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Link, router, useForm } from "@inertiajs/react";
import { Autocomplete, TextField } from "@mui/material";
import { LuUser2 } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";

import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { provinsi, kabupaten } from "daftar-wilayah-indonesia";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { Transition } from "@headlessui/react";
import { useRef } from "react";

const UpdatePassword = ({ auth, base_url, cart }) => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const handleMenuClick = (menuIndex) => {
        setSelectedMenu(menuIndex);
    };

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("user.passoword.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
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
                                    <div>
                                        <TextField
                                            type="password"
                                            id="current-password"
                                            ref={currentPasswordInput}
                                            value={data.current_password}
                                            onChange={(e) =>
                                                setData(
                                                    "current_password",
                                                    e.target.value
                                                )
                                            }
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
                                        <InputError
                                            message={errors.current_password}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="password"
                                            id="new-password"
                                            ref={passwordInput}
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
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
                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="password"
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
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
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                </form>
                            </ul>

                            <ul>
                                <PrimaryButton
                                    disabled={processing}
                                    onClick={updatePassword}
                                >
                                    Simpan
                                </PrimaryButton>
                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-gren-600">
                                        Berhasil Disimpan
                                    </p>
                                </Transition>
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
