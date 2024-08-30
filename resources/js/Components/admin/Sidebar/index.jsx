import React, { useState } from "react";
import logo from "../../../../../public/images/logo-edu-test-market.svg";
import Button from "@mui/material/Button";
import { MdOutlineDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaAngleRight, FaCartArrowDown } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbBrandProducthunt } from "react-icons/tb";
import { router } from "@inertiajs/react";
import { IoPeopleOutline } from "react-icons/io5";
import { useEffect } from "react";

const Sidebar = ({ tab }) => {
    const [activeTab, setActiveTab] = useState(tab);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(true);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    };

    return (
        <>
            <div className="sidebar fixed top-0 left-0 z-[100] w-[15%] shadow-lg shadow-blue-500/10">
                <div
                    className="logoWrapper py-3 px-5 flex items-center gap-2 cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        router.visit("/admin/dashboard");
                    }}
                >
                    <img src={logo} className="w-16"></img>
                    <div className="flex flex-col">
                        <span className="font-semibold text-secondary text-xl">
                            EduTest
                        </span>
                        <span className="font-semibold text-secondary text-xl">
                            Market
                        </span>
                    </div>
                </div>
                <div className="sidebarTabs px-3 mt-4 ">
                    <ul className="flex gap-4 flex-col">
                        <li>
                            <Button
                                className={`w-full ${
                                    activeTab === 0 ? "active" : ""
                                }`}
                                onClick={(e) => {
                                    isOpenSubmenu(0);
                                    e.preventDefault();

                                    router.visit("/admin/dashboard");
                                }}
                            >
                                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                                    <MdOutlineDashboard />
                                </span>
                                Dashboard
                            </Button>
                        </li>
                        <li>
                            <Button
                                className={`w-full flex items-center justify-center ${
                                    activeTab === 1 ? "active" : ""
                                }`}
                                onClick={() => isOpenSubmenu(1)}
                            >
                                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                                    <TbBrandProducthunt />
                                </span>
                                Products
                                <span
                                    className={`arrow ml-auto w-[25px]  h-[25px] flex items-center justify-center ${
                                        activeTab === 1 ? "rotate" : ""
                                    }`}
                                >
                                    <FaAngleRight />
                                </span>
                            </Button>
                            <div
                                className={`submenuWrapper ${
                                    activeTab === 1 ? "colapse" : "colapsed"
                                }`}
                                // className={`submenuWrapper ${
                                //     activeTab === 1 && isToggleSubmenu === true
                                //         ? "colapse"
                                //         : "colapsed"
                                // }`}
                            >
                                <div className="submenu">
                                    <Button
                                        className="w-full"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.visit(
                                                "/admin/daftarpaketsoal"
                                            );
                                        }}
                                    >
                                        Paket Soal
                                    </Button>
                                    <Button
                                        className="w-full"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.visit(
                                                "/admin/daftartipetest"
                                            );
                                        }}
                                    >
                                        Tipe Test
                                    </Button>
                                    <Button
                                        className="w-full"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.visit("/admin/daftarsoal");
                                        }}
                                    >
                                        Soal
                                    </Button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Button
                                className={`w-full ${
                                    activeTab === 2 ? "active" : ""
                                }`}
                                onClick={() => isOpenSubmenu(2)}
                            >
                                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                                    <HiOutlineShoppingCart />
                                </span>
                                orders
                                <span className="arrow ml-auto w-[25px]  h-[25px] flex items-center justify-center">
                                    <FaAngleRight />
                                </span>
                            </Button>
                            <div
                                className={`submenuWrapper ${
                                    activeTab === 2 ? "colapse" : "colapsed"
                                }`}
                            >
                                <div className="submenu">
                                    <Button
                                        className="w-full"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.visit("/admin/order/list");
                                        }}
                                    >
                                        Daftar Order
                                    </Button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Button
                                className={`w-full flex items-center justify-center ${
                                    activeTab === 3 ? "active" : ""
                                }`}
                                onClick={() => isOpenSubmenu(3)}
                            >
                                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                                    <IoPeopleOutline />
                                </span>
                                Pengguna
                                <span
                                    className={`arrow ml-auto w-[25px]  h-[25px] flex items-center justify-center ${
                                        activeTab === 3 ? "rotate" : ""
                                    }`}
                                >
                                    <FaAngleRight />
                                </span>
                            </Button>
                            <div
                                className={`submenuWrapper ${
                                    activeTab === 3 ? "colapse" : "colapsed"
                                }`}
                            >
                                <div className="submenu">
                                    <Button
                                        className="w-full"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.visit("/admin/listpengguna");
                                        }}
                                    >
                                        Daftar Pengguna
                                    </Button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
