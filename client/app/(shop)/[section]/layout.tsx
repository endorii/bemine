import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SearchInput } from "@/src/shared/components";
import { WrapperContainer } from "@/src/shared/wrappers";
import { Grid2x2Icon, Grid3X3Icon, HeartIcon, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function layout({ children }: { children: string }) {
    return (
        <div className="flex flex-col gap-6">
            <SearchInput />
            <WrapperContainer className="flex flex-col gap-5">
                <div className="flex gap-2 text-sm items-center text-zinc-600">
                    <HomeIcon className="size-5" /> / section / category /
                    subcategory
                </div>

                <div>
                    <h1 className="text-3xl font-semibold mb-4">
                        Subcategory name
                    </h1>

                    <ul className="grid grid-cols-10 gap-10 mb-6 justify-between">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                            <div key={n}>
                                <Image
                                    src={"/product.jpg"}
                                    alt="product"
                                    width={150}
                                    height={150}
                                    className="w-[100px] h-[100px] object-contain"
                                ></Image>
                                <li>Computers {n}</li>
                            </div>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="sticky top-[72px] z-2 flex items-center gap-3 justify-between bg-white py-1.5 border-b text-sm">
                        <div className="">Found 5031 products</div>
                        <div className="flex gap-2 items-center h-full">
                            <Select>
                                <SelectTrigger className="w-[180px] h-11.5! text-[16px] shadow-none">
                                    <SelectValue
                                        defaultValue="rating"
                                        placeholder="Rating"
                                    />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem
                                        value="rating"
                                        className="text-[16px]!"
                                    >
                                        Rating
                                    </SelectItem>
                                    <SelectItem
                                        value="cheap"
                                        className="text-[16px]!"
                                    >
                                        Cheaper first
                                    </SelectItem>
                                    <SelectItem
                                        value="expensive"
                                        className="text-[16px]!"
                                    >
                                        Expensive first
                                    </SelectItem>
                                    <SelectItem
                                        value="new"
                                        className="text-[16px]!"
                                    >
                                        New
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="p-1 gap-2 border rounded-md flex items-center ">
                                <button className="bg-black/5 p-1 rounded-md">
                                    <Grid2x2Icon className="stroke-black size-7" />
                                </button>

                                <button className="">
                                    <Grid3X3Icon className="stroke-zinc-400 size-7" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/5 border-r">
                            <div className="sticky top-[140px] flex flex-col h-[calc(100vh-145px)] pr-3 overflow-y-hidden hover:overflow-y-auto">
                                <FilterBlock />
                                <FilterBlock />
                                <FilterBlock />
                            </div>
                        </div>
                        <section className="grid grid-cols-4 gap-0 w-full">
                            {children}
                            {Array.from({ length: 23 }).map((_, i) => (
                                <Link
                                    href={"/p/123"}
                                    key={i}
                                    className="min-h-[300px] border border-t-0 border-l-0 p-3 flex flex-col gap-2 "
                                >
                                    <div className="relative">
                                        <Image
                                            src={"/product.jpg"}
                                            alt="product"
                                            width={400}
                                            height={400}
                                            className="h-[200px] w-full object-contain rounded-md"
                                        ></Image>

                                        <button className="absolute top-2 right-2 bg-white p-2 rounded-full group">
                                            <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                        </button>
                                    </div>
                                    <div className="line-clamp-2">
                                        ARZOPA Portable Monitor 16.1&quot; sRGB,
                                        1920×1080 FHD IPS, HDMI/Type-C/USB-C
                                        Support, Eye-Care Gaming Screen, for
                                        Laptop/PC/Mac/PS3/4/5 /Xbox [Energy
                                        Efficiency Class A]
                                    </div>
                                    <div className="px-2.5 py-1 text-sm rounded-md w-fit font-medium bg-blue-600 text-white">
                                        Used
                                    </div>
                                    <div className="pt-2">
                                        <div className="text-sm text-zinc-500">
                                            NY, New York - Today, 10:32
                                        </div>
                                        <div className="font-bold text-[18px]">
                                            $ 400
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </section>
                    </div>
                </div>
            </WrapperContainer>
        </div>
    );
}

function FilterBlock() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="font-medium mb-2">
                    Brand
                </AccordionTrigger>
                <AccordionContent className="max-h-[250px] overflow-y-hidden hover:overflow-y-auto space-y-1">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <li key={i} className="flex gap-1">
                            <input type="checkbox" /> <div>{i}</div>
                        </li>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
