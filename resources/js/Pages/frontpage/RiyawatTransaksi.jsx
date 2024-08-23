import Image from "@/Components/Image";
import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Link, router } from "@inertiajs/react";
import { Box, Breadcrumbs, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { TfiTime } from "react-icons/tfi";
import { LiaTimesCircle } from "react-icons/lia";
import { IoIosCheckmark } from "react-icons/io";
import Harga from "@/Components/Harga";
import ChipMenggunguPembayaran from "@/Components/ChipMenggunguPembayaran";
import ChipBerhasil from "@/Components/ChipBerhasil";
import ChipGagal from "@/Components/ChipGagal";
import Button from "@/Components/Button";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: 40,
        width: "100%",
        backgroundColor: "#184C80",
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: "none",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: "#141414",
        "&.Mui-selected": {
            color: "#184C80",
        },
        "&.Mui-focusVisible": {
            backgroundColor: "#30c1d1",
        },
    })
);

const RiwayatTransaksi = ({ auth, base_url, cartitem, orders }) => {
    const [value, setValue] = React.useState(0);
    const [filter, setFilter] = useState("all");
    const [filteredOrders, setFilteredOrders] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            setFilter("all");
        } else if (newValue === 1) {
            setFilter("pending");
        } else if (newValue === 2) {
            setFilter("expired");
        } else if (newValue === 3) {
            setFilter("paid");
        }
    };

    useEffect(() => {
        const filterOrders = () => {
            let filtered = orders;
            if (filter === "all") {
                filtered = filtered.sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );
                setFilteredOrders(filtered);
            } else {
                filtered = orders.filter((order) => order.status === filter);
                filtered = filtered.sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );
                setFilteredOrders(filtered);
            }
        };
        filterOrders();
    }, [filter, orders]);
    return (
        <FrontpageLayout user={auth} cart={cartitem} base_url={base_url}>
            <div className="container max-w-5xl mt-9">
                <Breadcrumbs separator={<MdOutlineNavigateNext />}>
                    <Link href="/">Home</Link>
                    <Link>Riwayat Transaksi</Link>
                </Breadcrumbs>
                <h1 className="mt-4 font-bold text-secondary text-xl">
                    Riwayat Transaksi
                </h1>
                <div className="flex flex-row w-full gap-x-3 mt-3">
                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <StyledTabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <StyledTab
                                    label="Semua Transaksi"
                                    {...a11yProps(0)}
                                />
                                <StyledTab
                                    label="Menunggu Pembayaran"
                                    {...a11yProps(1)}
                                />
                                <StyledTab label="Gagal" {...a11yProps(2)} />
                                <StyledTab label="Sukses" {...a11yProps(3)} />
                            </StyledTabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <div className="flex flex-col gap-y-4">
                                {filteredOrders != null ? (
                                    filteredOrders.map((order, index) => (
                                        <div
                                            className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-col items-center"
                                            key={index}
                                        >
                                            <ul className="flex w-full justify-between">
                                                <li>{order.invoice}</li>

                                                <li>
                                                    {order.status ===
                                                        "pending" && (
                                                        <ChipMenggunguPembayaran />
                                                    )}
                                                    {order.status ===
                                                        "paid" && (
                                                        <ChipBerhasil />
                                                    )}
                                                    {order.status ===
                                                        "expired" && (
                                                        <ChipGagal />
                                                    )}
                                                </li>
                                            </ul>
                                            <ul className="flex w-full my-3 gap-y-3 flex-col">
                                                {order.order_items.map(
                                                    (order_item, itemIndex) => (
                                                        <li
                                                            className="flex w-full justify-between"
                                                            key={itemIndex}
                                                        >
                                                            <div className="flex gap-x-3">
                                                                <div>
                                                                    <Image
                                                                        src={`${base_url}/storage/${order_item.paketsoal.link_cover}`}
                                                                        className="w-16 h-16 rounded-md"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    {/* Here you can display more information about the order item if needed */}
                                                                    <p>
                                                                        {
                                                                            order_item
                                                                                .paketsoal
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Harga
                                                                    nilai={
                                                                        order_item
                                                                            .paketsoal
                                                                            .price
                                                                    }
                                                                />
                                                            </div>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                            <ul className="flex w-full justify-end">
                                                <li>
                                                    <div className="flex h-fit w-full flex-row  justify-center items-center gap-x-3">
                                                        <p className=" text-center text-[#767676]">
                                                            Total Pesanan:
                                                        </p>
                                                        <p className=" text-center">
                                                            <Harga
                                                                nilai={
                                                                    order.gross_amount
                                                                }
                                                            ></Harga>
                                                        </p>
                                                    </div>
                                                    <div className="mt-4">
                                                        {order.status ===
                                                            "pending" && (
                                                            <Button
                                                                title="Bayar"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    router.get(
                                                                        `/pembayaran/${order.id}`
                                                                    );
                                                                    console.log(
                                                                        "test"
                                                                    );
                                                                }}
                                                            />
                                                        )}
                                                        {order.status ===
                                                            "paid" && (
                                                            <Button title="Lihat" />
                                                        )}
                                                        {order.status ===
                                                            "expired" && (
                                                            <Button title="Bayar Ulang" />
                                                        )}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    ))
                                ) : (
                                    <p>Kamu Belum membuat pesanan</p>
                                )}
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <div className="flex flex-col gap-y-4">
                                {filteredOrders != null ? (
                                    filteredOrders.map((order, index) => (
                                        <div
                                            className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-col items-center"
                                            key={index}
                                        >
                                            <ul className="flex w-full justify-between">
                                                <li>{order.invoice}</li>

                                                <li>
                                                    {order.status ===
                                                        "pending" && (
                                                        <ChipMenggunguPembayaran />
                                                    )}
                                                    {order.status ===
                                                        "paid" && (
                                                        <ChipBerhasil />
                                                    )}
                                                    {order.status ===
                                                        "expired" && (
                                                        <ChipGagal />
                                                    )}
                                                </li>
                                            </ul>
                                            <ul className="flex w-full my-3 gap-y-3 flex-col">
                                                {order.order_items.map(
                                                    (order_item, itemIndex) => (
                                                        <li
                                                            className="flex w-full justify-between"
                                                            key={itemIndex}
                                                        >
                                                            <div className="flex gap-x-3">
                                                                <div>
                                                                    <Image
                                                                        src={`${base_url}/storage/${order_item.paketsoal.link_cover}`}
                                                                        className="w-16 h-16 rounded-md"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    {/* Here you can display more information about the order item if needed */}
                                                                    <p>
                                                                        {
                                                                            order_item
                                                                                .paketsoal
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Harga
                                                                    nilai={
                                                                        order_item
                                                                            .paketsoal
                                                                            .price
                                                                    }
                                                                />
                                                            </div>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                            <ul className="flex w-full justify-end">
                                                <li>
                                                    <div className="flex h-fit w-full flex-row  justify-center items-center gap-x-3">
                                                        <p className=" text-center text-[#767676]">
                                                            Total Pesanan:
                                                        </p>
                                                        <p className=" text-center">
                                                            <Harga
                                                                nilai={
                                                                    order.gross_amount
                                                                }
                                                            ></Harga>
                                                        </p>
                                                    </div>
                                                    <div className="mt-4">
                                                        {order.status ===
                                                            "pending" && (
                                                            <Button title="Bayar" />
                                                        )}
                                                        {order.status ===
                                                            "paid" && (
                                                            <Button title="Lihat" />
                                                        )}
                                                        {order.status ===
                                                            "expired" && (
                                                            <Button title="Bayar Ulang" />
                                                        )}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    ))
                                ) : (
                                    <p>Kamu Belum membuat pesanan</p>
                                )}
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <div className="flex flex-col gap-y-4">
                                {filteredOrders != null ? (
                                    filteredOrders.map((order, index) => (
                                        <div
                                            className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-col items-center"
                                            key={index}
                                        >
                                            <ul className="flex w-full justify-between">
                                                <li>{order.invoice}</li>

                                                <li>
                                                    {order.status ===
                                                        "pending" && (
                                                        <ChipMenggunguPembayaran />
                                                    )}
                                                    {order.status ===
                                                        "paid" && (
                                                        <ChipBerhasil />
                                                    )}
                                                    {order.status ===
                                                        "expired" && (
                                                        <ChipGagal />
                                                    )}
                                                </li>
                                            </ul>
                                            <ul className="flex w-full my-3 gap-y-3 flex-col">
                                                {order.order_items.map(
                                                    (order_item, itemIndex) => (
                                                        <li
                                                            className="flex w-full justify-between"
                                                            key={itemIndex}
                                                        >
                                                            <div className="flex gap-x-3">
                                                                <div>
                                                                    <Image
                                                                        src={`${base_url}/storage/${order_item.paketsoal.link_cover}`}
                                                                        className="w-16 h-16 rounded-md"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    {/* Here you can display more information about the order item if needed */}
                                                                    <p>
                                                                        {
                                                                            order_item
                                                                                .paketsoal
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Harga
                                                                    nilai={
                                                                        order_item
                                                                            .paketsoal
                                                                            .price
                                                                    }
                                                                />
                                                            </div>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                            <ul className="flex w-full justify-end">
                                                <li>
                                                    <div className="flex h-fit w-full flex-row  justify-center items-center gap-x-3">
                                                        <p className=" text-center text-[#767676]">
                                                            Total Pesanan:
                                                        </p>
                                                        <p className=" text-center">
                                                            <Harga
                                                                nilai={
                                                                    order.gross_amount
                                                                }
                                                            ></Harga>
                                                        </p>
                                                    </div>
                                                    <div className="mt-4">
                                                        {order.status ===
                                                            "pending" && (
                                                            <Button title="Bayar" />
                                                        )}
                                                        {order.status ===
                                                            "paid" && (
                                                            <Button title="Lihat" />
                                                        )}
                                                        {order.status ===
                                                            "expired" && (
                                                            <Button title="Bayar Ulang" />
                                                        )}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    ))
                                ) : (
                                    <p>Kamu Belum membuat pesanan</p>
                                )}
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <div className="flex flex-col gap-y-4">
                                {filteredOrders != null ? (
                                    filteredOrders.map((order, index) => (
                                        <div
                                            className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-col items-center"
                                            key={index}
                                        >
                                            <ul className="flex w-full justify-between">
                                                <li>{order.invoice}</li>

                                                <li>
                                                    {order.status ===
                                                        "pending" && (
                                                        <ChipMenggunguPembayaran />
                                                    )}
                                                    {order.status ===
                                                        "paid" && (
                                                        <ChipBerhasil />
                                                    )}
                                                    {order.status ===
                                                        "expired" && (
                                                        <ChipGagal />
                                                    )}
                                                </li>
                                            </ul>
                                            <ul className="flex w-full my-3 gap-y-3 flex-col">
                                                {order.order_items.map(
                                                    (order_item, itemIndex) => (
                                                        <li
                                                            className="flex w-full justify-between"
                                                            key={itemIndex}
                                                        >
                                                            <div className="flex gap-x-3">
                                                                <div>
                                                                    <Image
                                                                        src={`${base_url}/storage/${order_item.paketsoal.link_cover}`}
                                                                        className="w-16 h-16 rounded-md"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    {/* Here you can display more information about the order item if needed */}
                                                                    <p>
                                                                        {
                                                                            order_item
                                                                                .paketsoal
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Harga
                                                                    nilai={
                                                                        order_item
                                                                            .paketsoal
                                                                            .price
                                                                    }
                                                                />
                                                            </div>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                            <ul className="flex w-full justify-end">
                                                <li>
                                                    <div className="flex h-fit w-full flex-row  justify-center items-center gap-x-3">
                                                        <p className=" text-center text-[#767676]">
                                                            Total Pesanan:
                                                        </p>
                                                        <p className=" text-center">
                                                            <Harga
                                                                nilai={
                                                                    order.gross_amount
                                                                }
                                                            ></Harga>
                                                        </p>
                                                    </div>
                                                    <div className="mt-4">
                                                        {order.status ===
                                                            "pending" && (
                                                            <Button title="Bayar" />
                                                        )}
                                                        {order.status ===
                                                            "paid" && (
                                                            <Button title="Lihat" />
                                                        )}
                                                        {order.status ===
                                                            "expired" && (
                                                            <Button title="Bayar Ulang" />
                                                        )}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    ))
                                ) : (
                                    <p>Kamu Belum membuat pesanan</p>
                                )}
                            </div>
                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
        </FrontpageLayout>
    );
};

export default RiwayatTransaksi;
