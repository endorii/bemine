"use client";

import {
    ChevronRightIcon,
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
} from "lucide-react";
import { useState } from "react";

import { SearchInput } from "@/src/shared/components";
import { CATEGORIES } from "@/src/shared/data/CATEGORIES";
import { WrapperContainer } from "@/src/shared/wrappers";
import Link from "next/link";

export default function CategoriesSection() {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (name: string) => {
        setOpenCategory((prev) => (prev === name ? null : name));
    };

    return (
        <div className="flex flex-col">
            <SearchInput />

            <WrapperContainer className="flex flex-col py-[70px] gap-[50px]">
                <h2 className="text-[32px] font-bold text-center ">
                    Categories on bemine
                </h2>

                <div className="grid grid-cols-8 gap-y-6 gap-x-1 justify-items-center">
                    {CATEGORIES.map((cat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-2 text-center cursor-pointer w-full"
                            onClick={() => toggleCategory(cat.name)}
                        >
                            <div className="bg-blue-50 p-10 rounded-full flex items-center justify-center">
                                <cat.icon className="size-12 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium">
                                {cat.name}
                            </span>

                            {openCategory === cat.name && (
                                <div className="mt-2 flex flex-col rounded-md shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.1)] w-full text-[14px] text-left">
                                    <Link
                                        href={"#"}
                                        className="flex gap-1 items-center p-3 group hover:bg-blue-50/50 font-semibold py-4"
                                    >
                                        <ChevronRightIcon className="size-5 group-hover:stroke-blue-600" />
                                        <div className="group-hover:text-blue-600">
                                            See all ads in{" "}
                                            <span className="font-normal text-zinc-500 underline">
                                                {cat.name}
                                            </span>
                                        </div>
                                    </Link>
                                    <hr className="border-t border-zinc-100" />
                                    {cat.subcategories.map((sub, idx) => (
                                        <Link
                                            href={"#"}
                                            key={idx}
                                            className="flex gap-1 items-center p-3 group hover:bg-blue-50/50"
                                        >
                                            <ChevronRightIcon className="size-5 group-hover:stroke-blue-600" />
                                            <div className="group-hover:text-blue-600">
                                                {sub}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </WrapperContainer>

            <WrapperContainer className="flex flex-col gap-5 items-center justify-center p-40 bg-blue-600/5">
                <div className="text-2xl font-bartle">bemine</div>
                <div className="max-w-[800px] text-center text-blue-950/70">
                    All online ads in USA on Bemine - here you will find what
                    you were looking for! By clicking on the{" "}
                    <span className="text-blue-600 font-bartle">
                        &quot;Place an announcement&quot;
                    </span>{" "}
                    button, you can place an ad on any topic easily and quickly.
                    With the help of the Bemine service, you can buy or sell
                    almost anything from hand to hand.
                </div>
                <div className="flex flex-col gap-3 justify-center items-center max-w-[800px] text-blue-950/70">
                    <div>Bemine communities on social networks:</div>
                    <div className="flex gap-3">
                        <div className="p-3 bg-blue-600 rounded-full border-2 border-transparent hover:bg-white hover:border-black group transition">
                            <InstagramIcon className="stroke-white size-7 group-hover:stroke-black" />
                        </div>
                        <div className="p-3 bg-blue-600 rounded-full border-2 border-transparent hover:bg-white hover:border-black group transition">
                            <YoutubeIcon className="stroke-white size-7 group-hover:stroke-black" />
                        </div>
                        <div className="p-3 bg-blue-600 rounded-full border-2 border-transparent hover:bg-white hover:border-black group transition">
                            <FacebookIcon className="stroke-white size-7 group-hover:stroke-black" />
                        </div>
                    </div>
                </div>
            </WrapperContainer>
        </div>
    );
}
