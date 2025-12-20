"use client";

import { usePathname, useRouter } from "next/navigation";

export function AuthTabs() {
    const pathname = usePathname();
    const router = useRouter();
    const isSignin = pathname === "/signin";
    const isSignup = pathname === "/signup";

    const activeTab = "border-b-2 border-b-blue-600 text-blue-700";
    const inactiveTab = "text-zinc-500 hover:text-zinc-800";
    const tabBase = "w-1/2 text-center p-2 font-semibold transition";

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    return (
        <div className="flex w-full border-b border-zinc-200">
            <button
                onClick={() => handleNavigate("/signin")}
                className={`${tabBase} ${isSignin ? activeTab : inactiveTab}`}
            >
                Sign In
            </button>
            <button
                onClick={() => handleNavigate("/signup")}
                className={`${tabBase} ${isSignup ? activeTab : inactiveTab}`}
            >
                Sign Up
            </button>
        </div>
    );
}
