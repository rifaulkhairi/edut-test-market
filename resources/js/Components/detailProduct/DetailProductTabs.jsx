import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Harga from "../Harga";
import { Autocomplete, Rating, TextField } from "@mui/material";
import { Link, router } from "@inertiajs/react";
import PeopleCard from "../leaderboard/PeopleCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { kabupaten, provinsi } from "daftar-wilayah-indonesia";
import PrimaryButton from "../PrimaryButton";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: 40,
        width: "100%",
        backgroundColor: "#184C80",
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: "none",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: "#141414",
        "&.Mui-selected": {
            color: "#184C80",
        },
        "&.Mui-focusVisible": {
            backgroundColor: "#30c1d1",
        },
    })
);

export default function DetailProductTab({ auth, paketsoal }) {
    const [value, setValue] = useState(0);
    const [rankData, setRankData] = useState([]);
    const dataprovinsi = provinsi();
    const [dataKabupaten, setDataKabupaten] = useState([]);
    const [selectedProv, setSelectedProv] = useState(null);
    const [selectedKab, setSelectedKab] = useState(null);
    const [userRank, setUserRank] = useState(null);

    const params = {
        paketsoal_id: paketsoal.id,
        email: auth?.user?.email || null,
        provinsi: selectedProv?.kode || null,
        kabupaten: selectedKab?.kode || null,
    };
    const createDynamicLink = (params) => {
        const queryString = Object.keys(params)
            .filter((key) => params[key] !== null && params[key] !== undefined)
            .map(
                (key) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(
                        params[key]
                    )}`
            )
            .join("&");

        return `/api/rank?${queryString}`;
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getProvinsiName = (provinsiKode) => {
        return provinsi().find((pr) => pr.kode === provinsiKode).nama;
    };

    const getKabupatenName = (provinsiKode, kabupatenKode) => {
        return kabupaten(provinsiKode).find((kb) => kb.kode === kabupatenKode)
            .nama;
    };
    const handleProvinsiChange = (e, value) => {
        setSelectedProv(value);
        if (value === null) {
            setDataKabupaten([]);
        } else {
            setDataKabupaten(kabupaten(value.kode));
        }
        setSelectedKab(null);
    };

    const handleKabupatenChange = (e, value) => {
        setSelectedKab(value);
    };

    const handleLihat = (e) => {
        e.preventDefault();
        // console.log(createDynamicLink(params));
        axios
            .get(createDynamicLink(params))
            .then((response) => {
                setUserRank(response.data.user_rank);
                setRankData(response.data.ranked_users); // Set rankData to the array
            })
            .catch((error) => {
                console.log("Error fetching data", error);
            });
    };
    useEffect(() => {
        if (paketsoal.id) {
            axios
                .get(
                    `/api/rank?paketsoal_id=${paketsoal.id}${
                        "&email=" + auth?.user?.email || ""
                    }`
                )
                .then((response) => {
                    console.log("data =", response.data);
                    setUserRank(response.data.user_rank);
                    setRankData(response.data.ranked_users); // Set rankData to the array
                })
                .catch((error) => {
                    console.log("Error fetching data", error);
                });
        }
    }, [paketsoal.id]);

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <StyledTab label="Deskripsi" {...a11yProps(0)} />
                    <StyledTab label="Perangkingan" {...a11yProps(1)} />
                </StyledTabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className="pr-20">
                    <p
                        className="ql-container mt-4"
                        dangerouslySetInnerHTML={{
                            __html: paketsoal.description,
                        }}
                    ></p>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className="relative">
                    <div className="h-fit mb-3">
                        <div className="flex w-full gap-x-3">
                            <Autocomplete
                                options={dataprovinsi}
                                fullWidth
                                required
                                onChange={(e, value) =>
                                    handleProvinsiChange(e, value)
                                }
                                value={selectedProv}
                                getOptionLabel={(option) => option.nama}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Provinsi"
                                        sx={{
                                            width: "100%",

                                            "& .MuiOutlinedInput-root.Mui-focused":
                                                {
                                                    outline: "none",
                                                    boxShadow: "none",
                                                },
                                            "& .MuiInputBase-input:focus": {
                                                outline: "none",
                                                boxShadow: "none",
                                            },
                                        }}
                                    />
                                )}
                            ></Autocomplete>
                            <Autocomplete
                                fullWidth
                                required
                                options={dataKabupaten}
                                value={selectedKab}
                                onChange={(e, value) =>
                                    handleKabupatenChange(e, value)
                                }
                                getOptionLabel={(option) => option.nama}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Kabupaten"
                                        sx={{
                                            width: "100%",

                                            "& .MuiOutlinedInput-root.Mui-focused":
                                                {
                                                    outline: "none",
                                                    boxShadow: "none",
                                                },
                                            "& .MuiInputBase-input:focus": {
                                                outline: "none",
                                                boxShadow: "none",
                                            },
                                        }}
                                    />
                                )}
                            />
                            <PrimaryButton onClick={(e) => handleLihat(e)}>
                                Lihat
                            </PrimaryButton>
                        </div>
                    </div>
                    <div className="flex h-fit z-0 w-full flex-col gap-y-3">
                        {Array.isArray(rankData) ? (
                            rankData.length > 0 ? (
                                <>
                                    <table class="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                        <thead class="text-md text-gray-700 uppercase bg-[#f5f9ff] dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="px-6 py-3"
                                                >
                                                    No
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-6 py-3"
                                                >
                                                    Nama
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-6 py-3"
                                                >
                                                    Provinsi
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-6 py-3"
                                                >
                                                    Kabupaten
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="px-6 py-3"
                                                >
                                                    Nilai
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rankData.map((user) => (
                                                <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-[#f5f9ff] dark:hover:bg-gray-600">
                                                    <td class="px-6 py-4">
                                                        {user.ranking}
                                                    </td>
                                                    <th
                                                        scope="row"
                                                        class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white"
                                                    >
                                                        {user.name}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {getProvinsiName(
                                                            user.provinsi
                                                        )}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {getKabupatenName(
                                                            user.provinsi,
                                                            user.kabupaten
                                                        )}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {user.total_nilai}
                                                    </td>
                                                </tr>
                                            ))}
                                            {userRank !== null ? (
                                                userRank[0] && (
                                                    <tr class="bg-[#ffedcb] font-semibold text-gray-700 ">
                                                        <td class="px-6 py-4">
                                                            {
                                                                userRank[0]
                                                                    .ranking
                                                            }
                                                        </td>
                                                        <th
                                                            scope="row"
                                                            class="px-6 py-4 font-medium whitespace-nowrap "
                                                        >
                                                            {userRank[0].name}
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            {getProvinsiName(
                                                                userRank[0]
                                                                    .provinsi
                                                            )}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            {getKabupatenName(
                                                                userRank[0]
                                                                    .provinsi,
                                                                userRank[0]
                                                                    .kabupaten
                                                            )}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            {
                                                                userRank[0]
                                                                    .total_nilai
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            ) : (
                                                <p className="text-red-500">
                                                    Kamu Belum Mengerjakan soal
                                                    ini
                                                </p>
                                            )}
                                        </tbody>
                                    </table>
                                </>
                            ) : (
                                <p>No data available</p>
                            )
                        ) : (
                            <p>rankData is not an array</p>
                        )}

                        <div className="h-12"></div>
                    </div>
                </div>
            </CustomTabPanel>
        </Box>
    );
}
