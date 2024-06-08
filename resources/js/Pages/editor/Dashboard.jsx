import Sidebar from "@/Components/Sidebar";
import React from "react";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="basis-[12%] h-[100vh] border">
                <Sidebar />
            </div>
            <div className="basis-[88%]">Editor Dashboard</div>
        </div>
    );
};

export default Dashboard;
