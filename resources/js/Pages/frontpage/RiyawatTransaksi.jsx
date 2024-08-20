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

const RiwayatTransaksi = ({ auth, base_url, cartitem }) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                                <div className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-row items-center">
                                    <div className="flex flex-1 flex-row gap-x-7 w-full h-full items-center">
                                        <div className="h-full w-fit">
                                            <p className="text-center">
                                                17-18-2024
                                            </p>
                                            <Image
                                                src="https://raw.githubusercontent.com/rifaulkhairi/edu-test-market-public-assets/main/4.png"
                                                className="h-28 w-28 rounded-lg"
                                            />
                                        </div>
                                        <div className="flex h-full flex-col justify-center">
                                            <p className="text-secondary font-semibold">
                                                Soal TryOut TKD BUMN
                                            </p>
                                            <p className="text-[#767676]">
                                                Soal + Pembahasan
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] flex-row gap-x-7 h-full">
                                        <div className="flex h-fit w-full flex-col justify-center items-center">
                                            <p className="text-secondary font-semibold text-center">
                                                Status
                                            </p>

                                            <p className="text-[#767676] bg-[#FFDE93]  rounded-full px-3 py-1 text-center flex w-fit gap-x-1 justify-center items-center">
                                                <span>
                                                    <TfiTime />
                                                </span>
                                                Menunggu Pembayaran
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] w-full h-full justify-end">
                                        <button className="bg-secondary text-white px-3 py-2 rounded-md">
                                            Bayar
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-row items-center">
                                    <div className="flex flex-1 flex-row gap-x-7 w-full h-full items-center">
                                        <div className="h-full w-fit">
                                            <p className="text-center">
                                                17-18-2024
                                            </p>
                                            <Image
                                                src="https://raw.githubusercontent.com/rifaulkhairi/edu-test-market-public-assets/main/4.png"
                                                className="h-28 w-28 rounded-lg"
                                            />
                                        </div>
                                        <div className="flex h-full flex-col justify-center">
                                            <p className="text-secondary font-semibold">
                                                Soal TryOut TKD BUMN
                                            </p>
                                            <p className="text-[#767676]">
                                                Soal + Pembahasan
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] flex-row gap-x-7 h-full">
                                        <div className="flex h-fit w-full flex-col justify-center items-center">
                                            <p className="text-secondary font-semibold text-center">
                                                Status
                                            </p>

                                            <div className="text-[#767676] bg-[#FFC5C5]  rounded-full px-3 py-1 text-center flex gap-x-1 justify-center items-center">
                                                <span>
                                                    <TfiTime />
                                                </span>
                                                Gagal
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] w-full h-full justify-end">
                                        <button className="bg-secondary text-white px-3 py-2 rounded-md">
                                            Bayar Ulang
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-row items-center">
                                    <div className="flex flex-1 flex-row gap-x-7 w-full h-full items-center">
                                        <div className="h-full w-fit">
                                            <p className="text-center">
                                                17-18-2024
                                            </p>
                                            <Image
                                                src="https://raw.githubusercontent.com/rifaulkhairi/edu-test-market-public-assets/main/4.png"
                                                className="h-28 w-28 rounded-lg"
                                            />
                                        </div>
                                        <div className="flex h-full flex-col justify-center">
                                            <p className="text-secondary font-semibold">
                                                Soal TryOut TKD BUMN
                                            </p>
                                            <p className="text-[#767676]">
                                                Soal + Pembahasan
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] flex-row gap-x-7 h-full">
                                        <div className="flex h-fit w-full flex-col justify-center items-center">
                                            <p className="text-secondary font-semibold text-center">
                                                Status
                                            </p>

                                            <div className="text-[#767676] bg-[#C5FFD5]  rounded-full px-3 py-1 text-center flex gap-x-1 justify-center items-center">
                                                <span>
                                                    <TfiTime />
                                                </span>
                                                Berhasil
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] w-full h-full justify-end">
                                        <button className="bg-secondary text-white px-3 py-2 rounded-md">
                                            Lihat
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <div className="flex flex-col gap-y-4">
                                <div className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-row items-center">
                                    <div className="flex flex-1 flex-row gap-x-7 w-full h-full items-center">
                                        <div className="h-full w-fit">
                                            <p className="text-center">
                                                17-18-2024
                                            </p>
                                            <Image
                                                src="https://raw.githubusercontent.com/rifaulkhairi/edu-test-market-public-assets/main/4.png"
                                                className="h-28 w-28 rounded-lg"
                                            />
                                        </div>
                                        <div className="flex h-full flex-col justify-center">
                                            <p className="text-secondary font-semibold">
                                                Soal TryOut TKD BUMN
                                            </p>
                                            <p className="text-[#767676]">
                                                Soal + Pembahasan
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] flex-row gap-x-7 h-full">
                                        <div className="flex h-fit w-full flex-col justify-center items-center">
                                            <p className="text-secondary font-semibold text-center">
                                                Status
                                            </p>

                                            <p className="text-[#767676] bg-[#FFDE93]  rounded-full px-3 py-1 text-center flex w-fit gap-x-1 justify-center items-center">
                                                <span>
                                                    <TfiTime />
                                                </span>
                                                Menunggu Pembayaran
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] w-full h-full justify-end">
                                        <button className="bg-secondary text-white px-3 py-2 rounded-md">
                                            Bayar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <div className="flex flex-col gap-y-4">
                                <div className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-row items-center">
                                    <div className="flex flex-1 flex-row gap-x-7 w-full h-full items-center">
                                        <div className="h-full w-fit">
                                            <p className="text-center">
                                                17-18-2024
                                            </p>
                                            <Image
                                                src="https://raw.githubusercontent.com/rifaulkhairi/edu-test-market-public-assets/main/4.png"
                                                className="h-28 w-28 rounded-lg"
                                            />
                                        </div>
                                        <div className="flex h-full flex-col justify-center">
                                            <p className="text-secondary font-semibold">
                                                Soal TryOut TKD BUMN
                                            </p>
                                            <p className="text-[#767676]">
                                                Soal + Pembahasan
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] flex-row gap-x-7 h-full">
                                        <div className="flex h-fit w-full flex-col justify-center items-center">
                                            <p className="text-secondary font-semibold text-center">
                                                Status
                                            </p>

                                            <div className="text-[#767676] bg-[#FFC5C5]  rounded-full px-3 py-1 text-center flex gap-x-1 justify-center items-center">
                                                <span>
                                                    <TfiTime />
                                                </span>
                                                Gagal
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] w-full h-full justify-end">
                                        <button className="bg-secondary text-white px-3 py-2 rounded-md">
                                            Bayar Ulang
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <div className="flex flex-col gap-y-4">
                                <div className="w-full bg-white rounded-md gap-x-8 shadow-md p-4 flex flex-row items-center">
                                    <div className="flex flex-1 flex-row gap-x-7 w-full h-full items-center">
                                        <div className="h-full w-fit">
                                            <p className="text-center">
                                                17-18-2024
                                            </p>
                                            <Image
                                                src="https://raw.githubusercontent.com/rifaulkhairi/edu-test-market-public-assets/main/4.png"
                                                className="h-28 w-28 rounded-lg"
                                            />
                                        </div>
                                        <div className="flex h-full flex-col justify-center">
                                            <p className="text-secondary font-semibold">
                                                Soal TryOut TKD BUMN
                                            </p>
                                            <p className="text-[#767676]">
                                                Soal + Pembahasan
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] flex-row gap-x-7 h-full">
                                        <div className="flex h-fit w-full flex-col justify-center items-center">
                                            <p className="text-secondary font-semibold text-center">
                                                Status
                                            </p>

                                            <div className="text-[#767676] bg-[#C5FFD5]  rounded-full px-3 py-1 text-center flex gap-x-1 justify-center items-center">
                                                <span>
                                                    <TfiTime />
                                                </span>
                                                Berhasil
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-[0.5] w-full h-full justify-end">
                                        <button className="bg-secondary text-white px-3 py-2 rounded-md">
                                            Lihat
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
        </FrontpageLayout>
    );
};

export default RiwayatTransaksi;
