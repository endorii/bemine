"use client";

import { WrapperContainer } from "@/src/shared/wrappers";
import { Bell, MessageCircle, UserRound } from "lucide-react";

export function ShopHeader() {
    return (
        <div className="flex flex-col">
            <header className="fixed top-0 left-0 w-full bg-white z-10">
                <WrapperContainer className="flex items-center justify-between gap-10 w-full min-h-18">
                    <div className="text-[22px] font-bartle w-fit">bemine</div>

                    <div className="flex gap-5 items-center w-fit whitespace-nowrap">
                        <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <Bell className="size-5" />
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <MessageCircle className="size-5" />
                            <div>Chat</div>
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3 font-medium border-2 border-transparent hover:border-blue-700 rounded-3xl text-white hover:text-blue-700 bg-blue-600 hover:bg-transparent transition">
                            Place an announcement
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <UserRound className="size-5" />
                            <div>Log In</div>
                        </button>
                    </div>
                </WrapperContainer>
            </header>
        </div>
    );
}
