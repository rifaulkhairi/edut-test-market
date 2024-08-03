import Sidebar from "@/Components/admin/Sidebar";
import Header from "@/Components/admin/Header";
import React, { useState } from "react";
import { Button, InputLabel, TextField } from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import { textTransform } from "@mui/system";
import { router } from "@inertiajs/react";

const EditTipeTes = ({ tipetest }) => {
    const { data, setData, post, errors } = useForm({
        name: null,
    });
    const [name, setName] = useState(tipetest.name);

    const onsubmit = (e) => {
        e.preventDefault();
        router.post(`/admin/tipetest/update/${tipetest.id}`, {
            _method: "patch",
            name: name,
        });
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
                    <TextField
                        id="name"
                        label="Nama Tes"
                        required
                        multiline
                        value={name}
                        onChange={(event, value) => {
                            setName(event.target.value);
                            setData("name", event.target.value);
                        }}
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

export default EditTipeTes;
