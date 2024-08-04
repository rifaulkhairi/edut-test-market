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
    {
        name: "soal",
        options: {
            customBodyRender: (value) => (
                <div className="flex">
                    <div dangerouslySetInnerHTML={{ __html: value }}></div>
                </div>
            ),
        },
    },
    { name: "nama_paket_soal", label: "Paket Soal " },
    { name: "nama_tipe_test", label: "Tipe Test " },
    {
        name: "id",
        label: "Action",
        options: {
            customBodyRender: (value) => (
                <div className="flex flex-row">
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            // router.get(`/admin/viewpaketsoal/${value}`);
                        }}
                    >
                        <MdOutlineOpenInNew className="text-[#1972d6]" />
                    </IconButton>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            // router.get(`/admin/edittipetest/${value}`);
                        }}
                    >
                        <TbEdit className="text-md text-[#1972d6]" />
                    </IconButton>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            // router.post(`/admin/tipetest/delete/${value}`, {
                            //     _method: "delete",
                            // });
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

const ListSoal = ({ soal }) => {
    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tab={1} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header></Header>
                <div className="space"></div>
                <div className="flex w-full gap-y-3 flex-col">
                    <div className="flex w-full justify-end">
                        <Button
                            variant="contained"
                            sx={{ textTransform: "capitalize" }}
                            onClick={(e) => {
                                e.preventDefault();
                                router.visit("/admin/addsoalpg");
                            }}
                        >
                            Tambah
                        </Button>
                    </div>
                    <MUIDataTable
                        title={"Daftar Soal"}
                        data={soal}
                        columns={columns}
                        options={options}
                    ></MUIDataTable>
                </div>
            </div>
        </section>
    );
};

export default ListSoal;
