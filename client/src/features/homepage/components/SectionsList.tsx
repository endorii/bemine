"use client";

import { WrapperContainer } from "@/src/shared/wrappers";
import { BedIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SectionsList({ sections }: { sections: any }) {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (name: string) => {
        setOpenCategory((prev) => (prev === name ? null : name));
    };

    // const clientQuery = useQuery(GET_SECTIONS);

    return (
        <WrapperContainer className="flex flex-col py-17.5 gap-12.5">
            <h2 className="text-[32px] font-bold text-center ">
                Categories on bemine
            </h2>

            <div className="grid grid-cols-8 gap-y-6 gap-x-1 justify-items-center">
                {sections.map((section: any) => (
                    <div
                        key={section.id}
                        className="flex flex-col items-center gap-2 text-center cursor-pointer w-full"
                        onClick={() => toggleCategory(section.title)}
                    >
                        <div className="bg-blue-50 p-10 rounded-full flex items-center justify-center">
                            <BedIcon className="size-12 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium">
                            {section.title}
                        </span>

                        {openCategory === section.title && (
                            <div className="mt-2 flex flex-col rounded-md shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)] w-full text-[14px] text-left">
                                <Link
                                    href={section.slug}
                                    className="flex gap-1 items-center p-3 group hover:bg-blue-50/50 font-semibold py-4"
                                >
                                    <ChevronRightIcon className="size-5 group-hover:stroke-blue-600" />
                                    <div className="group-hover:text-blue-600">
                                        See all ads in{" "}
                                        <span className="font-normal text-zinc-500 underline">
                                            {section.title}
                                        </span>
                                    </div>
                                </Link>
                                <hr className="border-t border-zinc-100" />
                                {section.categories.map((category) => (
                                    <Link
                                        href={`${section.slug}/${category.slug}`}
                                        key={category.id}
                                        className="flex gap-1 items-center p-3 group hover:bg-blue-50/50"
                                    >
                                        <ChevronRightIcon className="size-5 group-hover:stroke-blue-600" />
                                        <div className="group-hover:text-blue-600">
                                            {category.title}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </WrapperContainer>
    );
}
