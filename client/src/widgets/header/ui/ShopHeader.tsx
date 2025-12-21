"use client";

import { LogoIcon } from "@/src/shared/icons";
import { WrapperContainer } from "@/src/shared/wrappers";
import { Bell, MessageCircle, UserRound } from "lucide-react";
import Link from "next/link";

export function ShopHeader() {
    return (
        <div className="flex flex-col">
            {/* <div className="fixed flex items-center justify-center text-center bg-blue-700 h-[40px] w-full z-10 text-white text- font-bartle">
                Give second chance for things or find yours
            </div> */}
            <header className="fixed top-0 left-0 w-full bg-white z-10">
                <WrapperContainer className="flex items-center justify-between gap-10 w-full min-h-18">
                    <Link href={"/"} className="flex gap-1 items-center">
                        <LogoIcon className="w-[70px]" />
                        <div className="text-[22px] font-bartle w-fit">
                            bemine
                        </div>
                    </Link>

                    <div className="flex gap-5 items-center w-fit whitespace-nowrap">
                        <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <Bell className="size-5" />
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <MessageCircle className="size-5" />
                            <div>Chat</div>
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3 font-medium border-2 border-transparent hover:border-blue-700 rounded-3xl text-white hover:text-blue-700 bg-blue-600 hover:bg-transparent transition">
                            Place an ad
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
