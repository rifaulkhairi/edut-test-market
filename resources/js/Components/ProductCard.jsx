import React from "react";
import { Link, Head } from "@inertiajs/react";
import { Button, Select, Option, Card } from "@material-tailwind/react";


const ProductCard = ({product}) => {
    return (
        <Link
            href={route("detailproduct")}
            className="hover:-translate-y-1 transition-all"
        >
            <Card className="w-40 h-72 rounded-md">
                <div className="bg-black w-40 h-40 rounded-md">
                    <img
                        className="w-full h-full bg-cover rounded-md"
                        src={product.image}
                    ></img>
                </div>
                <div className="w-40 h-40 rounded-md flex p-2 flex-col gap-1">
                    <p className="text-sm font-semibold line-clamp-2 text-secondary">
                        {product.title}
                    </p>
                    <p className="relative w-12 py-1 rounded-md bg-secondary text-white text-xs px-2">
                        -{product.diskon * 100}%
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 line-through">
                        Rp{product.harga}
                    </p>
                    <div className="flex w-full justify-between">
                        <p className="text-sm text-secondary font-semibold">
                            Rp{product.harga - product.harga * product.diskon}
                        </p>
                        <p className="text-sm text-gray-500 ">{product.terjual}rb terjual</p>
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default ProductCard;
