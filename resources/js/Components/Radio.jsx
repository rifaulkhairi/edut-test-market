import React, { createContext, useContext } from "react";

const RadioContext = createContext();

export default function RadioCategoryCustom({ children, ...props }) {
    const { value, onChange } = useContext(RadioContext);
    return (
        <label
            className={`px-6 py-1 shadow-lg rounded-md cursor-pointer transition-all bg-secondary/5 ${
                value === props.value
                    ? "bg-white border-[3px] border-secondary text-secondary text-md "
                    : "bg-white text-secondary text-md"
            }`}
        >
            <input
                type="radio"
                className="hidden"
                checked={value === props.value}
                onChange={onChange}
                {...props}
            />
            {children}
        </label>
    );
}

export function RadioGroupCustom({ value, onChange, children }) {
    return (
        <RadioContext.Provider value={{ value, onChange, children }}>
            {children}
        </RadioContext.Provider>
    );
}
