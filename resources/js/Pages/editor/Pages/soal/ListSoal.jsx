import Header from "@/Components/author/Header";
import Sidebar from "@/Components/author/Sidebar";
import React, { useState } from "react";
import { Button, InputLabel, TextField, IconButton } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { Link, router } from "@inertiajs/react";
import { MdOutlineOpenInNew } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";

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
        name: "question",
        options: {
            customBodyRender: (value) => (
                <div className="flex">
                    <div
                        dangerouslySetInnerHTML={{ __html: value }}
                        className="line-clamp-1"
                    ></div>
                </div>
            ),
        },
    },
    {
        name: "paketsoal",
        label: "Paket Soal",
        options: {
            customBodyRender: (value) => (
                <div className="flex">{value.name}</div>
            ),
        },
    },
    { name: "tipe_soal", label: "Tipe Soal " },
    {
        name: "tipetest",
        label: "Tipe Test ",
        options: {
            customBodyRender: (value) => (
                <div className="flex">{value.name}</div>
            ),
        },
    },
    {
        name: "author",
        label: "Author",
        options: {
            customBodyRender: (value) => (
                <div className="flex">{value.name}</div>
            ),
        },
    },

    {
        name: "id",
        label: "Action",
        options: {
            customBodyRender: (value) => (
                <div className="flex flex-row">
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            router.get(`/editor/detailsoal/${value}`);
                        }}
                    >
                        <MdOutlineOpenInNew className="" />
                    </IconButton>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            router.get(`/editor/editsoal/${value}`);
                        }}
                    >
                        <TbEdit className="text-md " />
                    </IconButton>
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            router.post(`/editor/deletesoal/${value}`, {
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

const ListSoal = ({ soal, flash, question }) => {
    useEffect(() => {
        if (flash.message != null) {
            if (flash.message.success) {
                toast.success(flash.message.success);
            } else if (flash.message.error) {
                toast.error(flash.message.error);
            }
        }
    }, [flash]);
    return (
        <section className="main flex">
            <Toaster position="top-right" richColors />

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
                                router.visit("/editor/addsoalpg");
                            }}
                        >
                            Tambah
                        </Button>
                    </div>
                    <MUIDataTable
                        title={"Daftar Soal"}
                        data={question}
                        columns={columns}
                        options={options}
                    ></MUIDataTable>
                </div>
            </div>
        </section>
    );
};

export default ListSoal;
