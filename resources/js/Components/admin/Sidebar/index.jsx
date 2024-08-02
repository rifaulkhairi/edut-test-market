import React, { useState } from "react";
import logo from "../../../../../public/images/logo-edu-test-market.svg";
import Button from "@mui/material/Button";
import { MdOutlineDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaAngleRight, FaCartArrowDown } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbBrandProducthunt } from "react-icons/tb";
import { router } from "@inertiajs/react";

const Sidebar = ({ tab }) => {
    const [activeTab, setActiveTab] = useState(tab);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    };
    return (
        <>
            <div className="sidebar fixed top-0 left-0 z-[100] w-[15%]">
                <div className="logoWrapper py-3 px-3 flex items-center gap-2">
                    <img src={logo} className="w-7"></img>
                    <span className="font-semibold text-secondary">
                        EduTestMarket
                    </span>
                </div>
                <div className="sidebarTabs px-3 mt-4 ">
                    <ul className="flex gap-4 flex-col">
                        <li>
                            <Button
                                className={`w-full ${
                                    activeTab === 0 ? "active" : ""
                                }`}
                                onClick={() => isOpenSubmenu(0)}
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
                                        activeTab === 1 &&
                                        isToggleSubmenu === true
                                            ? "rotate"
                                            : ""
                                    }`}
                                >
                                    <FaAngleRight />
                                </span>
                            </Button>
                            <div
                                className={`submenuWrapper ${
                                    activeTab === 1 && isToggleSubmenu === true
                                        ? "colapse"
                                        : "colapsed"
                                }`}
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
                                    <Button className="w-full">
                                        Tipe Test
                                    </Button>
                                    <Button className="w-full">Soal</Button>
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
                        </li>
                        {/* <div className="bg-black h-[1000px]"></div> */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
