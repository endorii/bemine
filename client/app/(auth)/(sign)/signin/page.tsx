"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const phoneRegex = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
);
const signinSchema = z.object({
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(phoneRegex, "Invalid phone number"),
    password: z.string().min(8, "Minimum 8 symbols"),
});

type SigninFormData = z.infer<typeof signinSchema>;

export default function SigninPage() {
    const [showPass, setShowPass] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            phone: "",
            password: "",
        },
    });

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const onSubmit = async (data: SigninFormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
                <label className="text-sm text-zinc-600 font-semibold">
                    E-mail
                </label>
                <input
                    type="text"
                    className={`p-3 rounded bg-blue-600/5 outline-0 border-b-2 border-transparent focus:border-blue-600 focus:rounded-b-none ${
                        errors.email?.message ? "border-red-600!" : ""
                    }`}
                    {...register("email")}
                />
                <div className="text-red-600 text-sm mt-1">
                    {errors.email?.message}
                </div>
            </div>
            <div className="flex flex-col gap-0.5">
                <label className="text-sm text-zinc-600 font-semibold">
                    Phone
                </label>
                <input
                    type="text"
                    className={`p-3 rounded bg-blue-600/5 outline-0 border-b-2 border-transparent focus:border-blue-600 focus:rounded-b-none ${
                        errors.phone?.message ? "border-red-600!" : ""
                    }`}
                    {...register("phone")}
                />{" "}
                <div className="text-red-600 text-sm mt-1">
                    {errors.phone?.message}
                </div>
            </div>
            <div className="flex flex-col gap-0.5">
                <label className="text-sm text-zinc-600 font-semibold">
                    Password
                </label>
                <div className="relative w-full">
                    <input
                        type={showPass ? "text" : "password"}
                        className={`p-3 rounded bg-blue-600/5 outline-0 border-b-2 border-transparent focus:border-blue-600 focus:rounded-b-none w-full ${
                            errors.password?.message ? "border-red-600!" : ""
                        }`}
                        {...register("password")}
                    />
                    <button
                        type="button"
                        onClick={handleShowPass}
                        className="absolute top-[50%] translate-y-[-50%] right-5"
                    >
                        {showPass ? (
                            <EyeOffIcon className="stroke-zinc-500 hover:stroke-zinc-950 transition" />
                        ) : (
                            <EyeIcon className="stroke-zinc-500 hover:stroke-zinc-950 transition" />
                        )}
                    </button>
                </div>
                <div className="text-red-600 text-sm mt-1">
                    {errors.password?.message}
                </div>
            </div>

            {/* if error on server */}
            {/* <div className="text-red-600 text-sm p-3 bg-red-50 rounded">
                Invalid email or password
            </div> */}

            <Link
                href={"/forgot-password"}
                className="text-sm font-semibold hover:text-blue-600 underline w-fit"
            >
                Forgot password?
            </Link>
            <button
                type="submit"
                className="p-3 bg-blue-600 text-white rounded-md font-medium"
            >
                Sign In
            </button>
        </form>
    );
}
