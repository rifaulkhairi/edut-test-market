import Sidebar from "@/Components/admin/Sidebar";
import Header from "@/Components/admin/Header";
import {
    Autocomplete,
    Breadcrumbs,
    Button,
    InputLabel,
    MenuItem,
    TextField,
} from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import { Link, router } from "@inertiajs/react";
import { MdOutlineNavigateNext } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Editor from "@/Components/Editor/Editor";

const EditSoalPG = ({ datasoal, tipetest, paketsoal }) => {
    const { data, setData, post, errors } = useForm({
        soal: "",
        opsiA: "",
        opsiB: "",
        opsiC: "",
        opsiD: "",
        opsiE: "",
        pembahsan: "",
        idpaketsoal: null,
        idtipetest: null,
        nilai: null,
        jawabanBetul: "",
    });

    const [idPaketSoal, setIdPaketSoal] = useState(
        datasoal[0].id_paket_soal
            ? paketsoal.find((p) => p.id === datasoal[0].id_paket_soal)
            : null
    );

    const [idTipeTest, setIdTipeTest] = useState(
        datasoal[0].id_tipe_test
            ? tipetest.find((p) => p.id === datasoal[0].id_tipe_test)
            : null
    );
    const [selectedIdPaketSoal, setSelectedIdPaketSoal] = useState(
        idPaketSoal.id ? idPaketSoal.id : null
    );
    const [selectedIdTipeTest, setSelectedIdTipeTest] = useState(
        idTipeTest.id ? idTipeTest.id : null
    );
    const [soal, setSoal] = useState(datasoal[0].soal);
    const [opsiA, setOpsiA] = useState(datasoal[0].opsiA);
    const [opsiB, setOpsiB] = useState(datasoal[0].opsiB);
    const [opsiC, setOpsiC] = useState(datasoal[0].opsiC);
    const [opsiD, setOpsiD] = useState(datasoal[0].opsiD);
    const [opsiE, setOpsiE] = useState(datasoal[0].opsiE);
    const [pembahasan, setPembahasan] = useState(datasoal[0].pembahasan);
    const [nilai, setNilai] = useState(datasoal[0].nilai);
    const [jawabanbetul, setJawabanBetul] = useState(datasoal[0].jawaban_betul);

    const onsubmit = (e) => {
        e.preventDefault();
        router.post(`/admin/updatesoal/${datasoal[0].id}`, {
            _method: "patch",
            soal: soal,
            opsiA: opsiA,
            opsiB: opsiB,
            opsiC: opsiC,
            opsiD: opsiD,
            opsiE: opsiE,
            pembahsan: pembahasan,
            idpaketsoal: selectedIdPaketSoal,
            idtipetest: selectedIdTipeTest,
            nilai: nilai,
            jawabanBetul: jawabanbetul,
        });
    };

    console.log(datasoal[0].id_paket_soal);

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
                    <Autocomplete
                        id="paket_soal"
                        value={idPaketSoal}
                        options={paketsoal}
                        sx={{ width: 300 }}
                        getOptionLabel={(option) => option.name}
                        onChange={(event, value) => {
                            setIdPaketSoal(value);
                            setSelectedIdPaketSoal(value.id);
                            // setData("id_prodi", value.id);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Paket Soal" />
                        )}
                    />
                    <Autocomplete
                        id="tipe_test"
                        value={idTipeTest}
                        options={tipetest}
                        sx={{ width: 300 }}
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
                    <TextField
                        id="jawabanbetul"
                        select
                        value={jawabanbetul}
                        sx={{ width: 300 }}
                        label="Jawaban Betul"
                        helperText="Pilih Opsi Jawaban Betul"
                        onChange={(event, value) => {
                            setJawabanBetul(event.target.value);
                        }}
                    >
                        <MenuItem value="A">A</MenuItem>
                        <MenuItem value="B">B</MenuItem>
                        <MenuItem value="C">C</MenuItem>
                        <MenuItem value="D">D</MenuItem>
                        <MenuItem value="E">E</MenuItem>
                    </TextField>
                    <TextField
                        id="nilai"
                        type="text"
                        label="Nilai"
                        value={nilai}
                        required
                        onChange={(event, value) => {
                            setNilai(event.target.value);
                        }}
                        inputMode="decimal"
                        sx={{ width: 300 }}
                    ></TextField>

                    <InputLabel>Soal</InputLabel>
                    <Editor value={soal} onChange={setSoal} />
                    <InputLabel>Option A</InputLabel>
                    <Editor value={opsiA} onChange={setOpsiA} />
                    <InputLabel>Option B</InputLabel>
                    <Editor value={opsiB} onChange={setOpsiB} />
                    <InputLabel>Option C</InputLabel>
                    <Editor value={opsiC} onChange={setOpsiC} />
                    <InputLabel>Option D</InputLabel>
                    <Editor value={opsiD} onChange={setOpsiD} />
                    <InputLabel>Option E</InputLabel>
                    <Editor value={opsiE} onChange={setOpsiE} />
                    <InputLabel>Pembahasan</InputLabel>
                    <Editor value={pembahasan} onChange={setPembahasan} />
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
