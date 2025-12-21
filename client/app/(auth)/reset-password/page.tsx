"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const resetPasswordSchema = z
    .object({
        password: z.string().min(8, "Minimum 8 symbols"),
        confirmPassword: z.string().min(8, "Minimum 8 symbols"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ForgotPasswordPage() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const router = useRouter();

    const [showPass, setShowPass] = useState<boolean>(false);

    useEffect(() => {
        if (!token) {
            router.push("/auth");
            return;
        }
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const onSubmit = async (data: ResetPasswordFormData) => {
        console.log({ ...data, token });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
                <div className="text-3xl font-medium">Reset your password</div>
                <div className="text-sm p-3 bg-blue-400/15 rounded">
                    The newly entered password will be used as the updated
                    primary password.
                </div>
            </div>

            <div className="flex flex-col gap-0.5">
                <label className="text-sm text-zinc-600 font-semibold">
                    New password
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

            <div className="flex flex-col gap-0.5">
                <label className="text-sm text-zinc-600 font-semibold">
                    Confirm password
                </label>
                <input
                    type="password"
                    className={`p-3 rounded bg-blue-600/5 outline-0 border-b-2 border-transparent focus:border-blue-600 focus:rounded-b-none ${
                        errors.confirmPassword?.message ? "border-red-600!" : ""
                    }`}
                    {...register("confirmPassword")}
                />
                <div className="text-red-600 text-sm mt-1">
                    {errors.confirmPassword?.message}
                </div>
            </div>

            <button
                type="submit"
                className="p-3 bg-blue-600 text-white rounded-md font-medium"
            >
                Reset password
            </button>
        </form>
    );
}
