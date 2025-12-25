"use client";

import { MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function ChatButton({ user }: { user: any | null }) {
    const router = useRouter();
    const handleClick = () => {
        if (!user) {
            console.log("Потрібно увійти в акаунт");
            return;
        }

        router.push("/account/chat");
    };
    return (
        <button
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            onClick={handleClick}>
            <MessageCircle className="size-5" />
            <div>Chat</div>
        </button>
    );
}
