"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const forgotPasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
});

type ForgotPaswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: ForgotPaswordFormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
                <div className="text-3xl font-medium">Forgot password?</div>
                <div className="text-sm p-3 bg-blue-400/15 rounded">
                    What email is associated with your Bemine profile? We will
                    send a confirmation link to reset your password there.
                </div>
            </div>
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

            {/* if error on server */}
            {/* <div className="text-red-600 text-sm p-3 bg-red-50 rounded">
                Invalid email or password
            </div> */}

            <button
                type="submit"
                className="p-3 bg-blue-600 text-white rounded-md font-medium"
            >
                Send message
            </button>
        </form>
    );
}
