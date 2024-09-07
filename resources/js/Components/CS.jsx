import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdChatbubbles } from "react-icons/io";

const CS = () => {
    return (
        <div className="flex w-fit fixed bottom-0 right-2 justify-end flex-col items-end">
            <button className=" px-6 py-2 bg-secondary shadow-lg shadow-secondary/15 flex flex-row justify-center items-center gap-x-2 rounded-t-md">
                <IoMdChatbubbles className="text-white text-lg" />
                <span className="text-white text-sm">Chat</span>
            </button>
        </div>
    );
};

export default CS;
