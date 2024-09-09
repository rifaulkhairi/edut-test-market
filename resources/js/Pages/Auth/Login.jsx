import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";

import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
// import logo1  from "../../../../public/images/logo-EduShop.svg";
// import logo2  from "../../../../public/images/logo-edu-test-market.svg";
import logo from "../../../../public/images/logo-EduShop.svg";
import logo2 from "../../../../public/images/logo-edu-test-market.svg";
import {
    FormControl,
    IconButton,
    InputAdornment,
    OutlinedInput,
    TextField,
    InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form
                onSubmit={submit}
                className="bg-white p-8 rounded-md shadow-md min-w-[400px]"
            >
                <div className="flex flex-col">
                    <div className="flex justify-center items-center gap-x-2 mb-8">
                        <img src={logo2} className="w-8 h-8"></img>
                        <span className="font-bold text-xl text-secondary">
                            EDUTESTMARKET
                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-x-2 mb-2">
                        <span className="font-bold text-2xl text-secondary">
                            Hi, Welcome Back
                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-x-2 mb-5">
                        <span className=" text-md text-gray-600">
                            Enter your credentials to continue
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-6 mt-4">
                        <TextField
                            type="email"
                            label="Email"
                            value={data.email}
                            required
                            onChange={(e) => setData("email", e.target.value)}
                            sx={{
                                width: "100%",

                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    outline: "none",
                                    boxShadow: "none",
                                },
                                "& .MuiInputBase-input:focus": {
                                    outline: "none",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            Email
                        </TextField>
                        <InputError message={errors.email} />
                        <FormControl sx={{ width: "100%" }} variant="outlined">
                            <InputLabel htmlFor="pw">Password</InputLabel>
                            <OutlinedInput
                                id="pw"
                                name="pw"
                                value={data.password}
                                type={showPassword ? "text" : "password"}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                sx={{
                                    width: "100%",
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        boxShadow: "none",
                                    },
                                    "& .MuiInputBase-input:focus": {
                                        boxShadow: "none",
                                    },
                                }}
                            />
                            <InputError message={errors.password} />
                        </FormControl>
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-gray-600">
                                Keep me logged in
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </div>
                </div>
                <PrimaryButton
                    className="flex w-full justify-center mt-6 shadow-lg mb-4"
                    disabled={processing}
                >
                    <span>Log in</span>
                </PrimaryButton>
                <hr />
                <div className="mt-4 flex justify-center">
                    <Link className="text-sm font-bold" href="/register">
                        Dont have an account?
                    </Link>
                </div>
            </form>
        </div>
    );
}
