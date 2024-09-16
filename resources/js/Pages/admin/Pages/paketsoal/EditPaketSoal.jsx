import Sidebar from "@/Components/admin/Sidebar";
import Header from "@/Components/admin/Header";
import React, { useState } from "react";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import { textTransform } from "@mui/system";
import { router } from "@inertiajs/react";
import Editor from "@/Components/Editor/Editor";
import Image from "@/Components/Image";

const EditPaketSoal = ({ paketsoal, base_url }) => {
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
    const [jam, setJam] = useState(paketsoal.jam ? paketsoal.jam : 0);
    const [menit, setMenit] = useState(paketsoal.menit ? paketsoal.menit : 0);
    const [detik, setDetik] = useState(paketsoal.detik ? paketsoal.detik : 0);
    const [status, setStatus] = useState(paketsoal.status);
    const [cover, setCover] = useState(null);

    const onsubmit = (e) => {
        e.preventDefault();
        router.post(`/admin/paketsoal/update/${paketsoal.id}`, {
            _method: "patch",
            name: name,
            description: description,
            price: price,
            discount: discount,
            jam: jam,
            menit: menit,
            detik: detik,
            status: status,
            cover: cover,
        });
    };

    const handleStatusChange = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
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
                    {paketsoal.link_cover && (
                        <Image
                            className="w-32 h-32"
                            src={`${base_url}/storage/${paketsoal.link_cover}`}
                        />
                    )}
                    <InputLabel labelId="cover">Cover</InputLabel>
                    <input
                        className="flex w-full"
                        labelId="cover"
                        type="file"
                        onChange={(e) => setCover(e.target.files[0])}
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

                    <Editor
                        value={description}
                        onChange={(value) => {
                            setDescription(value);
                            setData("description", value);
                        }}
                    />
                    <div className="flex gap-x-2 max-w-[300px]">
                        <TextField
                            type="number"
                            placeholder="Jam"
                            label="Jam"
                            value={jam}
                            onChange={(e, value) => {
                                setJam(e.target.value);
                            }}
                        ></TextField>
                        <TextField
                            type="number"
                            placeholder="Menit"
                            label="Menit"
                            value={menit}
                            onChange={(e, value) => {
                                setMenit(e.target.value);
                            }}
                        ></TextField>
                        <TextField
                            type="number"
                            placeholder="Detik"
                            value={detik}
                            onChange={(e, value) => {
                                setDetik(e.target.value);
                            }}
                            label="Detik"
                        ></TextField>
                    </div>
                    <div className="flex flex-row gap-x-2">
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
                        <FormControl fullWidth>
                            <InputLabel labelId="Status">Status</InputLabel>
                            <Select
                                label="Status"
                                value={status}
                                onChange={(e) => handleStatusChange(e)}
                            >
                                <MenuItem value={"pending"}>Pending</MenuItem>
                                <MenuItem value={"publish"}>Publish</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
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
