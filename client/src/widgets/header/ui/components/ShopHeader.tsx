"use client";

import { LogoIcon } from "@/src/shared/icons";
import { WrapperContainer } from "@/src/shared/wrappers";
import Link from "next/link";
import { ChatButton, LogInButton, NotificationsButton, PlaceAnAdButton } from "../buttons";

export function ShopHeader({ user }: { user: any | null }) {
    return (
        <div className="flex flex-col">
            <header className="fixed top-0 left-0 w-full bg-white z-10">
                <WrapperContainer className="flex items-center justify-between gap-10 w-full min-h-18">
                    <Link href={"/"} className="flex gap-1 items-center">
                        <LogoIcon className="w-[70px]" />
                        <div className="text-[22px] font-bartle w-fit">bemine</div>
                    </Link>

                    <div className="flex gap-5 items-center w-fit whitespace-nowrap">
                        <NotificationsButton user={user} />
                        <ChatButton user={user} />
                        <PlaceAnAdButton user={user} />
                        <LogInButton user={user} />
                    </div>
                </WrapperContainer>
            </header>
        </div>
    );
}
