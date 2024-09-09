import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { TextField } from "@mui/material";
import logo2 from "../../../../public/images/logo-edu-test-market.svg";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Head title="Forgot Password" />

            <div className="max-w-[400px] bg-white p-8 shadow-md rounded-md">
                <div className="flex justify-center items-center gap-x-2 mb-8">
                    <img src={logo2} className="w-8 h-8"></img>
                    <span className="font-bold text-xl text-secondary">
                        EDUTESTMARKET
                    </span>
                </div>
                <div className="mb-4 text-sm text-gray-600">
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
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
                    />
                    <InputError message={errors.email} className="mt-2" />

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Email Password Reset Link
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
