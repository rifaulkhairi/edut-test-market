import Sidebar from "@/Components/admin/Sidebar";
import Header from "@/Components/admin/Header";
import { Breadcrumbs, Button, InputLabel } from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import { Link, router } from "@inertiajs/react";
import { MdOutlineNavigateNext } from "react-icons/md";
import React, { useState } from "react";
import Editor from "@/Components/Editor/Editor";

const AddSoalPG = () => {
    const { data, setData, post, errors } = useForm({
        soal: "",
        opsiA: "",
    });
    const [soal, setSoal] = useState("");
    const [opsiA, setOpsiA] = useState("");

    const onsubmit = (e) => {
        e.preventDefault();
        router.post("/admin/storsoal", {
            _method: "post",
            soal: soal,
            opsiA: opsiA,
        });
    };

    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tab={1} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header />
                <div className="space"></div>
                <Breadcrumbs
                    separator={<MdOutlineNavigateNext />}
                    aria-label="breadcrumb"
                >
                    <Link href="/admin/daftarsoal" className="text-blue-600">
                        Home
                    </Link>
                    <Link>Add Soal PG</Link>
                </Breadcrumbs>
                <form
                    onSubmit={onsubmit}
                    className="flex w-full gap-y-3 flex-col mt-3"
                >
                    <InputLabel>Soal</InputLabel>
                    <Editor value={soal} onChange={setSoal} />
                    <InputLabel>Option A</InputLabel>
                    <Editor value={opsiA} onChange={setOpsiA} />
                    <InputLabel>Option B</InputLabel>
                    <Editor value={opsiA} onChange={setOpsiA} />
                    <InputLabel>Option C</InputLabel>
                    <Editor value={opsiA} onChange={setOpsiA} />
                    <InputLabel>Option D</InputLabel>
                    <Editor value={opsiA} onChange={setOpsiA} />
                    <InputLabel>Option E</InputLabel>
                    <Editor value={opsiA} onChange={setOpsiA} />
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

export default AddSoalPG;
