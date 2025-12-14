import { WrapperContainer } from "@/src/shared/wrappers";
import { BellIcon, MessageCircleIcon, UserRoundIcon } from "lucide-react";

export function ShopHeader() {
    return (
        <header className="fixed top-0 left-0 w-full py-2">
            <WrapperContainer className="flex items-center justify-between">
                <div className="text-[32px] font-semibold">bemine</div>
                <div className="">
                    <input
                        type="text"
                        placeholder="Search of any product or brand..."
                        className="px-7 py-3 rounded-3xl outline-0 border-2 border-green-700 min-w-[700px] bg-lime-600/3"
                    />
                </div>
                <div className="flex gap-5 items-center">
                    <button className="flex items-center gap-2">
                        <BellIcon />
                    </button>
                    <button className="flex items-center gap-2">
                        <MessageCircleIcon />
                        <div>Chat</div>
                    </button>

                    <button className="flex items-center gap-2 px-5 py-3 font-medium border-2 border-transparent hover:border-green-700 rounded-3xl text-white hover:text-green-700 bg-green-600 hover:bg-transparent transition">
                        Place an announcement
                    </button>
                    <button className="flex items-center gap-2">
                        <UserRoundIcon />
                        <div>Log In</div>
                    </button>
                </div>
            </WrapperContainer>
        </header>
    );
}
