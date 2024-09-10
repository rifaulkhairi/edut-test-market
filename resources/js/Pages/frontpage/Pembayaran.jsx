import { Link, router } from "@inertiajs/react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Breadcrumbs,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Harga from "@/Components/Harga";
import Image from "@/Components/Image";
import { MdExpandMore } from "react-icons/md";
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
                <div className="flex flex-col w-full gap-x-3 items-stretch mt-3 bg-white rounded-md shadow-md pb-4 pt-2">
                    <div className="flex w-full h-full justify-center flex-col items-center">
                        <Image src={order.qr_code_link} className="w-96 h-96" />
                        <p className="mt-5">Total Tagihan</p>
                        <p className="text-xl font-bold text-secondary">
                            <Harga nilai={order.gross_amount} />
                        </p>
                    </div>
                    <div className="flex w-full h-full justify-center flex-col items-center">
                        <p className="mt-5">Bayar sebelum</p>
                        <p className="text-xl font-bold text-secondary">
                            {order.expiry_time}
                        </p>
                    </div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<MdExpandMore />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            className="font-bold"
                        >
                            Langkah Pembayaran
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                                <li>
                                    1. Buka aplikasi dompet digital atau mobile
                                    banking yang mendukung QRIS, seperti GoPay,
                                    OVO, DANA, atau aplikasi lainnya;
                                </li>
                                <li>
                                    2. Di aplikasi tersebut, cari dan pilih opsi
                                    Scan QR atau Bayar dengan QR;
                                </li>
                                <li>
                                    3. Arahkan kamera ponselmu ke kode QRIS
                                    tersebut;
                                </li>
                                <li>
                                    4. Periksa kembali nominal dan detail
                                    pembayaran, lalu konfirmasi pembayaran;
                                </li>
                                <li>5. dan selesai;</li>
                                <li>
                                    6. kemudian cek halaman riwayat pesanan
                                    untuk melihat status pembayaran
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </SimpleFrontpageLayout>
    );
};

export default Pembayaran;
