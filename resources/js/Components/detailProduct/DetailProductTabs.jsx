import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Harga from "../Harga";
import { Avatar, Rating } from "@mui/material";
import { Link } from "@inertiajs/react";
import { green } from "@mui/material/colors";
import { People } from "@mui/icons-material";
import PeopleCard from "../leaderboard/PeopleCard";

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

const people = [
    { nama: "Rifa Ulkhairi", score: 500 },
    { nama: "Khairi Rifa", score: 450 },
    { nama: "Khairi", score: 450 },
    { nama: "Airi", score: 420 },
    { nama: "Airi Rifa", score: 420 },
];

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

export default function BasicTabs({ auth, detail }) {
    const [value, setValue] = React.useState(0);

    const [selectedProduct, setSelectedProduct] = React.useState({
        id: detail.id,
        title: detail.name,
        harga: detail.price,
        diskon: detail.discount,
        image: detail.link_cover,
        description: detail.description,
        rating: detail.rating,
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <StyledTab label="Detail Product" {...a11yProps(0)} />
                    <StyledTab label="Perangkingan" {...a11yProps(1)} />
                </StyledTabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <h2 className="text-xl text-indigo-600 mb-4">
                    <Harga
                        nilai={selectedProduct.harga}
                        className="text-md font-semibold text-secondary"
                    ></Harga>
                </h2>
                <p className="text-md text-gray-600"> 1rb terjual</p>
                <div className="flex gap-x-2">
                    <p className="text-xl font-semibold text-secondary">
                        {selectedProduct.rating}
                    </p>
                    <Rating value={selectedProduct.rating} readOnly />
                </div>
                <button className="mt-4 bg-secondary/15 border-secondary  border-2 text-secondary px-4 py-2 rounded hover:bg-secondary/10">
                    Add to Cart
                </button>
                <Link
                    href={route("kerjakansoal", {
                        id: selectedProduct.id,
                    })}
                >
                    <button className="mt-4 mx-8 bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/70">
                        Kerjakan Soal
                    </button>
                </Link>
                <div className="pr-20">
                    <p className="mt-4">{selectedProduct.description}</p>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className="flex h-80 w-full overflow-y-scroll flex-col gap-y-3 px-7">
                    {people.map((orang, index) => (
                        <PeopleCard orang={orang} index={index}></PeopleCard>
                    ))}
                </div>
            </CustomTabPanel>
        </Box>
    );
}
