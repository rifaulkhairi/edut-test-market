import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import { Button, Select, Option, Card } from "@material-tailwind/react";
import Harga from "./Harga";
import { Skeleton } from "@mui/material";

const ProductCard = ({ product, base_url }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    console.log(product.price);

    return (
        <Link
            href={route("detailproduct", { id: product.id })}
            className="hover:-translate-y-1 transition-all"
        >
            <Card className="w-40 h-72 rounded-md">
                <div className="bg-black w-40 h-40 rounded-md">
                    {!imageLoaded && (
                        <div className="w-full h-full bg-gray-300 rounded-md animate-pulse"></div>
                    )}
                    <img
                        className={`w-full h-full bg-cover rounded-md ${
                            imageLoaded ? "" : "hidden"
                        }`}
                        src={`${base_url}/storage/${product.link_cover}`}
                        onLoad={handleImageLoad}
                    />
                </div>
                <div className="w-40 h-40 rounded-md flex p-2 flex-col gap-1">
                    <p className="text-sm font-semibold line-clamp-2 text-secondary">
                        {product.name}
                    </p>
                    <p className="relative w-12 py-1 rounded-md bg-secondary text-white text-xs px-2">
                        -{product.discount * 100}%
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
            </Card>
        </Link>
    );
};

export default ProductCard;
