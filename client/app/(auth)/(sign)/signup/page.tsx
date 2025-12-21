"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
    CircleCheckIcon,
    CircleXIcon,
    EyeIcon,
    EyeOffIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const phoneRegex = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
);
const signupSchema = z.object({
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(phoneRegex, "Invalid phone number"),
    password: z
        .string()
        .min(9, "Minimum 9 symbols")
        .regex(/[A-Z]/, "Must contain uppercase letter")
        .regex(/[a-z]/, "Must contain lowercase letter")
        .regex(/[0-9]/, "Must contain number"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
    const [showPass, setShowPass] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            phone: "",
            password: "",
        },
    });

    const password = useWatch({
        control,
        name: "password",
    });

    const passwordChecks = {
        length: password?.length >= 9,
        uppercase: /[A-Z]/.test(password ?? ""),
        lowercase: /[a-z]/.test(password ?? ""),
        number: /[0-9]/.test(password ?? ""),
    };

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const onSubmit = async (data: SignupFormData) => {
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
                        className="absolute top-[50%] translate-y-[-50%] right-5 "
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
                <div className="mt-2 text-sm">
                    <div className="mb-1 text-zinc-700">
                        Your password should contain:
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <CheckItem
                            valid={passwordChecks.length}
                            label="9 or more symbols"
                        />
                        <CheckItem
                            valid={passwordChecks.uppercase}
                            label="Uppercase letter"
                        />
                        <CheckItem
                            valid={passwordChecks.lowercase}
                            label="Lowercase letter"
                        />
                        <CheckItem
                            valid={passwordChecks.number}
                            label="Minimum 1 number"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <div className="text-sm text-zinc-700">
                    By creating a profile on Bemine, you agree to the{" "}
                    <Link
                        href={"#"}
                        className="font-semibold hover:underline hover:text-blue-600"
                    >
                        Terms of Use
                    </Link>
                </div>

                <div className="flex gap-3 items-center text-xs text-zinc-700">
                    <input type="checkbox" name="" id="" className="size-8" />
                    <div>
                        Yes, I want to receive information about Bemine news and
                        promotions.
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="p-3 bg-blue-600 text-white rounded-md font-medium"
            >
                Sign Up
            </button>
        </form>
    );
}

const CheckItem = ({ valid, label }: { valid: boolean; label: string }) => (
    <div className="flex items-center gap-2">
        {valid ? (
            <CircleCheckIcon className="size-4 text-blue-600" />
        ) : (
            <CircleXIcon className="size-4 text-red-600" />
        )}
        <span className={valid ? "text-blue-600" : "text-red-600"}>
            {label}
        </span>
    </div>
);
