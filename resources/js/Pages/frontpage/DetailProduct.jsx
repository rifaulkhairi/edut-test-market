import React, { useState, useRef } from "react";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Avatar, Divider, Rating, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasicTabs from "@/Components/detailProduct/DetailProductTabs";
import RadioCategory, { RadioGroup } from "@/Components/RadioCategory";
import { deepOrange, deepPurple } from "@mui/material/colors";

const DetailProduct = ({ auth, detail, base_url, cart }) => {
    const [sortBy, setSortBy] = useState("semua");

    const [selectedProduct, setSelectedProduct] = useState({
        id: detail.id,
        title: detail.name,
        harga: detail.price,
        diskon: detail.discount,
        image: detail.link_cover,
        description: detail.description,
        rating: detail.rating,
    });

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

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

    return (
        <FrontpageLayout user={auth} base_url={base_url} cart={cart}>
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
                            src={`${base_url}/storage/${selectedProduct.image}`}
                            onLoad={handleImageLoad}
                        />
                    </div>

                    {/* Bagian Detail Produk */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-2">
                            {selectedProduct.title}
                        </h1>
                        <div>
                            <BasicTabs auth={auth} detail={detail} />
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
                                {selectedProduct.rating}
                                <span className="font-normal text-xl">
                                    dari 5
                                </span>
                            </div>
                            <Rating
                                value={selectedProduct.rating}
                                readOnly
                                size="large"
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
                                            sx={{ bgcolor: deepOrange[500] }}
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
