import React from "react";
import Sidebar from "@/Components/admin/Sidebar";
import logo from "../../../../public/images/logo-edu-test-market.svg";
import Header from "@/Components/admin/Header";
import { Breadcrumbs } from "@mui/material";
import { Link } from "@inertiajs/react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    {
        name: "15 jun",
        ppg: 400,
        utbk: 240,
        bumn: 440,
        skd: 340,
    },
    {
        name: "16 jun",
        ppg: 300,
        utbk: 139,
    },
    {
        name: "17 jun",
        ppg: 200,
        utbk: 980,
    },
    {
        name: "18 jun",
        ppg: 278,
        utbk: 390,
    },
    {
        name: "19 jun",
        ppg: 189,
        utbk: 480,
    },
    {
        name: "20 jun",
        ppg: 239,
        utbk: 380,
    },
    {
        name: "21 jun",
        ppg: 349,
        utbk: 430,
    },
];

const Dashboard = ({ auth }) => {
    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tab={0} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header></Header>
                <div className="space"></div>
                <div>
                    <div className="flex w-full  h-full gap-y-2 flex-col">
                        <h1 className="font-semibold text-xl">Dashboard</h1>
                        <p className="text-xs text-gray-700 mb-4">
                            {`Welcome back, ${auth.user.name}! We've missed you. 🥰👋`}
                        </p>
                        <hr />
                        <div className="mt-6">
                            <div className="flex gap-5">
                                <div className="flex bg-white w-64 h-32 rounded-md p-3 shadow-sm gap-y-2">
                                    <div className="flex flex-col w-[70%] gap-2">
                                        <p className="text-tertiary">
                                            Visitors
                                        </p>
                                        <p className="text-tertiary text-xl">
                                            230
                                        </p>
                                        <div className="flex text-xs gap-2 items-center text-gray-600">
                                            <span className="text-xs p-1 rounded-md text-green-600 bg-green-300/20">
                                                +20%
                                            </span>
                                            since last week
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-[30%]">
                                        <TrendingUpIcon className="text-green-600" />
                                    </div>
                                </div>
                                <div className="flex bg-white w-64 h-32 rounded-md p-3 shadow-sm gap-y-2">
                                    <div className="flex flex-col w-[70%] gap-2">
                                        <p className="text-tertiary">orders</p>
                                        <p className="text-tertiary text-xl">
                                            1.999
                                        </p>
                                        <div className="flex text-xs gap-2 items-center text-gray-600">
                                            <span className="text-xs p-1 rounded-md text-green-600 bg-green-300/20">
                                                +30%
                                            </span>
                                            since last week
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-[30%]">
                                        <TrendingUpIcon className="text-green-600" />
                                    </div>
                                </div>
                                <div className="flex bg-white w-64 h-32 rounded-md p-3 shadow-sm gap-y-2">
                                    <div className="flex flex-col w-[70%] gap-2">
                                        <p className="text-tertiary">
                                            Products
                                        </p>
                                        <p className="text-tertiary text-xl">
                                            20
                                        </p>
                                        <div className="flex text-xs gap-2 items-center text-gray-600">
                                            <span className="text-xs p-1 rounded-md text-green-600 bg-green-300/20">
                                                +1%
                                            </span>
                                            since last week
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-[30%]">
                                        <TrendingUpIcon className="text-green-600" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-6">
                                <div className="flex w-full bg-white h-96 rounded-md shadow-sm p-4">
                                    <ResponsiveContainer>
                                        <AreaChart
                                            width={730}
                                            height={250}
                                            data={data}
                                            margin={{
                                                top: 10,
                                                right: 30,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="colorPPG"
                                                    x1="0"
                                                    y1="0"
                                                    x2="0"
                                                    y2="1"
                                                >
                                                    <stop
                                                        offset="5%"
                                                        stopColor="#5BE49B"
                                                        stopOpacity={0.8}
                                                    />
                                                    <stop
                                                        offset="95%"
                                                        stopColor="#5BE49B"
                                                        stopOpacity={0}
                                                    />
                                                </linearGradient>
                                                <linearGradient
                                                    id="colorUTBK"
                                                    x1="0"
                                                    y1="0"
                                                    x2="0"
                                                    y2="1"
                                                >
                                                    <stop
                                                        offset="5%"
                                                        stopColor="#FFAB00"
                                                        stopOpacity={0.8}
                                                    />
                                                    <stop
                                                        offset="95%"
                                                        stopColor="#FFAB00"
                                                        stopOpacity={0}
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Tooltip />
                                            <Area
                                                type="monotone"
                                                dataKey="ppg"
                                                stroke="#5BE49B"
                                                fillOpacity={1}
                                                fill="url(#colorPPG)"
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="utbk"
                                                stroke="#FFAB00"
                                                fillOpacity={1}
                                                fill="url(#colorUTBK)"
                                            />
                                            <Legend />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
