import React, { useState, useRef } from "react";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import {
    Avatar,
    Divider,
    IconButton,
    Rating,
    Stack,
    TextField,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { router } from "@inertiajs/react";
import Harga from "@/Components/Harga";
import RadioCategory, { RadioGroup } from "@/Components/RadioCategory";
import { deepOrange } from "@mui/material/colors";
import Sidebar from "@/Components/admin/Sidebar";
import { IoMdSend } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import Header from "@/Components/admin/Header";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css"; // or 'quill.bubble.css'

const DetailProduct = ({ auth, detail, products, paketsoal }) => {
    const [sortBy, setSortBy] = useState("semua");
    const [replies, setReplies] = useState({});

    const handleReplyChange = (commentId, value) => {
        setReplies({ ...replies, [commentId]: value });
    };

    const handleReplySubmit = (commentId) => {
        const reply = replies[commentId];
        if (reply) {
            router.post(`/admin/storereply/${commentId}`, {
                reply: reply,
            });
            setReplies({ ...replies, [commentId]: "" });
        }
    };

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
                                className="h-auto rounded-md"
                                style={{ maxHeight: "500px" }}
                            />
                        </div>

                        {/* Bagian Detail Produk */}
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold mb-2">
                                {paketsoal.name}
                            </h1>
                            <div>
                                <div className="flex flex-row justify-between">
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
                                                {paketsoal.rating}
                                            </p>
                                            <Rating
                                                value={paketsoal.rating}
                                                readOnly
                                            />
                                        </div>
                                        <button
                                            disabled
                                            className="mt-4 bg-secondary/15 border-secondary  border-2 text-secondary px-4 py-2 rounded hover:bg-secondary/10"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div>
                                        <div className="flex flex-col items-center justify-center gap-y-2">
                                            <RxLapTimer className="text-3xl text-[#184C80]" />
                                            <div className="flex flex-row gap-x-2 text-[#184C80] font-bold">
                                                <p>{paketsoal.jam}</p>
                                                <p>:</p>
                                                <p>{paketsoal.menit}</p>
                                                <p>:</p>
                                                <p>{paketsoal.detik}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <Link
                                href={route("paketsoal", {
                                    id: selectedProduct.id,
                                })}
                            ></Link> */}
                                <div className="pr-20">
                                    <p
                                        className="ql-container mt-4"
                                        dangerouslySetInnerHTML={{
                                            __html: paketsoal.description,
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Ulasan */}
                    <div className="bg-white mt-5 rounded-md p-5 shadow-md">
                        <h3 className="text-xl font-semibold mb-4">
                            Penilaian Produk
                        </h3>
                        <div className="flex w-full bg-secondary/5 px-5 py-3 border-2 border-secondary/15 items-center gap-x-5">
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
                            <div className="mb-4 mt-4">
                                <div className="flex w-full p-4 flex-col gap-y-4">
                                    {paketsoal.penilaian.map((comment) => (
                                        <div
                                            className="flex w-full gap-4"
                                            key={comment.id}
                                        >
                                            <Avatar
                                                sx={{
                                                    bgcolor: deepOrange[500],
                                                }}
                                            >
                                                RU
                                            </Avatar>

                                            <div className=" min-h-24 flex-col w-full">
                                                <div className="flex justify-between">
                                                    <p className="text-md text-secondary font-semibold">
                                                        {comment.created_by}
                                                    </p>
                                                    <IconButton
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            router.post(
                                                                `/admin/deletepenilaian/${comment.id}`,
                                                                {
                                                                    _method:
                                                                        "delete",
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        <MdDeleteForever />
                                                    </IconButton>
                                                </div>
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
                                                {comment.replies.map(
                                                    (reply) => (
                                                        <div className="bg-[#F5F5F5] p-5 my-3 rounded-sm">
                                                            <p className="text-black font-bold mb-2">
                                                                Edu Test Market
                                                            </p>
                                                            <p>
                                                                {reply.comment}
                                                            </p>
                                                        </div>
                                                    )
                                                )}

                                                <div className="flex w-full">
                                                    <TextField
                                                        className="flex p-3 w-full"
                                                        InputProps={{
                                                            disableUnderline: true, // Remove the underline (outline)
                                                        }}
                                                        value={
                                                            replies[
                                                                comment.id
                                                            ] || ""
                                                        }
                                                        onChange={(e) =>
                                                            handleReplyChange(
                                                                comment.id,
                                                                e.target.value
                                                            )
                                                        }
                                                    ></TextField>
                                                    <div className="flex items-center justify-center">
                                                        <IconButton
                                                            onClick={() =>
                                                                handleReplySubmit(
                                                                    comment.id
                                                                )
                                                            }
                                                        >
                                                            <IoMdSend />
                                                        </IconButton>
                                                    </div>
                                                </div>
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
