import Hero from "@/Components/Hero";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import {
    ClipboardDocumentIcon,
    WalletIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";
// import { Link, Head } from "@inertiajs/react";
import { Button, Card } from "@material-tailwind/react";
import ProductCard from "@/Components/ProductCard";
import RadioCategory, { RadioGroup } from "@/Components/RadioCategory";
import { useState } from "react";

export default function Frontpage({ auth, produks }) {
    const [sortBy, setSortBy] = useState("terpopuler");

    return (
        <>
            <FrontpageLayout user={auth}>
                <div className="container flex h-[346px] max-w-5xl">
                    <Hero></Hero>
                </div>
                {/* Menu */}
                <div className="flex w-full max-w-5xl">
                    <Card className="flex w-full h-24 items-center justify-center flex-row gap-5 rounded-md">
                        <Button
                            className="flex  h-20  border-2 flex-col"
                            variant="text"
                        >
                            <ClipboardDocumentIcon className="h-10 w-10 text-secondary"></ClipboardDocumentIcon>
                            <p className="capitalize font-semibold text-xs text-secondary">
                                Soal ku
                            </p>
                        </Button>
                        <Button
                            className="flex  h-20  border-2 flex-col gap-y-2 items-center"
                            variant="text"
                        >
                            <HeartIcon className="h-8 w-8 text-secondary"></HeartIcon>
                            <p className="capitalize font-semibold text-xs text-center text-secondary">
                                Favorit
                            </p>
                        </Button>
                        <Button
                            className="flex  h-20 border-secon border-2 flex-col gap-y-2 items-center"
                            variant="text"
                        >
                            <WalletIcon className="h-8 w-8 text-secondary"></WalletIcon>
                            <p className="capitalize font-normal text-xs text-center text-primary">
                                Riwayat
                            </p>
                        </Button>
                    </Card>
                </div>
                {/* Produk */}
                <section className="flex w-full h-full items-center justify-center flex-col gap-2">
                    <div className="flex w-full h-12 bg-[#EDEDED] max-w-5xl rounded-md items-center">
                        <div className="ml-5 flex flex-row gap-4">
                            <RadioGroup
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <RadioCategory value="terpopuler">
                                    Terpopuler
                                </RadioCategory>
                                <RadioCategory value="terbaru">
                                    Terbaru
                                </RadioCategory>
                                <RadioCategory value="terlaris">
                                    Terlaris
                                </RadioCategory>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="w-full max-w-5xl grid grid-cols-6 min-w-5xl gap-2">
                        {produks.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                </section>

                <div></div>
            </FrontpageLayout>
        </>
    );
}
