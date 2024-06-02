import React from "react";
import { Link, Head } from "@inertiajs/react";

const FrontpageLayout = ({ children }) => {
    return (
        <>
            <Head title="Edu Test Market"></Head>
            <header>
                <div className="w-screen h-8 bg-indigo-600 items-center flex m">
                    <div className="flex gap-2 ml-3 text-white">
                        <p className="text-white">Ikuti kami di</p>
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-tiktok"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className="bg-white h-16 shadow-md"></div>
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
};

export default FrontpageLayout;
