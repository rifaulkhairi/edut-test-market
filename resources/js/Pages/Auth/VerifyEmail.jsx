import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import logo2 from "../../../../public/images/logo-edu-test-market.svg";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Head title="Email Verification" />
            <div className="max-w-[500px] bg-white p-8 shadow-md rounded-md">
                <div className="flex justify-center items-center gap-x-2 mb-8">
                    <img src={logo2} className="w-8 h-8"></img>
                    <span className="font-bold text-xl text-secondary">
                        EDUTESTMARKET
                    </span>
                </div>
                <div className="mb-4 text-sm text-gray-600">
                    Thanks for signing up! Before getting started, could you
                    verify your email address by clicking on the link we just
                    emailed to you? If you didn't receive the email, we will
                    gladly send you another.
                </div>

                {status === "verification-link-sent" && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="mt-4 flex items-center justify-between">
                        <PrimaryButton disabled={processing}>
                            Resend Verification Email
                        </PrimaryButton>

                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log Out
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
