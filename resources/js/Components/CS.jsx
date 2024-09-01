import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const CS = () => {
    return (
        <div className="flex w-fit fixed bottom-5 right-5 justify-end flex-col items-end">
            <button className="bg-white p-3 rounded-full shadow-lg shadow-secondary/15">
                <IoLogoWhatsapp className="text-secondary text-4xl" />
            </button>
        </div>
    );
};

export default CS;
