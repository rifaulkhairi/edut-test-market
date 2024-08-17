// src/Layouts/FrontpageLayout.jsx

import React, { useState } from "react";
import { Link, Head, router } from "@inertiajs/react";
import logo from "../../../public/images/logo-edu-test-market.svg";
import { BsSearch } from "react-icons/bs";
import {
    ShoppingCartIcon,
    UserIcon,
    ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import { Badge, Paper, IconButton } from "@mui/material";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import Footer from "@/Components/Footer";
import Image from "@/Components/Image";
import Harga from "@/Components/Harga";

// import { ShoppingChart } from "@heroicons/react/outline/";

const FrontpageLayout = ({ children, user, cart, base_url }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorAccountMenu, setAnchorAccountMenu] = React.useState(null);
    const openAccountMenu = Boolean(anchorAccountMenu);

    const handleClickAccountMenu = (event) => {
        setAnchorAccountMenu(event.currentTarget);
    };
    const handleCloseAccountMenu = (event) => {
        setAnchorAccountMenu(null);
    };

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
            <header className="fixed z-50 bg-secondary">
                <div className="w-screen px-2 bg-secondary items-center flex justify-center">
                    <div className="flex w-full max-w-6xl">
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
                            <Button
                                className="flex h-full items-center text-sm text-white p-2 gap-x-1"
                                onClick={handleClickAccountMenu}
                            >
                                <UserIcon className="size-4 text-white" />
                                <span className="text-sm capitalize font-normal text-white">
                                    Account
                                </span>
                            </Button>
                            <React.Fragment>
                                <Menu
                                    id="account_menu"
                                    anchorEl={anchorAccountMenu}
                                    open={openAccountMenu}
                                    onClose={handleCloseAccountMenu}
                                    onClick={handleCloseAccountMenu}
                                >
                                    <MenuItem>
                                        {user.user ? (
                                            <MenuItem
                                                className="text-secon font-semibold"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    router.post("/logout");
                                                }}
                                            >
                                                logout
                                            </MenuItem>
                                        ) : (
                                            <MenuItem
                                                className="text-secon font-semibold"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    router.get("/login");
                                                }}
                                            >
                                                Login
                                            </MenuItem>
                                        )}
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-16 shadow-md opacity-95 flex justify-center">
                    <div className="flex ml-10 mr-10 gap-2 items-center h-full w-full max-w-6xl">
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
                                    {cart !== null ? (
                                        <Badge
                                            badgeContent={cart.length}
                                            color="warning"
                                            overlap="circular"
                                        >
                                            <ShoppingCartIcon className="size-8 text-secondary"></ShoppingCartIcon>
                                        </Badge>
                                    ) : (
                                        <Badge
                                            color="warning"
                                            overlap="circular"
                                        >
                                            <ShoppingCartIcon className="size-8 text-secondary"></ShoppingCartIcon>
                                        </Badge>
                                    )}
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
                                    <div className="w-80 h-full p-3">
                                        <p className="text-xs text-gray-500 mb-2">
                                            Baru ditambahkan
                                        </p>
                                        {cart &&
                                            cart.map((cartitem) => (
                                                <div
                                                    className="flex flex-row w-ful gap-2"
                                                    key={cartitem.id}
                                                >
                                                    <Image
                                                        src={`${base_url}/storage/${cartitem.paketsoal.link_cover}`}
                                                        className="w-20 h-20 bg-cover rounded-sm"
                                                    />

                                                    <div>
                                                        <p className="text-sm font-semibold text-secondary">
                                                            {
                                                                cartitem
                                                                    .paketsoal
                                                                    .name
                                                            }
                                                        </p>
                                                        <p className="text-sm">
                                                            <Harga
                                                                nilai={
                                                                    cartitem
                                                                        .paketsoal
                                                                        .price
                                                                }
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                    <div className="flex w-full justify-center p-3">
                                        <button
                                            className="p-2 bg-secondary hover:bg-secondary/65 text-white text-sm rounded-md shadow-sm transition-all"
                                            onClick={(e) => {
                                                router.visit("/cart");
                                            }}
                                        >
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
