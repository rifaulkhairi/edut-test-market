import Sidebar from "@/Components/admin/Sidebar";
import Header from "@/Components/admin/Header";
import React, { useState } from "react";
import { Button, Chip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";
import Harga from "@/Components/Harga";

const ListOrder = ({ orders, flash }) => {
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
            name: "invoice",
            label: "No.Invoice",
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
            name: "created_at",
            label: "Tanggal Pesan",
            options: {
                customBodyRender: (value) => (
                    <div className="flex">
                        {new Date(value).toLocaleString()}
                    </div>
                ),
            },
        },
        { name: "email_user", label: "Email User " },
        {
            name: "gross_amount",
            label: "Total",
            options: {
                customBodyRender: (value) => (
                    <div className="flex">
                        <Harga nilai={value} />
                    </div>
                ),
            },
        },

        {
            name: "status",
            label: "Status",
            options: {
                customBodyRender: (value) => (
                    <div className="flex">
                        <Chip label={value} color={`${getColor(value)}`}></Chip>
                    </div>
                ),
            },
        },
    ];

    const getColor = (status) => {
        switch (status) {
            case "paid":
                return "success";
            case "pending":
                return "warning";
            case "expired":
                return "error";
            default:
                return "default"; // Optional: Return a default color if status is unknown
        }
    };

    const options = {
        filterType: "multiselect",
        selectableRows: false,
    };
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
                <Sidebar tab={2} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header></Header>
                <div className="space"></div>
                <div className="flex w-full gap-y-3 flex-col">
                    <div className="flex w-full justify-end">
                        {/* <Button
                            variant="contained"
                            sx={{ textTransform: "capitalize" }}
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            Tambah
                        </Button> */}
                    </div>
                    <MUIDataTable
                        title={"Daftar Order"}
                        data={orders}
                        columns={columns}
                        options={options}
                    ></MUIDataTable>
                </div>
            </div>
        </section>
    );
};

export default ListOrder;
