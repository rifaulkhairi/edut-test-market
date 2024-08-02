import Sidebar from "@/Components/admin/Sidebar";
import Header from "@/Components/admin/Header";
import React, { useState } from "react";
import { Button, InputLabel, TextField } from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import { textTransform } from "@mui/system";
import { router } from "@inertiajs/react";

const EditPaketSoal = ({ paketsoal }) => {
    const { data, setData, post, progress, errors } = useForm({
        name: null,
        description: null,
        price: null,
        discount: null,
    });
    const [name, setName] = useState(paketsoal.name ? paketsoal.name : "");
    const [description, setDescription] = useState(
        paketsoal.description ? paketsoal.description : ""
    );
    const [price, setPrice] = useState(paketsoal.price ? paketsoal.price : "");
    const [discount, setDiscount] = useState(
        paketsoal.discount ? paketsoal.discount : ""
    );

    const onsubmit = (e) => {
        e.preventDefault();
        router.post(`/admin/paketsoal/update/${paketsoal.id}`, {
            _method: "patch",
            name: name,
            description: description,
            price: price,
            discount: discount,
        });

        console.log("submit");
    };

    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tab={1} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header></Header>
                <div className="space"></div>
                <form
                    onSubmit={onsubmit}
                    className="flex w-full gap-y-3 flex-col"
                >
                    <InputLabel labelId="cover">Cover</InputLabel>
                    <input
                        className="flex w-full"
                        labelId="cover"
                        type="file"
                        onChange={(e) => setData("cover", e.target.files[0])}
                    />
                    {progress && (
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}
                    <TextField
                        id="name"
                        label="Name"
                        required
                        multiline
                        value={name}
                        onChange={(event, value) => {
                            setName(event.target.value);
                            setData("name", name);
                        }}
                        sx={{ width: "100%" }}
                    ></TextField>
                    <TextField
                        id="description"
                        label="Description"
                        required
                        multiline
                        value={description}
                        onChange={(event, value) => {
                            setDescription(event.target.value);
                            setData("description", description);
                        }}
                        sx={{ width: "100%" }}
                    ></TextField>
                    <TextField
                        id="price"
                        type="number"
                        label="Price"
                        required
                        value={price}
                        onChange={(event, value) => {
                            setPrice(event.target.value);
                            setData("price", price);
                        }}
                        sx={{ width: "100%" }}
                    ></TextField>
                    <TextField
                        id="discount"
                        type="text"
                        label="Discount"
                        required
                        onChange={(event, value) => {
                            setDiscount(event.target.value);
                            console.log(discount);
                            setData("discount", discount);
                        }}
                        value={discount}
                        inputMode="decimal"
                        sx={{ width: "100%" }}
                    ></TextField>
                    <div>
                        <Button
                            type="submit"
                            sx={{ textTransform: "capitalize" }}
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EditPaketSoal;
