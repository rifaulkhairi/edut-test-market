import React from "react";
import { TfiTime } from "react-icons/tfi";
import { LiaTimesCircle } from "react-icons/lia";
import { IoIosCheckmark } from "react-icons/io";

const ChipGagal = () => {
    return (
        <div className="text-[#767676] bg-[#FFC5C5]  rounded-full px-3 py-1 text-center flex gap-x-1 justify-center items-center">
            <span>
                <LiaTimesCircle />
            </span>
            Gagal
        </div>
    );
};

export default ChipGagal;
