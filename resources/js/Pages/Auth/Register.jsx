import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
// import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Checkbox,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo2 from "../../../../public/images/logo-edu-test-market.svg";
import { useState } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () =>
        setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Head title="Register" />
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
                            Sign Up
                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-x-2 mb-5">
                        <span className=" text-md text-gray-600">
                            Enter your credentials to continue
                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-x-2 mb-6">
                        <span className="text-sm font-bold">
                            Sign up with Email address
                        </span>
                    </div>

                    <div className="flex flex-col gap-y-6 mt-2">
                        <TextField
                            type="text"
                            label="Name"
                            value={data.name}
                            required
                            onChange={(e) => setData("name", e.target.value)}
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
                        />
                        <InputError message={errors.name} />
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
                        <FormControl sx={{ width: "100%" }} variant="outlined">
                            <InputLabel htmlFor="cf-pw">
                                Confirm Password
                            </InputLabel>
                            <OutlinedInput
                                id="cf-pw"
                                name="cf-pw"
                                value={data.password_confirmation}
                                type={showConfirmPassword ? "text" : "password"}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={
                                                handleClickShowConfirmPassword
                                            }
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
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

                <PrimaryButton
                    className="flex w-full justify-center mt-6 shadow-lg mb-4"
                    disabled={processing}
                >
                    <span>Sign Up</span>
                </PrimaryButton>
                <hr />
                <div className="mt-4 flex justify-center">
                    <Link className="text-sm font-bold" href="/login">
                        Already have an account?
                    </Link>
                </div>
            </form>

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form> */}
        </div>
    );
}
