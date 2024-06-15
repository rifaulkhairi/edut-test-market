// src/Layouts/FrontpageLayout.jsx

import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import logo from "../../../public/images/logo-edu-test-market.svg";
import { BsSearch } from "react-icons/bs";
import { ShoppingCartIcon, UserIcon, ClipboardDocumentIcon} from "@heroicons/react/24/outline";
import { Badge, Paper, IconButton } from "@mui/material";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import Footer from "@/Components/Footer";

// import { ShoppingChart } from "@heroicons/react/outline/";

const FrontpageLayout = ({ children, user }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Head title="Edu Test Market"></Head>
            <header className="fixed z-50">
                <div className="w-screen px-2 bg-secondary items-center flex">
                    <div className="flex w-full">
                        <div className="flex-1 gap-8 ml-3 text-white flex">
                            <div className="flex gap-2 items-center">
                                <p className="text-white text-xs">
                                    Ikuti kami di |
                                </p>
                                <a href="#">
                                    <i className="fa-brands fa-instagram text-xs"></i>
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-tiktok text-xs"></i>
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-x-twitter text-xs"></i>
                                </a>
                            </div>

                            <div className="flex gap-2 items-center">
                                <a href="#">
                                    <i className="fa-solid fa-phone text-xs"></i>
                                </a>
                                <label className="text-xs">
                                    +62 111-1111-1111
                                </label>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-end gap-2 mr-3">
                            <div className="flex h-full justify-center">
                                <Button className="text-white text-xs">
                                    <div className="gap-2 w-full flex">
                                        <Badge color="warning" variant="dot">
                                            <i className="fa-regular fa-bell text-xs text-white"></i>
                                        </Badge>
                                        <span className="text-sm capitalize font-normal text-white">
                                            Notifikasi
                                        </span>
                                    </div>
                                </Button>
                            </div>
                            <Button className="flex h-full items-center text-sm text-white p-2 gap-x-1">
                                <UserIcon className="size-4 text-white" />
                                <span className="text-sm capitalize font-normal text-white">
                                    Account
                                </span>
                            </Button>
                            <React.Fragment>
                                <Menu>
                                    <MenuItem>
                                        {user.user ? (
                                            <Link
                                                method="post"
                                                href={route("logout")}
                                            >
                                                <MenuItem className="text-secon font-semibold">
                                                    logout
                                                </MenuItem>
                                            </Link>
                                        ) : (
                                            <Link
                                                method="get"
                                                href={route("login")}
                                            >
                                                <MenuItem className="text-secon font-semibold">
                                                    Login
                                                </MenuItem>
                                            </Link>
                                        )}
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-16 shadow-md opacity-95 flex">
                    <div className="flex ml-10 mr-10 gap-2 items-center h-full w-full">
                        {/* logo */}
                        <a
                            href="/"
                            className="block h-full content-center w-10"
                        >
                            <img src={logo} className="w-12 h-12 flex-none" />
                        </a>
                        <div className="w-full flex justify-end items-center gap-2">
                            {/* search */}
                            <div className="relative w-full max-w-[500px]">
                                <input
                                    type="text"
                                    className="border-secondary focus:ring-2 focus:ring-secondary focus:border-secondary bg-[#f2f3f5] px-6 py-2 rounded-md w-full text-sm"
                                    placeholder="Search Product"
                                />
                                <BsSearch
                                    className="absolute top-0 right-0 mt-2 mr-5 text-secondary"
                                    size={18}
                                />
                            </div>
                            {/* icons */}
                            <React.Fragment>
                                <IconButton
                                    id="chart_list"
                                    onClick={handleClick}
                                >
                                    <Badge
                                        badgeContent={5}
                                        color="warning"
                                        overlap="circular"
                                    >
                                        <ShoppingCartIcon className="size-8 text-secondary"></ShoppingCartIcon>
                                    </Badge>
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: "visible",
                                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                            mt: 1.5,
                                            "& .MuiAvatar-root": {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            "&::before": {
                                                content: '""',
                                                display: "block",
                                                position: "absolute",
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: "background.paper",
                                                transform:
                                                    "translateY(-50%) rotate(45deg)",
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{
                                        horizontal: "right",
                                        vertical: "top",
                                    }}
                                    anchorOrigin={{
                                        horizontal: "right",
                                        vertical: "bottom",
                                    }}
                                >
                                    <div className="w-80 h-56 p-3">
                                        <p className="text-xs text-gray-500 mb-2">
                                            Baru ditambahkan
                                        </p>
                                        <div className="flex flex-row w-ful gap-2">
                                            <img
                                                src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/3/24/48b1c61b-fe0b-4c72-89b5-1b529ef4b2b0.jpg.webp?ect=4g"
                                                className="w-20 h-20 bg-cover rounded-sm"
                                            ></img>
                                            <div>
                                                <p className="text-sm font-semibold text-secondary">
                                                    Soal PPG 2024
                                                </p>
                                                <p className="text-sm">
                                                    Rp50.000
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row w-ful gap-2">
                                            <img
                                                src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/3/24/48b1c61b-fe0b-4c72-89b5-1b529ef4b2b0.jpg.webp?ect=4g"
                                                className="w-20 h-20 bg-cover rounded-sm"
                                            ></img>
                                            <div>
                                                <p className="text-sm font-semibold text-secondary">
                                                    Soal PPG 2024
                                                </p>
                                                <p className="text-sm">
                                                    Rp50.000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-center p-3">
                                        <button className="p-2 bg-secondary hover:bg-secondary/65 text-white text-sm rounded-md shadow-sm transition-all">
                                            Tampilkan Keranjang Belanja
                                        </button>
                                    </div>
                                </Menu>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex pt-24 overflow-x-hidden items-center justify-center flex-col gap-4">
                {children}
            </main>
            <div className="flex items-center w-full justify-center bg-white mt-10">
                <div className="w-full max-w-5xl">
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default FrontpageLayout;
