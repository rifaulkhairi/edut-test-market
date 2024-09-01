import React, { useState, useRef } from "react";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Avatar, Divider, Rating, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasicTabs from "@/Components/detailProduct/DetailProductTabs";
import RadioCategory, { RadioGroup } from "@/Components/RadioCategory";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";
import { Fab } from "@mui/material";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "@/Components/Image";
import { Link, router } from "@inertiajs/react";
import Harga from "@/Components/Harga";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";
import CS from "@/Components/CS";

const DetailProduct = ({ auth, detail, base_url, cart, paketsoal, flash }) => {
    const [sortBy, setSortBy] = useState("semua");

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const sliderRef = useRef(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
        <FrontpageLayout user={auth} base_url={base_url} cart={cart}>
            <Toaster position="top-right" richColors />
            <div className="container px-20 pt-2 max-w-6xl">
                <div className="flex gap-x-3 bg-white shadow-md p-5 rounded-md">
                    {/* Bagian Gambar Produk */}

                    <div className="flex w-40 h-40 text-center">
                        <Image
                            src={`${base_url}/storage/${paketsoal.link_cover}`}
                            className="w-40 h-40 rounded-md"
                        />
                    </div>

                    {/* Bagian Detail Produk */}
                    <div className="">
                        <h1 className="text-2xl font-bold mb-2">
                            {paketsoal.name}
                        </h1>
                        <h2 className="text-xl text-indigo-600 mb-4">
                            <Harga
                                nilai={paketsoal.price}
                                className="text-md font-semibold text-secondary"
                            ></Harga>
                        </h2>
                        <p className="text-md text-gray-600"> 1rb terjual</p>
                        <div className="flex gap-x-2">
                            <p className="text-xl font-semibold text-secondary">
                                {paketsoal.rating}
                            </p>
                            <Rating value={paketsoal.rating} readOnly />
                        </div>
                        <div className="gap-x-4 mt-4 flex flex-row justify-center items-center">
                            <SecondaryButton
                                className="bg-secondary/5  border-2 text-secondary px-4 py-2 rounded hover:bg-secondary/10"
                                onClick={() => {
                                    router.post(
                                        `/addtocart/${paketsoal.id}`,
                                        {},
                                        {
                                            preserveState: true,
                                            preserveScroll: true,
                                            only: ["cart", "flash"],
                                            progressIndicator: false,
                                        }
                                    );
                                }}
                            >
                                Tambahkan ke keranjang
                            </SecondaryButton>
                            <PrimaryButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.visit(`/preview/${paketsoal.id}`);
                                }}
                            >
                                Preview Soal
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="bg-white mt-5 rounded-md p-5 shadow-md">
                    <div className="grid grid-flow-col-dense bg-white p-3 rounded-md">
                        {/* Bagian Detail Produk */}
                        <div className="">
                            <div>
                                <BasicTabs
                                    auth={auth}
                                    detail={detail}
                                    paketsoal={paketsoal}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bagian Ulasan */}
                <div className="bg-white mt-5 rounded-md p-5 shadow-md">
                    <h3 className="text-xl font-semibold mb-4">
                        Penilaian Produk
                    </h3>
                    <div className="flex w-full  bg-secondary/5 px-5 py-3 border-2 border-secondary/15 items-center gap-x-5">
                        <div>
                            <div className="flex w-full text-secondary font-semibold text-4xl items-center justify-center gap-3">
                                {paketsoal.rating}
                                <span className="font-normal text-xl">
                                    dari 5
                                </span>
                            </div>
                            <Rating
                                value={paketsoal.rating}
                                readOnly
                                size="large"
                            />
                        </div>
                        <div className="flex gap-4 flex-wrap">
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
                        <div className="flex w-full mb-4 mt-4">
                            <div className="flex w-full p-4 flex-col gap-y-4">
                                {paketsoal.penilaian.map((comment) => (
                                    <div className="flex  gap-4 w-full">
                                        <Avatar
                                            sx={{ bgcolor: deepOrange[500] }}
                                        >
                                            RU
                                        </Avatar>

                                        <div className="flex flex-col w-full min-h-24">
                                            <p className="text-md text-secondary font-semibold">
                                                {comment.created_by}
                                            </p>
                                            <div>
                                                <p className="text-xs text-gray-500">
                                                    {new Date(
                                                        comment.created_at
                                                    ).toLocaleString()}
                                                </p>
                                                <Rating
                                                    value={comment.rating}
                                                    readOnly
                                                    size="small"
                                                    precision={0.5}
                                                ></Rating>
                                            </div>

                                            <p className="text-gray-700">
                                                {comment.comment}
                                            </p>
                                            {comment.replies.map((reply) => (
                                                <div className="bg-[#F5F5F5] p-5 my-3 rounded-sm flex flex-col w-full">
                                                    <p className="text-black font-bold mb-2">
                                                        Edu Test Market
                                                    </p>
                                                    <p>{reply.comment}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <Divider orientation="horizontal" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Tambahkan ulasan lainnya di sini */}
                    </div>
                </div>
                <CS />
            </div>
        </FrontpageLayout>
    );
};

export default DetailProduct;
