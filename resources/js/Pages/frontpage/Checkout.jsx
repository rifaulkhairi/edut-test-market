import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Link, router } from "@inertiajs/react";
import {
    Box,
    Breadcrumbs,
    Button,
    capitalize,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    Radio,
    RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Harga from "@/Components/Harga";
import { TbTrash } from "react-icons/tb";
import Image from "@/Components/Image";
import RadioCategoryCustom, { RadioGroupCustom } from "@/Components/Radio";

const Checkout = ({ auth, cartitem, base_url }) => {
    const [pymentMethod, setPymentMethod] = useState("gopay");

    let paketsal = cartitem;
    const [checked, setChecked] = useState(Array(paketsal.length).fill(false));
    const [selectedProduct, setSelectedProduct] = useState([]);

    const handleCheckboxChange = (e, index) => {
        const updatedChecked = [...checked];
        updatedChecked[index] = e.target.checked;
        setChecked(updatedChecked);
        if (e.target.checked) {
            const newSelectedProduct = [...selectedProduct, paketsal[index]];
            setSelectedProduct(newSelectedProduct);
            console.log("Added Product: ", paketsal[index]);
        } else {
            const filteredProduct = selectedProduct.filter(
                (item) => item.id !== paketsal[index].id
            );
            setSelectedProduct(filteredProduct);
            console.log("Removed Product: ", paketsal[index]);
        }
    };
    useEffect(() => {
        console.log("Selected Products: ", selectedProduct);
    }, [selectedProduct]);

    const totalItems = selectedProduct.length;
    const totalPrice = selectedProduct.reduce(
        (total, item) => total + Number(item.paketsoal.price),
        0
    );

    return (
        <FrontpageLayout user={auth} cart={cartitem} base_url={base_url}>
            <div className="container max-w-5xl mt-9">
                <Breadcrumbs separator={<MdOutlineNavigateNext />}>
                    <Link href="/">Home</Link>
                    <Link>Keranjang Belanja</Link>
                    <Link>Checkout</Link>
                </Breadcrumbs>
                <h1 className="mt-4 font-bold text-secondary text-xl">
                    Checkout
                </h1>
                <div className="flex flex-col w-full gap-x-3 items-stretch mt-3">
                    <h2>Produk Yang di Pesan</h2>
                    <div className="flex flex-col gap-y-3">
                        <div className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-row items-center">
                            <div className="flex flex-1 flex-row gap-x-7 w-full h-full items-center">
                                <div className="h-full w-fit">
                                    <Image
                                        src="https://raw.githubusercontent.com/rifaulkhairi/edu-test-market-public-assets/main/4.png"
                                        className="h-28 w-28 rounded-lg"
                                    />
                                </div>
                                <div className="flex h-full flex-col justify-center">
                                    <p className="text-secondary font-semibold">
                                        Soal TryOut TKD BUMN
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
                                        <Harga nilai={20000}></Harga>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-row items-center">
                            <div className="flex flex-1 flex-row gap-x-7 w-full h-full items-center">
                                <div className="h-full w-fit">
                                    <Image
                                        src="https://raw.githubusercontent.com/rifaulkhairi/edu-test-market-public-assets/main/4.png"
                                        className="h-28 w-28 rounded-lg"
                                    />
                                </div>
                                <div className="flex h-full flex-col justify-center">
                                    <p className="text-secondary font-semibold">
                                        Soal TryOut TKD BUMN
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
                                        <Harga nilai={20000}></Harga>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md mt-5 p-3">
                        Metode pembayaran
                        <div className="ml-5 flex flex-row gap-4 mt-3 mb-3">
                            <RadioGroupCustom
                                value={pymentMethod}
                                onChange={(e) =>
                                    setPymentMethod(e.target.value)
                                }
                            >
                                <RadioCategoryCustom value="gopay">
                                    Gopay
                                </RadioCategoryCustom>
                                <RadioCategoryCustom value="transferbank">
                                    Transfer Bank
                                </RadioCategoryCustom>
                            </RadioGroupCustom>
                        </div>
                        {pymentMethod === "transferbank" && (
                            <div className="mb-3">
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="BCA"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="BCA"
                                            control={<Radio />}
                                            label={
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                >
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg"
                                                        alt="BCA"
                                                        style={{
                                                            marginRight: 8,
                                                            height: 20,
                                                        }}
                                                    />
                                                    BCA
                                                </Box>
                                            }
                                        />
                                        <FormControlLabel
                                            value="BNI"
                                            control={<Radio />}
                                            label={
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                >
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/id/5/55/BNI_logo.svg"
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
                                            value="BRI"
                                            control={<Radio />}
                                            label={
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                >
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg"
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
                                        <Harga nilai={100000} />
                                    </p>
                                    <p>Total Pembayaran</p>
                                    <p>
                                        <Harga nilai={100000} />
                                    </p>
                                </div>

                                <button className="bg-secondary text-white p-3 rounded-sm hover:bg-secondary/65 text-sm  shadow-sm transition-all">
                                    buat pesanan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontpageLayout>
    );
};

export default Checkout;
