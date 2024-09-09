import Header from "@/Components/author/Header";
import Sidebar from "@/Components/author/Sidebar";
import {
    Autocomplete,
    Breadcrumbs,
    Button,
    IconButton,
    MenuItem,
    TextField,
} from "@mui/material";
import { Link, router } from "@inertiajs/react";
import { MdOutlineNavigateNext } from "react-icons/md";
import React, { useState } from "react";
import Editor from "@/Components/Editor/Editor";
import { TiDeleteOutline } from "react-icons/ti";
import { useEffect } from "react";
import InputError from "@/Components/InputError";
import { Toaster, toast } from "sonner";

const AddSoalPG = ({ tipetest, paketsoal, errors, flash }) => {
    const [idPaketSoal, setIdPaketSoal] = useState(null);
    const [idTipeTest, setIdTipeTest] = useState(null);
    const [selectedIdPaketSoal, setSelectedIdPaketSoal] = useState(null);
    const [selectedIdTipeTest, setSelectedIdTipeTest] = useState(null);
    const [soal, setSoal] = useState("");
    const [choices, setChoices] = useState([
        { choice_text: "", points: 0, alias: 0 },
    ]);
    const [pembahasan, setPembahasan] = useState("");
    const [tipesoal, setTipeSoal] = useState(null);

    const onsubmit = (e) => {
        e.preventDefault();
        router.post("/editor/storsoal", {
            _method: "post",
            soal: soal,
            choices: choices,
            pembahasan: pembahasan,
            idpaketsoal: selectedIdPaketSoal,
            idtipetest: selectedIdTipeTest,
            tipesoal: tipesoal,
        });
    };
    useEffect(() => {
        if (flash.message != null) {
            if (flash.message.success) {
                toast.success(flash.message.success);
            } else if (flash.message.error) {
                toast.error(flash.message.error);
            }
        }
    }, [flash]);

    const handleAddChoice = () => {
        setChoices([
            ...choices,
            {
                choice_text: "",
                points: 0,
                alias:
                    choices.length > 0
                        ? choices[choices.length - 1].alias + 1
                        : 0,
            },
        ]);
    };

    const handleChoiceChange = (index, field, value) => {
        const newChoices = [...choices];
        newChoices[index][field] = value;
        setChoices(newChoices);
    };
    const handleRemoveChoice = (index) => {
        const newChoices = choices.filter((_, i) => i !== index);
        setChoices(newChoices);
    };

    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tab={1} />
            </div>
            <Toaster position="top-right" richColors />
            <div className="content-right w-[85%] px-3">
                <Header />
                <div className="space"></div>
                <Breadcrumbs
                    separator={<MdOutlineNavigateNext />}
                    aria-label="breadcrumb"
                >
                    <Link href="/admin/daftarsoal" className="text-blue-600">
                        Daftar Soal
                    </Link>
                    <Link>Add Soal PG</Link>
                </Breadcrumbs>
                <form
                    onSubmit={onsubmit}
                    className="flex w-full gap-y-3 flex-col mt-3"
                >
                    <div className="flex w-full gap-y-3 flex-col bg-white rounded-md p-4">
                        <h2 className="text-secondary font-bold text-xl ">
                            Informasi Soal
                        </h2>
                        <Autocomplete
                            id="paket_soal"
                            value={idPaketSoal}
                            options={paketsoal}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, value) => {
                                setIdPaketSoal(value);
                                setSelectedIdPaketSoal(value.id);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label="Paket Soal" />
                            )}
                        />
                        <InputError message={errors.idpaketsoal} />
                        <Autocomplete
                            id="tipe_test"
                            value={idTipeTest}
                            options={tipetest}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, value) => {
                                setIdTipeTest(value);
                                setSelectedIdTipeTest(value.id);

                                // setData("id_prodi", value.id);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label="Tipe Test" />
                            )}
                        />
                        <InputError message={errors.idtipetest} />

                        <TextField
                            id="tipesoal"
                            select
                            label="Tipe Soal"
                            helperText="Pilih Tipe Soal"
                            onChange={(event, value) => {
                                setTipeSoal(event.target.value);
                            }}
                        >
                            <MenuItem value="pg">Pilihan Ganda</MenuItem>
                            <MenuItem value="pgcomplex">
                                Pilihan Ganda Kompleks
                            </MenuItem>
                            <MenuItem value="bs">Benar Salah</MenuItem>
                        </TextField>
                        <InputError message={errors.tipesoal} />
                    </div>

                    <div className="flex w-full bg-white h-fit flex-col p-6 rounded-md shadow-md">
                        <h2 className="text-secondary font-bold text-xl mb-3 ">
                            Soal
                        </h2>
                        <Editor value={soal} onChange={setSoal} />
                        <InputError message={errors.soal} />
                    </div>
                    <div className="flex w-full h-full gap-y-4 flex-col">
                        {choices.map((choice, index) => (
                            <div
                                key={index}
                                className="flex w-full bg-white h-fit flex-col p-6 rounded-md shadow-md"
                            >
                                <div className="flex w-full flex-row justify-between">
                                    <h2 className="text-secondary font-bold text-xl mb-3 ">
                                        {`Opsi ${String.fromCharCode(
                                            97 + index
                                        )}`}
                                    </h2>

                                    <IconButton
                                        onClick={() =>
                                            handleRemoveChoice(index)
                                        }
                                    >
                                        <TiDeleteOutline className="text-red-400" />
                                    </IconButton>
                                </div>

                                <div className="flex flex-col gap-y-3">
                                    <Editor
                                        value={choice["choice_text"]}
                                        onChange={(content) => {
                                            handleChoiceChange(
                                                index,
                                                "choice_text",
                                                content
                                            );
                                        }}
                                    />
                                    <InputError
                                        message={
                                            errors[
                                                `choices.${index}.choice_text`
                                            ]
                                        }
                                    />

                                    <TextField
                                        id="nilai"
                                        type="text"
                                        label="Nilai"
                                        required
                                        onChange={(e) =>
                                            handleChoiceChange(
                                                index,
                                                "points",
                                                e.target.value
                                            )
                                        }
                                        inputMode="decimal"
                                        sx={{ width: 100 }}
                                    ></TextField>
                                    <InputError
                                        message={
                                            errors[`choices.${index}.points`]
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <InputError message={errors[`choices`]} />
                    <div className="flex justify-center">
                        <Button
                            onClick={handleAddChoice}
                            variant="contained"
                            sx={{ textTransform: "capitalize" }}
                        >
                            Tambahkan Opsi
                        </Button>
                    </div>
                    <div className="flex w-full bg-white h-fit flex-col p-6 rounded-md shadow-md">
                        <h2 className="text-secondary font-bold text-xl mb-3 ">
                            Pembahasan
                        </h2>
                        <Editor value={pembahasan} onChange={setPembahasan} />
                        <InputError message={errors[`pembahasan`]} />
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
                    <div className="mb-24"></div>
                </form>
            </div>
        </section>
    );
};

export default AddSoalPG;
