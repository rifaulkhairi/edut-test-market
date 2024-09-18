import { Link, router } from "@inertiajs/react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Breadcrumbs,
    Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Harga from "@/Components/Harga";
import Image from "@/Components/Image";
import { MdExpandMore } from "react-icons/md";
import SimpleFrontpageLayout from "@/Layouts/SimpleFrontpageLayout";
import logoBRI from "../../../../public/images/BANK_BRI_logo.svg";
import logoBNI from "../../../../public/images/BNI_logo.svg";

const Pembayaran = ({ auth, base_url, order }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
                    {order.payment_type === "gopay" && (
                        <>
                            <div className="flex w-full h-full justify-center flex-col items-center">
                                <Image
                                    src={order.qris_payment.qr_code_link}
                                    className="w-96 h-96"
                                />
                                <p className="mt-5">Total Tagihan</p>
                                <p className="text-xl font-bold text-secondary">
                                    <Harga nilai={order.gross_amount} />
                                </p>
                            </div>
                            <div className="flex w-full h-full justify-center flex-col items-center">
                                <p className="mt-5">Bayar sebelum</p>
                                <p className="text-xl font-bold text-secondary">
                                    {order.qris_payment.expiry_time}
                                </p>
                            </div>

                            <Accordion
                                expanded={expanded === "panel1"}
                                onChange={handleChange("panel1")}
                            >
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
                                            1. Buka aplikasi dompet digital atau
                                            mobile banking yang mendukung QRIS,
                                            seperti GoPay, OVO, DANA, atau
                                            aplikasi lainnya;
                                        </li>
                                        <li>
                                            2. Di aplikasi tersebut, cari dan
                                            pilih opsi Scan QR atau Bayar dengan
                                            QR;
                                        </li>
                                        <li>
                                            3. Arahkan kamera ponselmu ke kode
                                            QRIS tersebut;
                                        </li>
                                        <li>
                                            4. Periksa kembali nominal dan
                                            detail pembayaran, lalu konfirmasi
                                            pembayaran;
                                        </li>
                                        <li>5. dan selesai;</li>
                                        <li>
                                            6. kemudian cek halaman riwayat
                                            pesanan untuk melihat status
                                            pembayaran
                                        </li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </>
                    )}
                    {order.payment_type === "bank_transfer" && (
                        <>
                            <div className="flex w-full h-full justify-center flex-col items-center mt-4 gap-y-3">
                                <ul className="flex w-full justify-between max-w-lg">
                                    <li>Total Pembayaran</li>
                                    <li className="text-secondary">
                                        <Harga nilai={order.gross_amount} />
                                    </li>
                                </ul>
                                <Divider component="hr" />
                                <ul className="flex w-full justify-between max-w-lg">
                                    <li>Bayar Sebelum</li>
                                    <li className="text-secondary">
                                        {order.bank_transfer.expiry_time}
                                    </li>
                                </ul>
                            </div>

                            {order.bank_transfer.bank === "bni" && (
                                <div className="flex w-full justify-center mt-7">
                                    <div className="flex w-full max-w-lg flex-col">
                                        <img
                                            src={logoBNI}
                                            alt="logo bni"
                                            className="w-16"
                                        ></img>
                                        <ul className="ml-5">
                                            <li className="mt-5">
                                                No Rekening:
                                            </li>
                                            <li className="mt-2">
                                                <p className="font-bold text-secondary">
                                                    {
                                                        order.bank_transfer
                                                            .virtual_account
                                                    }
                                                </p>
                                            </li>
                                        </ul>
                                        <Accordion
                                            expanded={expanded === "panel2"}
                                            onChange={handleChange("panel2")}
                                        >
                                            <AccordionSummary
                                                expandIcon={<MdExpandMore />}
                                                aria-controls="panel2-content"
                                                id="panel2-header"
                                                className="font-bold"
                                            >
                                                Petunjuk Transfer mBanking
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <ul>
                                                    <li>
                                                        1. Pilih{" "}
                                                        <b>
                                                            Transfer {">"}
                                                            Virtual Account
                                                            Billing
                                                        </b>
                                                        .
                                                    </li>
                                                    <li>
                                                        2. Pilih
                                                        <b>
                                                            Rekening Debet{" "}
                                                        </b>{" "}
                                                        {" > "}
                                                        Masukkan{" "}
                                                        <b>
                                                            Virtual Account
                                                        </b>{" "}
                                                        <span className="font-semibold text-secondary">
                                                            {
                                                                order
                                                                    .bank_transfer
                                                                    .virtual_account
                                                            }
                                                        </span>{" "}
                                                        pada{" "}
                                                        <b>menu input baru</b>.
                                                    </li>

                                                    <li>
                                                        4. tagihan yang harus
                                                        dibayar akan muncul pada
                                                        layar konfirmasi
                                                    </li>
                                                    <li>
                                                        5. Periksa informasi
                                                        yang tertera di layar.
                                                        jika <b>Benar</b>, pilih{" "}
                                                        <b>ya</b>.
                                                    </li>
                                                </ul>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion
                                            expanded={expanded === "panel3"}
                                            onChange={handleChange("panel3")}
                                        >
                                            <AccordionSummary
                                                expandIcon={<MdExpandMore />}
                                                aria-controls="panel3-content"
                                                id="panel3-header"
                                                className="font-bold"
                                            >
                                                Petunjuk Transfer ATM
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <ul>
                                                    <li>
                                                        1. Pilih{" "}
                                                        <b>
                                                            Menu Lain {">"}
                                                            Transfer
                                                        </b>
                                                        .
                                                    </li>
                                                    <li>
                                                        2. Pilih jenis rekening
                                                        asal dan pilih{" "}
                                                        <b>
                                                            Virtual Account
                                                            Billing
                                                        </b>
                                                        .
                                                    </li>
                                                    <li>
                                                        3. Masukkan{" "}
                                                        <b>
                                                            Nomor Virtual
                                                            Account{" "}
                                                        </b>{" "}
                                                        <span className="font-semibold text-secondary">
                                                            {
                                                                order
                                                                    .bank_transfer
                                                                    .virtual_account
                                                            }
                                                        </span>{" "}
                                                        kemudian pilih{" "}
                                                        <b>benar</b>
                                                    </li>
                                                    <li>
                                                        4. tagihan yang harus
                                                        dibayar akan muncul pada
                                                        layar konfirmasi
                                                    </li>
                                                    <li>
                                                        5. Periksa informasi
                                                        yang tertera di layar.
                                                        jika <b>Benar</b>, pilih{" "}
                                                        <b>ya</b>.
                                                    </li>
                                                </ul>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </div>
                            )}
                            {order.bank_transfer.bank === "bri" && (
                                <div className="flex w-full justify-center mt-7">
                                    <div className="flex w-full max-w-lg flex-col">
                                        <img
                                            src={logoBRI}
                                            alt="logo bni"
                                            className="w-16"
                                        ></img>
                                        <ul className="ml-5">
                                            <li className="mt-5">
                                                No Rekening:
                                            </li>
                                            <li className="mt-2">
                                                <p className="font-bold text-secondary">
                                                    {
                                                        order.bank_transfer
                                                            .virtual_account
                                                    }
                                                </p>
                                            </li>
                                        </ul>
                                        <Accordion
                                            expanded={expanded === "panel2"}
                                            onChange={handleChange("panel2")}
                                        >
                                            <AccordionSummary
                                                expandIcon={<MdExpandMore />}
                                                aria-controls="panel2-content"
                                                id="panel2-header"
                                                className="font-bold"
                                            >
                                                Petunjuk Transfer mBanking
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <ul>
                                                    <li>
                                                        1. Masuk ke menu{" "}
                                                        <span className="font-bold">
                                                            Mobile Banking BRI
                                                        </span>
                                                        . Kemudian, pilih
                                                        <span className="font-bold">
                                                            {" "}
                                                            Pembayaran
                                                            <span>{` > `}</span>
                                                            BRIVA.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        2. Masukkan{" "}
                                                        <b>Nomor BRIVA </b>{" "}
                                                        <span className="font-semibold text-secondary">
                                                            {
                                                                order
                                                                    .bank_transfer
                                                                    .virtual_account
                                                            }
                                                        </span>
                                                    </li>
                                                    <li>
                                                        3. Masukkan <b>PIN</b>{" "}
                                                        Anda kemudian pilih{" "}
                                                        <b>Send</b>. Apabila
                                                        pesan konfirmasi untuk
                                                        transaksi menggunakan
                                                        SMS muncul, pilih{" "}
                                                        <b>OK</b>. Status
                                                        transaksi akan
                                                        dikirimkan melalui SMS
                                                        dan dapat digunakan
                                                        sebagai bukti
                                                        pembayaran.
                                                    </li>
                                                </ul>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion
                                            expanded={expanded === "panel3"}
                                            onChange={handleChange("panel3")}
                                        >
                                            <AccordionSummary
                                                expandIcon={<MdExpandMore />}
                                                aria-controls="panel3-content"
                                                id="panel3-header"
                                                className="font-bold"
                                            >
                                                Petunjuk Transfer ATM
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <ul>
                                                    <li>
                                                        1. Pilih{" "}
                                                        <b>
                                                            Transaksi Lain {">"}
                                                            Pembayaran {
                                                                ">"
                                                            }{" "}
                                                            Lainnya
                                                            {">"} BRIVA
                                                        </b>
                                                        .
                                                    </li>
                                                    <li>
                                                        2. Masukkan{" "}
                                                        <b>Nomor BRIVA </b>{" "}
                                                        <span className="font-semibold text-secondary">
                                                            {
                                                                order
                                                                    .bank_transfer
                                                                    .virtual_account
                                                            }
                                                        </span>{" "}
                                                        kemudian pilih{" "}
                                                        <b>benar</b>
                                                    </li>
                                                    <li>
                                                        3. Periksa informasi
                                                        yang tertera di layar.
                                                        jika <b>Benar</b>, pilih{" "}
                                                        <b>ya</b>.
                                                    </li>
                                                </ul>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </SimpleFrontpageLayout>
    );
};

export default Pembayaran;
