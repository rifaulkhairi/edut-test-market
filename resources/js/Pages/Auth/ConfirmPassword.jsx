import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import logo2 from "../../../../public/images/logo-edu-test-market.svg";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Head title="Confirm Password" />

            <div className="max-w-[400px] bg-white p-8 shadow-md rounded-md">
                <div className="flex justify-center items-center gap-x-2 mb-8">
                    <img src={logo2} className="w-8 h-8"></img>
                    <span className="font-bold text-xl text-secondary">
                        EDUTESTMARKET
                    </span>
                </div>
                <div className="mb-4 text-sm text-gray-600">
                    This is a secure area of the application. Please confirm
                    your password before continuing.
                </div>
                <form onSubmit={submit}>
                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Confirm
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
