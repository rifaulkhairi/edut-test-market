import CS from "@/Components/CS";
import ProductCard from "@/Components/ProductCard";
import FrontpageLayout from "@/Layouts/FrontpageLayout";

import React from "react";

const SearchResult = ({ auth, base_url, cart, products, searchkey }) => {
    return (
        <FrontpageLayout user={auth} cart={cart} base_url={base_url}>
            <div className="container max-w-5xl mt-9">
                {/* <Breadcrumbs separator={<MdOutlineNavigateNext />}>
                    <Link href="/">Home</Link>
                    <Link>Riwayat Transaksi</Link>
                </Breadcrumbs> */}
                <h1 className="mt-4 font-bold text-secondary text-xl">
                    {`Menampilkan Hasil Pencarian untuk "${searchkey}"`}
                </h1>
                <div className="flex flex-col w-full gap-x-3 gap-y-3 mt-3">
                    {products.length > 0 ? (
                        <div className="w-full max-w-5xl flex flex-wrap min-w-5xl gap-2">
                            {products.map((product) => (
                                <ProductCard
                                    base_url={base_url}
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>Tidak Ditemukan</p>
                    )}
                </div>
                <CS />
            </div>
        </FrontpageLayout>
    );
};

export default SearchResult;
