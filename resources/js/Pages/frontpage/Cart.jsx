import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Link, router } from "@inertiajs/react";
import { Breadcrumbs, Checkbox, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Harga from "@/Components/Harga";
import { TbTrash } from "react-icons/tb";
import Image from "@/Components/Image";
import PrimaryButton from "@/Components/PrimaryButton";

const Cart = ({ auth, cartitem, base_url }) => {
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
        (total, item) =>
            total +
            Number(
                item.paketsoal.price -
                    item.paketsoal.price * item.paketsoal.discount
            ),
        0
    );

    return (
        <FrontpageLayout user={auth} cart={cartitem} base_url={base_url}>
            <div className="container max-w-5xl mt-9">
                <Breadcrumbs separator={<MdOutlineNavigateNext />}>
                    <Link href="/">Home</Link>
                    <Link>Keranjang Belanja</Link>
                </Breadcrumbs>
                <h1 className="mt-4 font-bold text-secondary text-xl">
                    Keranjang Belanja
                </h1>
                <div className="flex flex-row w-full gap-x-3 items-stretch mt-3">
                    <div className="w-full">
                        <div className="flex justify-between shadow-md bg-white px-5 py-2 rounded-md">
                            <h2>Produk</h2>
                            <ul className="flex gap-7">
                                <li>Harga</li>

                                <li>Aksi</li>
                            </ul>
                        </div>
                        {cartitem.map((item, index) => (
                            <div
                                className="flex mt-2 justify-between shadow-md bg-white px-5 py-2 rounded-md"
                                key={item.id}
                            >
                                <div className="flex justify-center items-center">
                                    <Checkbox
                                        checked={checked[index]}
                                        onChange={(e) =>
                                            handleCheckboxChange(e, index)
                                        }
                                    />
                                    <div className="flex flex-row justify-center items-center gap-3">
                                        <Image
                                            className="rounded-md w-20 h-20"
                                            src={`${base_url}/storage/${item.paketsoal.link_cover}`}
                                        />
                                        {/* <img
                                            className="rounded-md w-20 h-20"
                                            src="https://raw.githubusercontent.com/rifaulkhairi/edu-test-market-public-assets/main/1.png"
                                        ></img> */}
                                        <h2>{item.paketsoal.name}</h2>
                                    </div>
                                </div>
                                <ul className="flex gap-7 justify-center items-center">
                                    <li>
                                        <Harga
                                            className="line-through text-sm text-center"
                                            nilai={item.paketsoal.price}
                                        ></Harga>
                                        <Harga
                                            className="text-center"
                                            nilai={
                                                item.paketsoal.price -
                                                item.paketsoal.price *
                                                    item.paketsoal.discount
                                            }
                                        ></Harga>
                                    </li>
                                    <li>
                                        <IconButton
                                            onClick={(e) => {
                                                e.preventDefault();
                                                router.post(
                                                    `/cartitem/delete/${item.id}`,
                                                    { _method: "delete" }
                                                );
                                            }}
                                        >
                                            <TbTrash />
                                        </IconButton>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-md min-w-56">
                        <div className="bg-white rounded-md p-4 shadow-md">
                            <h1 className="font-semibold">Rincian Belanja</h1>
                            <ul>
                                {selectedProduct.map((item, index) => (
                                    <ul
                                        key={index}
                                        className="flex justify-between text-wrap gap-x-3"
                                    >
                                        <li>{item.paketsoal.name}</li>
                                        <li>
                                            <Harga
                                                nilai={
                                                    item.paketsoal.price -
                                                    item.paketsoal.price *
                                                        item.paketsoal.discount
                                                }
                                            />
                                        </li>
                                    </ul>
                                ))}
                            </ul>
                            <div className="mt-2">
                                <ul className="flex justify-between">
                                    <li>Kuantitas</li>
                                    <li>{totalItems}</li>
                                </ul>
                                <ul className="flex justify-between">
                                    <li>Total Belanja</li>
                                    <li>
                                        <Harga nilai={totalPrice} />
                                    </li>
                                </ul>
                                <hr></hr>
                                <ul className="flex justify-between mt-2">
                                    <li className="font-bold ">
                                        Total Belanja
                                    </li>
                                    <li>
                                        <Harga nilai={totalPrice} />
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center w-full justify-center mt-4">
                                <PrimaryButton
                                    variant="contained"
                                    sx={{ textTransform: "capitalize" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        router.post("/checkout", {
                                            _method: "get",
                                            orderitem: selectedProduct,
                                        });
                                    }}
                                >
                                    Checkout
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontpageLayout>
    );
};

export default Cart;
