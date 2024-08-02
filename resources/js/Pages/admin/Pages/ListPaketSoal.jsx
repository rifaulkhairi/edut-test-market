import Sidebar from "@/Components/admin/Sidebar";
import Header from "@/Components/admin/Header";
import React, { useState } from "react";
import { Button, InputLabel, TextField, IconButton } from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import MUIDataTable from "mui-datatables";
import { Link, router } from "@inertiajs/react";
import { MdOutlineOpenInNew } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const columns = [
    {
        name: "No",
        label: "No",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta) => {
                return tableMeta.rowIndex + 1; // Adjust index to be 1-based
            },
        },
    },
    { name: "name" },
    { name: "price", label: "Price" },

    {
        name: "id",
        label: "Action",
        options: {
            customBodyRender: (value) => (
                <div className="flex flex-row">
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            router.get(`/admin/viewpaketsoal/${value}`);
                        }}
                    >
                        <MdOutlineOpenInNew className="text-[#1972d6]" />
                    </IconButton>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            router.get(`/admin/editpaketsoal/${value}`);
                        }}
                    >
                        <TbEdit className="text-md text-[#1972d6]" />
                    </IconButton>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            router.post(`/admin/paketsoal/${value}/delete`, {
                                _method: "delete",
                            });
                        }}
                    >
                        <MdDeleteForever className="text-md text-red-500" />
                    </IconButton>
                </div>
            ),
            filter: false,
            sort: false,
        },
    },
];

const options = {
    filterType: "multiselect",
    selectableRows: false,
};

const AddPaketSoal = ({ daftarpaketsoal }) => {
    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tab={1} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header></Header>
                <div className="space"></div>
                <div className="flex w-full gap-y-3 flex-col">
                    <MUIDataTable
                        title={"Daftar Paket Soal"}
                        data={daftarpaketsoal}
                        columns={columns}
                        options={options}
                    ></MUIDataTable>
                </div>
            </div>
        </section>
    );
};

export default AddPaketSoal;
