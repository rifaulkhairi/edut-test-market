import Header from "@/Components/admin/Header";
import Sidebar from "@/Components/admin/Sidebar";
import { Link } from "@inertiajs/react";
import { Breadcrumbs } from "@mui/material";
import { MdOutlineNavigateNext } from "react-icons/md";

const DetailSoal = ({ soal }) => {
    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tab={1} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header></Header>
                <div className="space"></div>
                <div className="flex w-full gap-y-3 flex-col">
                    <Breadcrumbs separator={<MdOutlineNavigateNext />}>
                        <Link className="text-blue-500">Daftar Soal</Link>
                        <Link>Detail Soal</Link>
                    </Breadcrumbs>
                    <div className="flex gap-3">
                        <div className="flex w-full flex-col gap-y-3">
                            <div className="contsoal flex-1 p-10 rounded-xl bg-white shadow-blue-500/10 shadow-md">
                                <span className="font-bold text-secondary">
                                    Soal
                                </span>
                                <h5 className="soal my-5">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: soal.soal,
                                        }}
                                    ></div>
                                </h5>
                                <div className="pilihan h-auto">
                                    <ul className="space-y-2">
                                        {soal.choices.map((item, index) => (
                                            <li
                                                key={index}
                                                className="h-auto w-full py-3 px-6 rounded-2xl cursor-pointer bg-blue-gray-100"
                                            >
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.content,
                                                    }}
                                                ></div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="contsoal flex-1 p-10 rounded-xl bg-white shadow-blue-500/10 shadow-md">
                                <h5 className="soal my-5">
                                    <span className="font-bold text-secondary">
                                        Pembahasan
                                    </span>
                                    <div
                                        className="mt-3"
                                        dangerouslySetInnerHTML={{
                                            __html: soal.pembahasan,
                                        }}
                                    ></div>
                                </h5>
                                <div>
                                    <span className="px-3 bg-green-600 py-2 rounded-md text-white">
                                        {`Jawaban ${soal.jawaban_betul}`}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 rounded-xl bg-white shadow-blue-500/10 shadow-md max-w-72">
                            <h5 className="soal my-5 text-blue-500 font-bold">
                                Informasi
                            </h5>
                            <div className="pilihan h-auto">
                                <ul className="grid grid-rows-3 grid-cols-2 gap-y-1 gap-x-2 items-start content-center">
                                    <li className="h-auto w-full  px-2 rounded-2xl">
                                        Paket Soal
                                    </li>
                                    <li className="h-auto w-full px-2 rounded-2xl">
                                        {soal.nama_paket_soal}
                                    </li>
                                    <li className="h-auto w-full px-2 rounded-2xl">
                                        Tipe Test
                                    </li>
                                    <li className="h-auto w-full px-2 rounded-2xl">
                                        {soal.nama_tipe_test}
                                    </li>
                                    <li className="h-auto w-full px-2 rounded-2xl">
                                        Author
                                    </li>
                                    <li className="h-auto w-full px-2 rounded-2xl">
                                        <Link
                                            href="#"
                                            className="text-blue-500"
                                        >
                                            Rifa Ulkhairi
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailSoal;
