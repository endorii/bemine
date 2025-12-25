"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bell } from "lucide-react";

export function NotificationsButton({ user }: { user: any | null }) {
    const handleClick = () => {
        if (!user) {
            console.log("Потрібно увійти в акаунт");
            return;
        }
    };

    if (!user) {
        return (
            <button
                onClick={handleClick}
                className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Bell className="size-5" />
            </button>
        );
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <Bell className="size-5" />
                </button>
            </PopoverTrigger>

            <PopoverContent className="w-64">Notifications list</PopoverContent>
        </Popover>
    );
}
