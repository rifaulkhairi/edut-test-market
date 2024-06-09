import Hero from "@/Components/Hero";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import cpnsIMG from "../../../../public/images/30.png";
import ppgIMG from "../../../../public/images/2.png";
import utbkIMG from "../../../../public/images/3.png";
import bumnIMG from "../../../../public/images/4.png";

import { Link, Head } from "@inertiajs/react";
import { Button, Select, Option, Card } from "@material-tailwind/react";
import { TiDocumentText } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import Dropdown from "@/Components/Dropdown";
import ProductCard from "@/Components/ProductCard";

// const products = [
//     {
//         id: 1,
//         title: "Soal Tryout CPNS 2024",
//         harga: 500000,
//         diskon: 0.4,
//         image: cpnsIMG,
//         description:
//             "Description for Related Product 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
//         rating: 4,
//         terjual: 0,
//     },
//     {
//         id: 1,
//         title: "Soal Tryout CPNS 2025",
//         harga: 500000,
//         diskon: 0.4,
//         image: cpnsIMG,
//         description:
//             "Description for Related Product 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
//         rating: 4,
//         terjual: 0,
//     },
//     {
//         id: 3,
//         title: "Soal Tryout CPNS 2025",
//         harga: 500000,
//         diskon: 0.4,
//         image: cpnsIMG,
//         description:
//             "Description for Related Product 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
//         rating: 4,
//         terjual: 0,
//     },
//     {
//         id: 3,
//         title: "Paket soal Tryout ppg matematika 2024",
//         harga: 500000,
//         diskon: 0.4,
//         image: ppgIMG,
//         description:
//             "Description for Related Product 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, natus totam facere possimus at molestiae, suscipit sunt voluptas unde laudantium fuga ad sint omnis, ipsa voluptatum quis officiis. Expedita vero impedit at molestias officia! Atque dicta earum dolor perspiciatis debitis pariatur possimus dolorem tempore aspernatur, maiores obcaecati. Dicta perspiciatis ipsa eius distinctio et nam rerum fugiat. Cum voluptate ducimus, quisquam numquam deserunt tempore autem similique ab illo aliquid iure excepturi recusandae quos officiis! Aliquid natus laboriosam, vitae itaque, voluptatem ex aspernatur, hic delectus dolorem tenetur minima provident debitis! Totam, explicabo. Vel officiis tenetur nulla tempora porro, distinctio et id.",
//         rating: 4,
//         terjual: 0,
//     },
// ];

export default function Frontpage({ auth, produks }) {
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
                            <TiDocumentText className="h-10 w-10 text-secondary"></TiDocumentText>
                            <p className="capitalize font-semibold text-xs text-secondary">
                                Soal ku
                            </p>
                        </Button>
                        <Button
                            className="flex  h-20  border-2 flex-col gap-y-2"
                            variant="text"
                        >
                            <CiHeart className="h-8 w-8 text-secondary"></CiHeart>
                            <p className="capitalize font-semibold text-xs text-center text-secondary">
                                Favorit
                            </p>
                        </Button>
                        <Button
                            className="flex  h-20 border-secon border-2 flex-col gap-y-2"
                            variant="text"
                        >
                            <GrTransaction className="h-8 w-8 text-secondary"></GrTransaction>
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
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    className="peer sr-only"
                                    name="urutkan"
                                ></input>
                                <div className="flex w-28 bg-white px-5 py-1 rounded-sm text-secondary text-sm peer-checked:text-white peer-checked:bg-secondary justify-center">
                                    Terpupuler
                                </div>
                            </label>
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    className="peer sr-only"
                                    name="urutkan"
                                ></input>
                                <div className="flex w-28 bg-white px-5 py-1 rounded-sm text-secondary text-sm peer-checked:text-white peer-checked:bg-secondary justify-center">
                                    Terbaru
                                </div>
                            </label>
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    className="peer sr-only"
                                    name="urutkan"
                                ></input>
                                <div className="flex w-28 bg-white px-5 py-1 rounded-sm text-secondary text-sm peer-checked:text-white peer-checked:bg-secondary justify-center">
                                    Terlaris
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-full max-w-5xl grid grid-cols-6 min-w-5xl gap-2">
                        {produks.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                </section>

                <div></div>

                {/* <div>Product</div>
                <Link href={route("detailproduct")}>detail</Link> */}
            </FrontpageLayout>
        </>
    );
}
