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
                <div className="grid-cols-1 flex gap-4 bg-white shadow-md p-5 rounded-md">
                    {/* Bagian Gambar Produk */}
                    <div className="flex-[0.3] text-center">
                        {!imageLoaded && (
                            <div className="w-60 h-60 bg-gray-100 rounded-md animate-pulse"></div>
                        )}
                        <img
                            className={`w-60 h-60  rounded-md ${
                                imageLoaded ? "" : "hidden"
                            }`}
                            src={`${base_url}/storage/${paketsoal.link_cover}`}
                            onLoad={handleImageLoad}
                        />
                    </div>

                    {/* Bagian Detail Produk */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-2">
                            {paketsoal.name}
                        </h1>
                        <div>
                            <BasicTabs
                                auth={auth}
                                detail={detail}
                                paketsoal={paketsoal}
                            />
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

                {/* Bagian Produk Terkait */}
                {/* <div className="mt-5">
                    <h3 className="text-xl font-semibold mb-4">
                        Produk Serupa
                    </h3>
                    <div className="relative">
                        <Slider ref={sliderRef} {...settings}>
                            {products.map((product) => (
                                <ProductCard
                                    product={product}
                                    key={product.id}
                                ></ProductCard>
                            ))}
                        </Slider>
                    </div>
                </div> */}
            </div>
        </FrontpageLayout>
    );
};

export default DetailProduct;
