import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Link, router, useForm } from "@inertiajs/react";
import {
    Box,
    Breadcrumbs,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Harga from "@/Components/Harga";
import Image from "@/Components/Image";
import RadioCategoryCustom, { RadioGroupCustom } from "@/Components/Radio";
import qrislogo from "../../../../public/images/QRIS_logo.svg";
import brilogo from "../../../../public/images/BANK_BRI_logo.svg";
import bnilogo from "../../../../public/images/BNI_logo.svg";
import CS from "@/Components/CS";
import { Toaster, toast } from "sonner";

const Checkout = ({ auth, cartitem, base_url, selecteditem, flash }) => {
    const [pymentMethod, setPymentMethod] = useState("gopay");
    const [totalPemabayaran, setTotalPembayaran] = useState(0);
    const { data, setData } = useForm();
    const [bank, setBank] = useState(null);

    const buatpesanan = () => {
        router.post("/buatpesanan", {
            pymentMethod: pymentMethod,
            totalPemabayaran: totalPemabayaran,
            orderitem: selecteditem,
            bank: bank,
        });
    };

    useEffect(() => {
        if (selecteditem && selecteditem.length > 0) {
            const total = selecteditem.reduce(
                (acc, item) =>
                    acc +
                    (item.paketsoal.price -
                        item.paketsoal.price * item.paketsoal.discount || 0),
                0
            );
            setTotalPembayaran(total);
        } else {
            setTotalPembayaran(0);
        }
    }, [selecteditem]);

    const handleBankSelect = (e) => {
        setBank(e.target.value);
    };
    useEffect(() => {
        if (flash.message != null) {
            if (flash.message.success) {
                toast.success(flash.message.success);
            } else if (flash.message.error) {
                toast.error(flash.message.error);
            }
        }
    }, [flash]);

    return (
        <FrontpageLayout user={auth} cart={cartitem} base_url={base_url}>
            <Toaster position="top-right" richColors />
            <div className="container max-w-5xl mt-9">
                <Breadcrumbs separator={<MdOutlineNavigateNext />}>
                    <Link href="/">Home</Link>
                    <Link href="/cart">Keranjang Belanja</Link>
                    <Link>Checkout</Link>
                </Breadcrumbs>
                <h1 className="mt-4 font-bold text-secondary text-xl">
                    Checkout
                </h1>
                <div className="flex flex-col w-full gap-x-3 items-stretch mt-3">
                    <h2>Produk Yang di Pesan</h2>
                    <div className="flex flex-col gap-y-3">
                        {selecteditem && selecteditem.length > 0 ? (
                            selecteditem.map((item, index) => (
                                <div
                                    className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-row items-center"
                                    key={index}
                                >
                                    <div className="flex flex-1 flex-row gap-x-7 w-full h-full items-center">
                                        <div className="h-full w-fit">
                                            <Image
                                                src={`${base_url}/storage/${item.paketsoal.link_cover}`}
                                                className="h-28 w-28 rounded-lg"
                                            />
                                        </div>
                                        <div className="flex h-full flex-col justify-center">
                                            <p className="text-secondary font-semibold">
                                                {item.paketsoal.name}
                                            </p>
                                            <p className="text-[#767676]">
                                                Soal + Pembahasan
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] flex-row gap-x-7 h-full">
                                        <div className="flex h-fit w-full flex-col justify-center items-center">
                                            <p className=" text-center text-[#767676]">
                                                Harga
                                            </p>
                                            <p className=" text-center">
                                                <Harga
                                                    className="line-through text-sm text-center text-gray-500"
                                                    nilai={item.paketsoal.price}
                                                ></Harga>
                                                <Harga
                                                    nilai={
                                                        item.paketsoal.price -
                                                        item.paketsoal.price *
                                                            item.paketsoal
                                                                .discount
                                                    }
                                                ></Harga>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Kosong</p>
                        )}
                    </div>
                    <div className="bg-white rounded-md shadow-md mt-5 p-3">
                        Metode pembayaran
                        <div className="ml-5 flex flex-row gap-4 mt-3 mb-3">
                            <RadioGroupCustom
                                value={pymentMethod}
                                onChange={(e) => {
                                    console.log("test");
                                    setPymentMethod(e.target.value);
                                }}
                            >
                                <RadioCategoryCustom value="gopay">
                                    <img
                                        src={qrislogo}
                                        className="w-36 text-white"
                                    />
                                </RadioCategoryCustom>
                                <RadioCategoryCustom
                                    value="bank_transfer"

                                    // disabled
                                >
                                    <span className="font-bold">
                                        Transfer Bank
                                    </span>
                                </RadioCategoryCustom>
                            </RadioGroupCustom>
                        </div>
                        {pymentMethod === "bank_transfer" && (
                            <div className="mb-3">
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                        value={bank}
                                        onChange={(e) => {
                                            handleBankSelect(e);
                                        }}
                                    >
                                        <FormControlLabel
                                            value="bni"
                                            control={<Radio />}
                                            label={
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                >
                                                    <img
                                                        src={bnilogo}
                                                        alt="BNI"
                                                        style={{
                                                            marginRight: 8,
                                                            // width: ,
                                                            height: 20,
                                                        }}
                                                    />
                                                    BNI
                                                </Box>
                                            }
                                        />
                                        <FormControlLabel
                                            value="bri"
                                            control={<Radio />}
                                            label={
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                >
                                                    <img
                                                        src={brilogo}
                                                        alt="BRI"
                                                        style={{
                                                            marginRight: 8,
                                                            height: 20,
                                                        }}
                                                    />
                                                    BRI
                                                </Box>
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        )}
                        <hr />
                        <div className="flex w-full h-full justify-end mt-3">
                            <div className=" w-auto">
                                <div className="grid grid-cols-2 gap-x-10">
                                    <p>Subtotal untuk produk</p>
                                    <p>
                                        <Harga nilai={totalPemabayaran} />
                                    </p>
                                    <p>Total Pembayaran</p>
                                    <p className="text-secondary font-bold ">
                                        <Harga nilai={totalPemabayaran} />
                                    </p>
                                </div>

                                <button
                                    className="bg-secondary text-white px-3 py-2 mt-4  hover:bg-secondary/65 text-sm  shadow-sm transition-all rounded-md"
                                    onClick={buatpesanan}
                                >
                                    Buat Pesanan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CS />
        </FrontpageLayout>
    );
};

export default Checkout;
