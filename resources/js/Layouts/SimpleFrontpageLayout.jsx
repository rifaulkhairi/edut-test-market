import React from "react";
import { Head, router } from "@inertiajs/react";
import logo from "../../../public/images/logo-edu-test-market.svg";
import { UserIcon } from "@heroicons/react/24/outline";
import { Badge } from "@mui/material";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import Footer from "@/Components/Footer";

const SimpleFrontpageLayout = ({ children, user, base_url }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorAccountMenu, setAnchorAccountMenu] = React.useState(null);
    const openAccountMenu = Boolean(anchorAccountMenu);

    const handleClickAccountMenu = (event) => {
        setAnchorAccountMenu(event.currentTarget);
    };
    const handleCloseAccountMenu = (event) => {
        setAnchorAccountMenu(null);
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

                            {/* <div className="flex gap-2 items-center">
                                <a href="#">
                                    <i className="fa-solid fa-phone text-xs"></i>
                                </a>
                                <label className="text-xs">
                                    +62 111-1111-1111
                                </label>
                            </div> */}
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
                                        <MenuItem
                                            className="font-semibold"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                router.get("/user/info");
                                            }}
                                        >
                                            Profil
                                        </MenuItem>
                                        <MenuItem
                                            className="font-semibold"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                router.get("/riwayattransaksi");
                                            }}
                                        >
                                            Riwayat Pesanan
                                        </MenuItem>

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

export default SimpleFrontpageLayout;
