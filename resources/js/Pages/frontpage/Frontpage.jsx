import Hero from "@/Components/Hero";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import {
    ClipboardDocumentIcon,
    WalletIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";
import ProductCard from "@/Components/ProductCard";
import { useState } from "react";
import { router } from "@inertiajs/react";
import CS from "@/Components/CS";

export default function Frontpage({ auth, produks, base_url, cart }) {
    const [sortBy, setSortBy] = useState("terpopuler");

    return (
        <>
            <FrontpageLayout user={auth} cart={cart} base_url={base_url}>
                <div className="flex bg-white w-full flex-col items-center">
                    <div className="flex flex-row max-w-5xl gap-x-1 mt-1">
                        <Hero></Hero>
                    </div>
                    <div className="flex w-full max-w-5xl mt-2 pb-2">
                        <div className="flex w-full h-24 items-center justify-center flex-row gap-5">
                            <button
                                className="flex w-20 items-center justify-center  h-20 bg-[#008a60]  flex-col rounded-3xl hover:-translate-y-1 transition-all"
                                variant="text"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.visit("/user/paketsoal");
                                }}
                            >
                                <ClipboardDocumentIcon className="h-10 w-10 text-white"></ClipboardDocumentIcon>
                                <p className="capitalize font-semibold text-xs text-white">
                                    Soal ku
                                </p>
                            </button>

                            <button
                                className="flex  h-20 w-20 bg-[#7464a7] justify-center  flex-col gap-y-2 items-center rounded-3xl hover:-translate-y-1 transition-all"
                                variant="text"
                            >
                                <HeartIcon className="h-8 w-8 text-white"></HeartIcon>
                                <p className="capitalize font-semibold text-xs text-center text-white">
                                    Favorit
                                </p>
                            </button>
                            <button
                                className="flex w-20 h-20 bg-[#00c29d] justify-center border-[1px] flex-col gap-y-2 items-center rounded-3xl hover:-translate-y-1 transition-all"
                                variant="text"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.visit("/riwayattransaksi");
                                }}
                            >
                                <WalletIcon className="h-8 w-8 text-white font-bold"></WalletIcon>
                                <p className="capitalize font-normal text-xs text-center text-white">
                                    Riwayat
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Menu */}

                {/* Produk */}
                <section className="flex w-full h-full items-center justify-center flex-col gap-2">
                    <div className="flex w-full h-12 bg-white max-w-5xl items-center border-b-2 border-gray-600">
                        <div className="m-auto text-gray-600">Rekomendasi</div>
                    </div>

                    <div className="w-full max-w-5xl flex flex-wrap min-w-5xl gap-2">
                        {produks.map((product) => (
                            <ProductCard
                                base_url={base_url}
                                product={product}
                                key={product.id}
                            />
                        ))}
                    </div>
                </section>
                <CS />

                <div></div>
            </FrontpageLayout>
        </>
    );
}
