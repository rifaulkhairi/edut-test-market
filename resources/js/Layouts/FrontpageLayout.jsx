// src/Layouts/FrontpageLayout.jsx

import React from "react";
import { Link, Head } from "@inertiajs/react";
import logo from "../../../public/images/logo-edu-test-market.svg";
import { BsSearch } from "react-icons/bs";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import {
    Badge,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import Footer from "@/Components/Footer";
// import { ShoppingChart } from "@heroicons/react/outline/";

const FrontpageLayout = ({ children, user }) => {
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
                            <div className="">
                                <Button
                                    variant="text"
                                    color="white"
                                    size="sm"
                                    className="text-white text-xs"
                                >
                                    <div className="gap-2 w-full flex">
                                        <Badge>
                                            <i className="fa-regular fa-bell text-xs text-white"></i>
                                        </Badge>
                                        <span className="text-xs capitalize font-normal">
                                            Notifikasi
                                        </span>
                                    </div>
                                </Button>
                            </div>
                            <div className="">
                                <Menu>
                                    <MenuHandler>
                                        <Button
                                            variant="text"
                                            color="white"
                                            size="sm"
                                            className="text-white text-xs"
                                        >
                                            <div className="gap-2 w-full flex">
                                                <i className="fa-regular fa-user text-xs text-white"></i>
                                                <span className="text-xs capitalize font-normal">
                                                    account
                                                </span>
                                            </div>
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem>Profil</MenuItem>
                                        <MenuItem>Edit Profil</MenuItem>
                                        <MenuItem>Pesananku</MenuItem>
                                        <hr className="my-3" />

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
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-16 shadow-md opacity-95 flex">
                    <div className="flex ml-10 mr-10 gap-2 items-center h-full w-full">
                        {/* logo */}
                        <a
                            href="#"
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
                            <Button variant="text" size="sm">
                                <Badge
                                    content={5}
                                    overlap="circular"
                                    className="text-xs"
                                >
                                    <ShoppingCartIcon className="size-8 text-secondary"></ShoppingCartIcon>
                                </Badge>
                            </Button>
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
