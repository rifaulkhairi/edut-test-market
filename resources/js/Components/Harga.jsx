import React from "react";

const Harga = ({ nilai, ...props }) => {
    function formatMataUang(nilai) {
        const rupiah = new Intl.NumberFormat("id", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(nilai);

        return rupiah;
    }

    return (
        <p $ {...props}>
            {formatMataUang(nilai)}
        </p>
    );
};

export default Harga;
