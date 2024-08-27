import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import { Button, Select, Option, Card } from "@material-tailwind/react";
import Harga from "./Harga";
import { Skeleton } from "@mui/material";
import Image from "./Image";

const ProductCard = ({ product, base_url }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    console.log(product.price);

    return (
        <Link
            href={route("detailproduct", { id: product.id })}
            className="hover:-translate-y-1 transition-all hover:shadow-md"
        >
            <div className="w-40 h-72 bg-white">
                <div className="relative bg-black w-40 h-40 rounded-md">
                    <p className="absolute right-0 w-12 py-1 bg-tertiary/45 text-white text-xs px-2">
                        -{product.discount * 100}%
                    </p>
                    <Image
                        src={`${base_url}/storage/${product.link_cover}`}
                        className="w-40 h-40"
                    />
                </div>
                <div className="w-40 h-40 rounded-md flex p-2 flex-col gap-1">
                    <p className="text-sm font-semibold line-clamp-2 text-secondary">
                        {product.name}
                    </p>

                    <p className="text-sm text-gray-500 line-clamp-2 line-through">
                        <Harga nilai={product.price}></Harga>
                    </p>
                    <div className="flex w-full justify-between">
                        <p className="text-sm text-secondary font-semibold">
                            <Harga
                                nilai={
                                    product.price -
                                    product.price * product.discount
                                }
                            ></Harga>
                        </p>
                        <p className="text-sm text-gray-500 ">
                            {product.terjual} terjual
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
