import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const ChipBerhasil = () => {
    return (
        <div className="text-[#767676] bg-[#C5FFD5]  rounded-full px-3 py-1 text-center flex gap-x-1 justify-center items-center">
            Berhasil
            <span>
                <IoIosCheckmark className="text-2xl" />
            </span>
        </div>
    );
};

export default ChipBerhasil;
