import React from "react";

const Button = ({ title, onClick }) => {
    return (
        <button
            className="bg-secondary mt-4 hover:bg-secondary/65 text-white px-3 py-2 rounded-md w-40 transition-all"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
