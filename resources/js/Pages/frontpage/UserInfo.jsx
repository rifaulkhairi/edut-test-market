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

const UserInfo = ({ auth, base_url, cart, user_data }) => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [selectedSubMenu, setSelectedSubMenu] = useState(0);
    const dataprovinsi = provinsi();
    const [nama, setNama] = useState(auth?.user?.name || "");
    const [email, setEmail] = useState(auth?.user?.email || "");
    const [userProvinsi, setUserProvinsi] = useState(null);
    const [userKabupaten, setUserKabupaten] = useState(null);
    const [nohp, setnohp] = useState(user_data.nohp ? user_data.nohp : null);

    const [dataKabupaten, setDataKabupaten] = useState([]);
    const [selectedProv, setSelectedProv] = useState(
        user_data.provinsi
            ? dataprovinsi.find((itm) => itm.kode === user_data.provinsi) // Use find() to return a single object
            : null
    );

    const [selectedKab, setSelectedKab] = useState(
        user_data.kabupaten
            ? kabupaten(user_data.provinsi).find(
                  (itm) => itm.kode === user_data.kabupaten
              )
            : null
    );

    const [selectedIdProv, setSelectedIdProv] = useState(null);

    const handleMenuClick = (menuIndex) => {
        setSelectedMenu(menuIndex);
    };

    const handleProvinsiChange = (e, value) => {
        setSelectedProv(value);
        setDataKabupaten(kabupaten(value.kode));
        setSelectedKab(null);
        setUserProvinsi(value.kode);
    };
    const handleKabupatenChange = (e, value) => {
        setSelectedKab(value);
        setUserKabupaten(value.kode);
    };

    const onSubmit = () => {
        router.post("/user/info", {
            _method: "patch",
            provinsi: userProvinsi,
            kabupaten: userKabupaten,
            nohp: nohp,
        });
    };

    return (
        <FrontpageLayout user={auth} cart={cart} base_url={base_url}>
            <div className="container max-w-5xl mt-9">
                <div className="flex flex-col w-full gap-x-3 gap-y-3 mt-3">
                    <ul className="flex gap-x-2">
                        <li>
                            <ul className="w-40">
                                <li className="flex flex-row w-fit items-center text-secondary font-bold justify-center gap-x-2 hover:text-secondary cursor-pointer">
                                    <span>
                                        <LuUser2 className="text-lg" />
                                    </span>
                                    <span>Akun Saya</span>
                                </li>
                                {selectedMenu === 0 && (
                                    <li className="submenu-container ml-7 flex flex-col overflow-hidden gap-y-1 mt-1 mb-1">
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
                                                checked
                                            />
                                            <label
                                                htmlFor="profil"
                                                className="peer-checked:text-secondary cursor-pointer text-secondary font-bold"
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
                                                className="peer-checked:text-secondary cursor-pointer"
                                                onClick={() =>
                                                    router.visit(
                                                        "/user/info/password"
                                                    )
                                                }
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
                                    Profil Saya
                                </li>
                                <li>
                                    Kelola informasi profil Anda untuk
                                    mengontrol, melindungi dan mengamankan akun
                                </li>
                            </ul>
                            <hr />
                            <ul className="mt-3 gap-y-3 flex flex-col">
                                <TextField
                                    type="text"
                                    label="Nama"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    required
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
                                >
                                    Nama
                                </TextField>
                                <TextField
                                    type="email"
                                    label="Email"
                                    value={email}
                                    required
                                    disabled
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
                                >
                                    Email
                                </TextField>
                                <div className="flex w-full gap-x-3">
                                    <Autocomplete
                                        options={dataprovinsi}
                                        fullWidth
                                        required
                                        onChange={(e, value) =>
                                            handleProvinsiChange(e, value)
                                        }
                                        value={selectedProv}
                                        getOptionLabel={(option) => option.nama}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Provinsi"
                                                sx={{
                                                    width: "100%",

                                                    "& .MuiOutlinedInput-root.Mui-focused":
                                                        {
                                                            outline: "none",
                                                            boxShadow: "none",
                                                        },
                                                    "& .MuiInputBase-input:focus":
                                                        {
                                                            outline: "none",
                                                            boxShadow: "none",
                                                        },
                                                }}
                                            />
                                        )}
                                    ></Autocomplete>
                                    <Autocomplete
                                        fullWidth
                                        required
                                        options={dataKabupaten}
                                        value={selectedKab}
                                        onChange={(e, value) =>
                                            handleKabupatenChange(e, value)
                                        }
                                        getOptionLabel={(option) => option.nama}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Kabupaten"
                                                sx={{
                                                    width: "100%",

                                                    "& .MuiOutlinedInput-root.Mui-focused":
                                                        {
                                                            outline: "none",
                                                            boxShadow: "none",
                                                        },
                                                    "& .MuiInputBase-input:focus":
                                                        {
                                                            outline: "none",
                                                            boxShadow: "none",
                                                        },
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                                <TextField
                                    label="No.hp/wa"
                                    required
                                    onChange={(e) => setnohp(e.target.value)}
                                    type="text"
                                    value={nohp}
                                    inputMode="decimal"
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
                                >
                                    Email
                                </TextField>
                            </ul>
                            <ul>
                                <PrimaryButton onClick={onSubmit}>
                                    Simpan
                                </PrimaryButton>
                            </ul>
                        </li>
                    </ul>
                </div>
                <CS />
            </div>
        </FrontpageLayout>
    );
};

export default UserInfo;
