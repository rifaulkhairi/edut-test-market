import React from "react";
import { Avatar, Rating } from "@mui/material";

import { green } from "@mui/material/colors";

const PeopleCard = ({ orang, index }) => {
    return (
        <div className="flex w-full h-16 bg-tertiary/10 p-3 rounded-md gap-x-2">
            <div className="flex justify-center items-center p-3">
                <p className="text-secondary font-md font-semibold w-4">{index + 1}</p>
            </div>
            <div className="flex flex-row w-auto">
                <Avatar sx={{ bgcolor: green[500] }}>RU</Avatar>

                <div className="flex w-full  items-center pl-2">
                    <p className="flex-none text-secondary font-md font-semibold">
                        {orang.nama}
                    </p>
                </div>
            </div>
            <div className="flex justify-end w-full h-full items-center">
                <p>{orang.score}</p>
            </div>
        </div>
    );
};

export default PeopleCard;
