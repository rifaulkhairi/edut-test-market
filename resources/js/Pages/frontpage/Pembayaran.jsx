import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Link, router } from "@inertiajs/react";
import {
    Breadcrumbs,
    Button,
    capitalize,
    Checkbox,
    FormControl,
    IconButton,
    RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Harga from "@/Components/Harga";
import Image from "@/Components/Image";
import SimpleFrontpageLayout from "@/Layouts/SimpleFrontpageLayout";

const Pembayaran = ({ auth, base_url, order }) => {
    // let paketsal = cartitem;

    return (
        <SimpleFrontpageLayout
            user={auth}
            base_url={base_url}
            title="Pembayaran"
        >
            <div className="container max-w-5xl mt-9">
                <Breadcrumbs separator={<MdOutlineNavigateNext />}>
                    <Link href="/">Home</Link>
                    <Link>Pembayaran</Link>
                </Breadcrumbs>
                <h1 className="mt-4 font-bold text-secondary text-xl">
                    Pembayaran
                </h1>
                <div className="flex flex-row w-full gap-x-3 items-stretch mt-3">
                    <div className="flex w-full h-full justify-center flex-col items-center">
                        <Image src={order.qr_code_link} className="w-96 h-96" />
                        <p className="mt-5">Total Tagihan</p>
                        <p className="text-xl font-bold text-secondary">
                            <Harga nilai={order.gross_amount} />
                        </p>
                    </div>
                </div>
            </div>
        </SimpleFrontpageLayout>
    );
};

export default Pembayaran;
