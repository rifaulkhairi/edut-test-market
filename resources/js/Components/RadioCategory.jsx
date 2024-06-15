import React, { createContext, useContext } from "react";

const RadioContext = createContext();

export default function RadioCategory({ children, ...props }) {
    const { value, onChange } = useContext(RadioContext);
    return (
        <label className={`px-6 py-1 shadow rounded-md cursor-pointer transition-all ${
            value===props.value ? "bg-secondary text-white text-md " : "bg-white text-secondary text-md"
        }`} >
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

export function RadioGroup({ value, onChange, children }) {
    return (
        <RadioContext.Provider value={{ value, onChange, children }}>
            {children}
        </RadioContext.Provider>
    );
}
