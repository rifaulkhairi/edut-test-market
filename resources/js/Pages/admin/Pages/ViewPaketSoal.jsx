import React, { useState, useRef } from "react";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Avatar, Divider, Rating, Stack } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";
import Harga from "@/Components/Harga";
import BasicTabs from "@/Components/detailProduct/DetailProductTabs";
import RadioCategory, { RadioGroup } from "@/Components/RadioCategory";
import { deepOrange, deepPurple } from "@mui/material/colors";
import ProductCard from "@/Components/ProductCard";
import Sidebar from "@/Components/admin/Sidebar";

import Header from "@/Components/admin/Header";

const DetailProduct = ({ auth, detail, products, paketsoal }) => {
    const [sortBy, setSortBy] = useState("semua");

    const comments = [
        {
            id: 1,
            postID: 1,
            like: 20,
            tgl: "15-06-2024",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed beatae omnis at voluptates quisquam quia facilis, dolorum deserunt fuga tempora?",
        },
        {
            id: 2,
            postID: 1,
            like: 20,
            tgl: "15-06-2024",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed beatae omnis at voluptates quisquam quia facilis, dolorum deserunt fuga tempora?",
        },
    ];

    const sliderRef = useRef(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tab={1} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header></Header>
                <div className="space"></div>
                <div className="container px-20 pt-2">
                    <div className="grid-cols-1 flex gap-4 bg-white shadow-md p-5 rounded-md">
                        {/* Bagian Gambar Produk */}
                        <div className="flex-[0.3] text-center">
                            <img
                                src={`${paketsoal.base_url}/storage/${paketsoal.link_cover}`}
                                alt="Product"
                                className="h-auto"
                                style={{ maxHeight: "500px" }}
                            />
                        </div>

                        {/* Bagian Detail Produk */}
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold mb-2">
                                {paketsoal.name}
                            </h1>
                            <div>
                                <h2 className="text-xl text-indigo-600 mb-4">
                                    <Harga
                                        nilai={paketsoal.price}
                                        className="text-md font-semibold text-secondary"
                                    ></Harga>
                                </h2>
                                <p className="text-md text-gray-600">{`${paketsoal.terjual} terjual`}</p>
                                <div className="flex gap-x-2">
                                    <p className="text-xl font-semibold text-secondary">
                                        {5}
                                    </p>
                                    <Rating
                                        value={5}
                                        readOnly
                                        precision={0.5}
                                    />
                                </div>
                                <button
                                    disabled
                                    className="mt-4 bg-secondary/15 border-secondary  border-2 text-secondary px-4 py-2 rounded hover:bg-secondary/10"
                                >
                                    Add to Cart
                                </button>
                                {/* <Link
                                href={route("paketsoal", {
                                    id: selectedProduct.id,
                                })}
                            ></Link> */}
                                <div className="pr-20">
                                    <p className="mt-4">
                                        {paketsoal.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Ulasan */}
                    <div className="bg-white mt-5 rounded-md p-5 shadow-md">
                        <h3 className="text-xl font-semibold mb-4">
                            Penilaian Produk
                        </h3>
                        <div className="flex w-full h-32 bg-secondary/5 px-5 py-3 border-2 border-secondary/15 items-center gap-x-5">
                            <div>
                                <div className="flex w-full text-secondary font-semibold text-4xl items-center justify-center gap-3">
                                    {4}
                                    <span className="font-normal text-xl">
                                        dari 5
                                    </span>
                                </div>
                                <Rating
                                    value={4}
                                    readOnly
                                    size="large"
                                    precision={0.5}
                                />
                            </div>
                            <div className="flex gap-4 flex-row">
                                <RadioGroup
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <RadioCategory value="semua">
                                        Semua
                                    </RadioCategory>
                                    <RadioCategory value="5 bintang">
                                        5 Bintang
                                    </RadioCategory>
                                    <RadioCategory value="4 bintang">
                                        4 Bintang
                                    </RadioCategory>
                                    <RadioCategory value="3 bintang">
                                        3 Bintang
                                    </RadioCategory>
                                    <RadioCategory value="2 bintang">
                                        2 Bintang
                                    </RadioCategory>
                                    <RadioCategory value="1 bintang">
                                        1 Bintang
                                    </RadioCategory>
                                </RadioGroup>
                            </div>
                        </div>
                        <div>
                            {/* Ulasan Individual */}
                            <div className="mb-4 mt-4">
                                <div className="flex w-full p-4 flex-col gap-y-4">
                                    {comments.map((comment) => (
                                        <div className="flex w-full gap-4">
                                            <Avatar
                                                sx={{
                                                    bgcolor: deepOrange[500],
                                                }}
                                            >
                                                RU
                                            </Avatar>

                                            <div className=" min-h-24">
                                                <p className="text-md text-secondary font-semibold">
                                                    Rifa Ulkhairi
                                                </p>
                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        {comment.tgl}
                                                    </p>
                                                    <Rating
                                                        value={5}
                                                        readOnly
                                                        size="small"
                                                        precision={0.5}
                                                    ></Rating>
                                                </div>

                                                <p className="text-gray-700">
                                                    {comment.content}
                                                </p>
                                            </div>
                                            <Divider orientation="horizontal" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Tambahkan ulasan lainnya di sini */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailProduct;
