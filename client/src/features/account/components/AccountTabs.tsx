"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
    { href: "/account", label: "Ads", exact: true },
    { href: "/account/chat", label: "Chat" },
    { href: "/account/ratings", label: "Ratings" },
    { href: "/account/profile", label: "Profile" },
    { href: "/account/settings", label: "Settings" },
];

export function AccountTabs() {
    const pathname = usePathname();

    return (
        <div className="flex justify-between pt-2">
            {tabs.map(({ href, label, exact }) => {
                const isActive = exact ? pathname === href : pathname.startsWith(href);

                return (
                    <Link
                        key={href}
                        href={href}
                        className={`w-full text-center p-2 pb-4 font-medium rounded-t-xl transition ${
                            isActive
                                ? "bg-white text-black"
                                : "text-white hover:bg-white hover:text-black"
                        }`}>
                        {label}
                    </Link>
                );
            })}
        </div>
    );
}
