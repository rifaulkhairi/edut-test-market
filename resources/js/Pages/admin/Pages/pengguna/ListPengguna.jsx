import Sidebar from "@/Components/admin/Sidebar";
import Header from "@/Components/admin/Header";
import React, { useState } from "react";
import {
    Button,
    InputLabel,
    TextField,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    InputAdornment,
    Input,
    Box,
    Select,
    MenuItem,
    FormControl,
} from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import MUIDataTable from "mui-datatables";
import { Link, router } from "@inertiajs/react";
import { MdOutlineOpenInNew } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import Harga from "@/Components/Harga";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";

const ListPengguna = ({ users, flash }) => {
    const [openForm, setOpenForm] = useState();
    const [openConfirm, setOpenConfirm] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [role, setRole] = useState(null);
    const [userId, setUserId] = useState(null);

    const columns = [
        {
            name: "No",
            label: "No",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value, tableMeta) => {
                    return tableMeta.rowIndex + 1; // Adjust index to be 1-based
                },
            },
        },
        { name: "name" },

        {
            name: "email",
            label: "Email",
        },
        {
            name: "userType",
            label: "Role",
        },

        {
            name: "id",
            label: "Action",
            options: {
                customBodyRender: (value) => (
                    <div className="flex flex-row">
                        <IconButton
                            onClick={(e) => {
                                handleDeleteRecord(e, value);
                            }}
                        >
                            <MdDeleteForever className="text-md text-red-500" />
                        </IconButton>
                    </div>
                ),
                filter: false,
                sort: false,
            },
        },
    ];

    const options = {
        filterType: "multiselect",
        selectableRows: false,
    };

    const handleClickOpen = () => {
        setOpenForm(true);
    };
    const handleClose = () => {
        setOpenForm(false);
    };

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleMouseDownPassword = () => {};

    const handleMouseUpPassword = () => {};

    const handleDeleteRecord = (e, userid) => {
        setOpenConfirm(true);
        setUserId(userid);
    };
    const handleConfrim = (e) => {
        e.preventDefault();
        setOpenConfirm(false);
        router.post(`/admin/delete/pengguna/${userId}`, { _method: "delete" });
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
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
    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tab={3} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header></Header>
                <Toaster position="top-right" richColors />

                <div className="space"></div>
                <div className="flex w-full gap-y-3 flex-col">
                    <div className="flex w-full justify-end">
                        <Button
                            variant="contained"
                            sx={{ textTransform: "capitalize" }}
                            onClick={(e) => {
                                handleClickOpen();
                            }}
                        >
                            Tambah
                        </Button>
                    </div>
                    <MUIDataTable
                        title={"Daftar Pengguna"}
                        data={users}
                        columns={columns}
                        options={options}
                    ></MUIDataTable>
                </div>
            </div>
            <Dialog
                open={openConfirm}
                onClose={handleCloseConfirm}
                fullWidth={true}
                maxWidth="xs"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Konfirmasi"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Apakah Anda Yakin?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm}>Batal</Button>
                    <Button onClick={(e) => handleConfrim(e)} autoFocus>
                        yakin
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openForm}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: (event) => {
                        event.preventDefault();
                        router.post("/admin/save/pengguna", {
                            name: name,
                            email: email,
                            password: password,
                            usertype: role,
                        });
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Tambah Pengguna</DialogTitle>
                <DialogContent>
                    <Box sx={{ "& > *": { marginY: 2 } }}>
                        <TextField
                            required
                            margin="dense"
                            id="name"
                            name="nama"
                            label="Nama"
                            type="text"
                            fullWidth
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                            variant="standard"
                        />
                        <TextField
                            required
                            margin="dense"
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            variant="standard"
                        />

                        <FormControl
                            fullWidth
                            variant="standard"
                            margin="dense"
                        >
                            <InputLabel htmlFor="standard-adornment-password">
                                Password
                            </InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? "text" : "password"}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            onMouseUp={handleMouseUpPassword}
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl
                            fullWidth
                            variant="standard"
                            margin="dense"
                        >
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                                labelId="role-label"
                                id="role"
                                label="Role"
                                value={role}
                                required
                                onChange={(event) => {
                                    setRole(event.target.value);
                                    // console.log(event.target.value);
                                }}
                            >
                                <MenuItem value={"admin"}>Admin</MenuItem>
                                <MenuItem value={"editor"}>Editor</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    {/* <div className="h-32"></div> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};

export default ListPengguna;
