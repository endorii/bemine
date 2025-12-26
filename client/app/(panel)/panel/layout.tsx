import { LogoIcon } from "@/src/shared/icons";
import { HomeIcon } from "lucide-react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex pr-3 h-screen">
            <div className="flex flex-col items-center gap-5 w-[60px]">
                <div className="font-bartle">
                    <LogoIcon className="w-[60px]" />
                </div>
                <ul className="flex flex-col items-center gap-2">
                    <li>
                        <div className="bg-zinc-100 p-2 rounded-md">
                            <HomeIcon />
                        </div>
                    </li>
                    <li>
                        <div className="bg-zinc-100 p-2 rounded-md">
                            <HomeIcon />
                        </div>
                    </li>
                    <li>
                        <div className="bg-zinc-100 p-2 rounded-md">
                            <HomeIcon />
                        </div>
                    </li>
                    <li>
                        <div className="bg-zinc-100 p-2 rounded-md">
                            <HomeIcon />
                        </div>
                    </li>
                    <li>
                        <div className="bg-zinc-100 p-2 rounded-md">
                            <HomeIcon />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-full py-3">
                <div className="pb-3 px-8">
                    <input
                        type="text"
                        placeholder="Search in panel..."
                        className="border rounded-md w-[400px] px-3.5 py-1.5"
                    />
                </div>
                <div className="bg-white shadow-[inset_0px_0px_20px_0px_rgba(0,0,0,0.1)] h-full rounded-md overflow-y-auto w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
