import React from "react";
import { TfiTime } from "react-icons/tfi";
import { LiaTimesCircle } from "react-icons/lia";
import { IoIosCheckmark } from "react-icons/io";

const ChipMenggunguPembayaran = () => {
    return (
        <p className="text-[#767676] bg-[#FFDE93]  rounded-full px-3 py-1 text-center flex w-fit gap-x-1 justify-center items-center">
            <span>
                <TfiTime />
            </span>
            Menunggu Pembayaran
        </p>
    );
};

export default ChipMenggunguPembayaran;
