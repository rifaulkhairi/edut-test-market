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
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

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
                    <img src={logo} className="w-12"></img>
                    {/* <div className="flex flex-col">
                        <span className="font-semibold text-secondary text-xl visible md:hidden lg:visible">
                            EduTestMarket
                        </span>
                    </div> */}
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

                                    router.visit("/editor/dashboard");
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
                                            router.visit("/editor/daftarsoal");
                                        }}
                                    >
                                        Soal
                                    </Button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className="mt-3" />
                <ul className="sidebarTabs px-3 mt-4 gap-4 flex flex-col">
                    <li>
                        <Button
                            className={`w-full ${
                                activeTab === 5 ? "active" : ""
                            }`}
                            onClick={(e) => {
                                e.preventDefault();

                                // router.visit("/admin/dashboard");
                            }}
                        >
                            <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                                <MdOutlineAccountCircle />
                            </span>
                            Akun
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={`w-full ${
                                activeTab === 5 ? "active" : ""
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                router.post("/logout");
                            }}
                        >
                            <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
                                <HiOutlineLogout />
                            </span>
                            Logout
                        </Button>
                    </li>
                    <li></li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
