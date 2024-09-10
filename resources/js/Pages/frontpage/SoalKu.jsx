import Button from "@/Components/Button";
import CS from "@/Components/CS";
import Image from "@/Components/Image";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Link, router } from "@inertiajs/react";
import { Breadcrumbs } from "@mui/material";

import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const SoalKu = ({ auth, base_url, cartitem, paketsoaluser }) => {
    return (
        <FrontpageLayout user={auth} cart={cartitem} base_url={base_url}>
            <div className="container max-w-5xl mt-9">
                <Breadcrumbs separator={<MdOutlineNavigateNext />}>
                    <Link href="/">Home</Link>
                    <Link>Soalku</Link>
                </Breadcrumbs>
                <h1 className="mt-4 font-bold text-secondary text-xl">
                    Soal Ku
                </h1>
                <div className="flex flex-col w-full gap-x-3 gap-y-3 mt-3">
                    {paketsoaluser.length > 0 ? (
                        paketsoaluser.map((soal, index) => (
                            <div className="flex w-full bg-white p-4 rounded-md">
                                <div className="flex w-full gap-x-4">
                                    <Image
                                        className="h-24 w-24 rounded-md"
                                        src={`${base_url}/storage/${soal.paketsoal.link_cover}`}
                                    ></Image>
                                    <div>
                                        <p className="font-bold">
                                            {soal.paketsoal.name}
                                        </p>
                                        <p className=" text-gray-500">
                                            soal+pembahasan
                                        </p>
                                    </div>
                                </div>
                                <ul className="flex w-full justify-end mr-24">
                                    {/* <li>Status</li> */}
                                    <li className="place-content-end content-center">
                                        <Button
                                            title="Lihat"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                router.get("/examdashboard", {
                                                    paketsoal_id:
                                                        soal.paketsoal_id,
                                                });
                                            }}
                                        ></Button>
                                    </li>
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>Kamu belum ada paket soal yang sudah dibeli</p>
                    )}
                </div>
                <CS />
            </div>
        </FrontpageLayout>
    );
};

export default SoalKu;
