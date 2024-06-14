import React, { useState, useRef } from "react";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Rating } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";

const DetailProduct = ({ auth, detail }) => {
    const [selectedProduct, setSelectedProduct] = useState({
        id: detail.id,
        title: detail.title,
        harga: detail.harga,
        diskon: detail.diskon,
        image: detail.image,
        description: detail.description,
        rating: detail.rating,
    });

    const sliderRef = useRef(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // const navigateToDetailSoal = (id) => {
    //     Inertia.get(`/paketsoal/${id}`);
    // };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        <FrontpageLayout user={auth}>
            <div className="container px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Bagian Gambar Produk */}
                    <div className="text-center">
                        <img
                            src={selectedProduct.image}
                            alt="Product"
                            className="w-2/4 h-auto"
                            style={{ maxHeight: "500px" }}
                        />
                    </div>

                    {/* Bagian Detail Produk */}
                    <div>
                        <h1 className="text-2xl font-bold mb-2">
                            {selectedProduct.title}
                        </h1>
                        <h2 className="text-xl text-indigo-600 mb-4">
                            ${selectedProduct.harga}
                        </h2>
                        <Rating
                            value={selectedProduct.rating}
                            readOnly
                            precision={0.5}
                        />
                        <p className="mt-4">{selectedProduct.description}</p>
                        <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                        <Link href={route("paketsoal", { id: selectedProduct.id })}>
                        <button className="mt-4 mx-8 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Kerjakan Soal
                        </button>
                        </Link>
                    </div>
                </div>

                {/* Bagian Ulasan */}
                <div className="mt-96">
                    <h3 className="text-xl font-semibold mb-4">Reviews</h3>
                    <div>
                        {/* Ulasan Individual */}
                        <div className="mb-4">
                            <Rating value={4} readOnly />
                            <p className="text-gray-700">
                                User review goes here. It provides feedback
                                about the product.
                            </p>
                        </div>
                        {/* Tambahkan ulasan lainnya di sini */}
                    </div>
                </div>

                {/* Bagian Produk Terkait */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">
                        Related Products
                    </h3>
                    <div className="relative">
                        <button
                            onClick={() => sliderRef.current.slickPrev()}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full z-10"
                        >
                            &#10094;
                        </button>
                        <Slider ref={sliderRef} {...settings}>
                            <div
                                key={detail.id}
                                className="text-center px-2"
                            >
                                <img
                                    src={detail.image}
                                    alt={detail.title}
                                    className="max-w-full cursor-pointer"
                                    onClick={() =>
                                        handleProductClick(detail)
                                    }
                                />
                                <p className="mt-2">{detail.title}</p>
                                <p className="text-indigo-600">
                                    ${detail.harga}
                                </p>
                            </div>
                        </Slider>
                        <button
                            onClick={() => sliderRef.current.slickNext()}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full z-10"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </div>
        </FrontpageLayout>
    );
};

export default DetailProduct;
