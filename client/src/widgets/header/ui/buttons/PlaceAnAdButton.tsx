"use client";

import { useRouter } from "next/navigation";

export function PlaceAnAdButton({ user }: { user: any | null }) {
    const router = useRouter();
    const handleClick = () => {
        if (!user) {
            console.log("Потрібно увійти в акаунт");
            return;
        }

        router.push("/new");
    };
    return (
        <button
            className="flex items-center gap-2 px-5 py-3 font-medium border-2 border-transparent hover:border-blue-700 rounded-3xl text-white hover:text-blue-700 bg-blue-600 hover:bg-transparent transition"
            onClick={handleClick}>
            Place an ad
        </button>
    );
}
