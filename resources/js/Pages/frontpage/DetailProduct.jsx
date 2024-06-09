// src/pages/DetailProduct.jsx
import React, { useState, useRef } from "react";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Rating } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data Produk Terkait (ini bisa berasal dari API atau state)
// const relatedProducts = [
//     {
//         id: 1,
//         title: "Related Product 1",
//         price: 49.99,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvhp1X-3KjrcZDZ1Uz7H5FVLmE2LL8qP3Jw&s",
//         description:
//             "Description for Related Product 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
//         rating: 4,
//     },
//     {
//         id: 2,
//         title: "Related Product 2",
//         price: 39.99,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvhp1X-3KjrcZDZ1Uz7H5FVLmE2LL8qP3Jw&s",
//         description:
//             "Description for Related Product 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
//         rating: 3.5,
//     },
//     {
//         id: 3,
//         title: "Related Product 3",
//         price: 29.99,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvhp1X-3KjrcZDZ1Uz7H5FVLmE2LL8qP3Jw&s",
//         description:
//             "Description for Related Product 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
//         rating: 4.5,
//     },
//     {
//         id: 4,
//         title: "Related Product 4",
//         price: 59.99,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvhp1X-3KjrcZDZ1Uz7H5FVLmE2LL8qP3Jw&s",
//         description:
//             "Description for Related Product 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
//         rating: 4,
//     },
//     {
//         id: 5,
//         title: "Related Product 5",
//         price: 19.99,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvhp1X-3KjrcZDZ1Uz7H5FVLmE2LL8qP3Jw&s",
//         description:
//             "Description for Related Product 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
//         rating: 5,
//     },
//     {
//         id: 6,
//         title: "Related Product 6",
//         price: 24.99,
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvhp1X-3KjrcZDZ1Uz7H5FVLmE2LL8qP3Jw&s",
//         description:
//             "Description for Related Product 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
//         rating: 3,
//     },
// ];

const DetailProduct = () => {
    // const [selectedProduct, setSelectedProduct] = useState({
    //     id: 1,
    //     title: "Initial Product",
    //     price: 99.99,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvhp1X-3KjrcZDZ1Uz7H5FVLmE2LL8qP3Jw&s",
    //     description:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
    //     rating: 4.5,
    // });
    const sliderRef = useRef(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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
        <FrontpageLayout>
            <div className="container px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Bagian Gambar Produk */}
                    <div className="text-center">
                        <img
                            src={selectedProduct.image}
                            alt="Product"
                            className=" w-2/4 h-auto"
                            style={{ maxHeight: "500px" }}
                        />
                    </div>

                    {/* Bagian Detail Produk */}
                    <div>
                        <h1 className="text-2xl font-bold mb-2">
                            {selectedProduct.title}
                        </h1>
                        <h2 className="text-xl text-indigo-600 mb-4">
                            ${selectedProduct.price}
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
                    </div>
                </div>

                {/* Bagian Ulasan */}
                <div className=" mt-96">
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
                            {relatedProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="text-center px-2"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="max-w-full cursor-pointer"
                                        onClick={() =>
                                            handleProductClick(product)
                                        }
                                    />
                                    <p className="mt-2">{product.title}</p>
                                    <p className="text-indigo-600">
                                        ${product.price}
                                    </p>
                                </div>
                            ))}
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
