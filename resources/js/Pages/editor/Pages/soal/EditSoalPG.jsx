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
import { useForm } from "@inertiajs/inertia-react";
import { Link, router } from "@inertiajs/react";
import { MdOutlineNavigateNext } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Editor from "@/Components/Editor/Editor";
import InputError from "@/Components/InputError";
import { TiDeleteOutline } from "react-icons/ti";

const EditSoalPG = ({ datasoal, tipetest, paketsoal, question, errors }) => {
    const [choices, setChoices] = useState(question.options);
    const [tipesoal, setTipeSoal] = useState(question.tipe_soal);
    const [idPaketSoal, setIdPaketSoal] = useState(
        question.paketsoal_id
            ? paketsoal.find((p) => p.id === question.paketsoal_id)
            : null
    );

    const [idTipeTest, setIdTipeTest] = useState(
        question.tipetest_id
            ? tipetest.find((p) => p.id === question.tipetest_id)
            : null
    );
    const [selectedIdPaketSoal, setSelectedIdPaketSoal] = useState(
        idPaketSoal.id ? idPaketSoal.id : null
    );
    const [selectedIdTipeTest, setSelectedIdTipeTest] = useState(
        idTipeTest.id ? idTipeTest.id : null
    );
    const [soal, setSoal] = useState(question.question);

    const [pembahasan, setPembahasan] = useState(question.pembahasan);

    const onsubmit = (e) => {
        e.preventDefault();
        router.post(`/editor/updatesoal/${question.id}`, {
            _method: "patch",
            soal: soal,
            choices: choices,
            pembahasan: pembahasan,
            idpaketsoal: selectedIdPaketSoal,
            idtipetest: selectedIdTipeTest,
            tipesoal: tipesoal,
        });
    };

    const handleChoiceChange = (index, field, value) => {
        const newChoices = [...choices];
        newChoices[index][field] = value;
        setChoices(newChoices);
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
                        Daftar Soal
                    </Link>
                    <Link>Edit Soal</Link>
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
                            value={tipesoal}
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

                                    {/* <IconButton
                                        onClick={() =>
                                            handleRemoveChoice(index)
                                        }
                                    >
                                        <TiDeleteOutline className="text-red-400" />
                                    </IconButton> */}
                                </div>

                                <div className="flex flex-col gap-y-3">
                                    <Editor
                                        value={choice["option"]}
                                        onChange={(content) => {
                                            handleChoiceChange(
                                                index,
                                                "option",
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
                                        value={choice.nilai}
                                        onChange={(e) =>
                                            handleChoiceChange(
                                                index,
                                                "nilai",
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

export default EditSoalPG;
