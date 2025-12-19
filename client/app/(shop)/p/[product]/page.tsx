import { SearchInput } from "@/src/shared/components";
import { WrapperContainer } from "@/src/shared/wrappers";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ExpandIcon,
    FlagIcon,
    HeartIcon,
    HomeIcon,
    MapPinIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
    return (
        <div>
            <SearchInput />
            <WrapperContainer className="flex flex-col gap-5">
                <div>
                    <div className="flex items-center gap-5 py-5">
                        <button className="flex gap-1 items-center text-white px-4 py-3 bg-blue-600 rounded-3xl font-medium">
                            <ChevronLeftIcon />
                            <div>Go back</div>
                        </button>
                        <div className="flex gap-2 text-sm items-center text-zinc-600">
                            <HomeIcon className="size-5" /> / section / category
                            / subcategory
                        </div>
                    </div>
                    <div className="flex gap-2 w-full relative">
                        <div className="flex flex-col gap-4 w-4/6 ">
                            <div className="relative">
                                <Image
                                    src={"/product.jpg"}
                                    width={1000}
                                    height={1000}
                                    alt="product"
                                    className="h-[600px] object-contain"
                                ></Image>
                                <button className="absolute bottom-[30px] right-[30px] group bg-white p-2 rounded-full">
                                    <ExpandIcon className="group-hover:scale-110 transition" />
                                </button>
                            </div>
                            <div className="flex flex-col gap-7 bg-blue-600/5 rounded-xl p-4">
                                <div className="flex flex-wrap gap-2">
                                    <div className="border border-blue-600/10 text-sm rounded-sm px-5 py-1.5 bg-white">
                                        type 2
                                    </div>
                                    <div className="border border-blue-600/10 text-sm rounded-sm px-5 py-1.5 bg-white">
                                        type 1
                                    </div>
                                    <div className="border border-blue-600/10 text-sm rounded-sm px-5 py-1.5 bg-white">
                                        type 3
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="text-2xl font-semibold ">
                                        Description
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ullam quas ab nobis
                                        fugiat animi nihil laboriosam placeat
                                        fugit molestias, ea beatae voluptates.
                                        Vel autem iure molestiae soluta culpa,
                                        aut asperiores. Dolore consectetur alias
                                        assumenda natus, ullam reprehenderit
                                        quia eligendi omnis numquam officia
                                        error recusandae fugiat nihil
                                        necessitatibus voluptates non illo
                                        sapiente deleniti, quisquam voluptatem
                                        facilis porro suscipit corporis? Nisi,
                                        nulla? Harum suscipit cumque totam
                                        numquam, at pariatur hic, vero ab rerum
                                        dolore explicabo nesciunt corporis
                                        laborum accusamus distinctio. Labore,
                                        perspiciatis? Eligendi et consequatur
                                        possimus aspernatur placeat quaerat,
                                        laboriosam error ipsum? Ipsa, officia
                                        corporis. Fugit ipsa dolorum temporibus
                                        eius, tempora quas cum quam quis
                                        possimus eaque beatae inventore maxime.
                                        Tempora ex voluptates ad numquam porro
                                        vitae reprehenderit beatae recusandae
                                        repudiandae eius. Quia amet maiores
                                        placeat doloremque eaque quas!
                                        Distinctio, aspernatur nobis sequi quam
                                        aut natus ullam totam ratione reiciendis
                                        voluptatem atque quaerat repudiandae
                                        soluta. Repellat, magni. Ducimus
                                        molestias laborum praesentium aliquid.
                                    </div>
                                    <hr />
                                    <div className="flex items-center gap-1 justify-between text-sm text-zinc-600">
                                        <div>ID: 723849723894723</div>
                                        <div>Views: 239</div>
                                        <button className="flex gap-2 items-center text-red-500 text-base px-2 py-1 border-b-transparent border-b-2 border-b-transparent hover:border-red-500">
                                            <FlagIcon />
                                            <div className="font-medium">
                                                Report
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 justify-between items-center bg-blue-600/5 rounded-xl p-4 w-full">
                                <div className="flex gap-3">
                                    <div>
                                        <Image
                                            src={"/product.jpg"}
                                            width={100}
                                            height={100}
                                            alt="avatar"
                                            className="h-[50px] w-[50px] object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-xl font-medium">
                                            John Doe
                                        </div>
                                        <div className="text-zinc-600 text-sm">
                                            On Beemine since April 2004
                                        </div>
                                        <div className="text-zinc-600 text-sm">
                                            Online 19 December 2025
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-2/5">
                                    <button className="p-3 w-full text-md bg-blue-600 text-white font-medium rounded-md">
                                        Message
                                    </button>
                                    <button className="p-3 w-full text-md border-2 border-blue-600 text-blue-700 font-medium rounded-md">
                                        Show phone
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-2/6 sticky top-20 h-full">
                            <div className="flex flex-col gap-3 bg-blue-600/5 rounded-xl p-4">
                                <div className="flex gap-1 justify-between items-center">
                                    <div className="text-zinc-600 text-sm">
                                        Posted today at 07:07
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-2xl font-medium">
                                    Cat Regdoll (girl)
                                </div>
                                <div className="text-2xl font-semibold">
                                    45 000 грн.
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <button className="p-3 w-full text-md bg-blue-600 text-white font-medium rounded-md">
                                        Message
                                    </button>
                                    <button className="p-3 w-full text-md border-2 border-blue-600 text-blue-700 font-medium rounded-md">
                                        Show phone
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 bg-blue-600/5 rounded-xl p-4">
                                <div className="text-lg font-semibold">
                                    Seller
                                </div>
                                <div className="flex gap-3">
                                    <div>
                                        <Image
                                            src={"/product.jpg"}
                                            width={100}
                                            height={100}
                                            alt="avatar"
                                            className="h-[50px] w-[50px] object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-xl font-medium">
                                            John Doe
                                        </div>
                                        <div className="text-zinc-600 text-sm">
                                            On Beemine since April 2004
                                        </div>
                                        <div className="text-zinc-600 text-sm">
                                            Online 19 December 2025
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <Link
                                        href={"#"}
                                        className="flex justify-center items-center gap-1 p-2 font-medium"
                                    >
                                        <div>All author`s announcements</div>
                                        <ChevronRightIcon />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 bg-blue-600/5 rounded-xl p-4">
                                <div className="text-lg font-semibold">
                                    Location
                                </div>
                                <div className="flex gap-2 justify-between">
                                    <div className="flex gap-2">
                                        <MapPinIcon />
                                        <div>
                                            <div>
                                                <div className="text-lg font-medium">
                                                    New York, NY
                                                </div>
                                            </div>
                                            <div className="text-zinc-600 text-sm">
                                                20km from you
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5076.287750772724!2d-74.22787132760502!3d40.84160742408648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sbe!4v1766137922823!5m2!1suk!2sbe"
                                            className="rounded-md"
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <div className="text-2xl font-medium">
                            All author`s announcements
                        </div>
                        <Link href={"#"} className="underline">
                            Look all
                        </Link>
                    </div>
                    <ul className="flex gap-3">
                        <li className="flex flex-col bg-blue-600/5 rounded-md p-2">
                            <Image
                                src={"/product.jpg"}
                                height={400}
                                width={400}
                                alt="product"
                                className="h-[200px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-col gap-2 p-3">
                                <div className="flex gap-1 justify-between">
                                    <div className="font-medium">
                                        Cat Regdoll (girl)
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">
                                    $ 20
                                </div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col bg-blue-600/5 rounded-md p-2">
                            <Image
                                src={"/product.jpg"}
                                height={400}
                                width={400}
                                alt="product"
                                className="h-[200px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-col gap-2 p-3">
                                <div className="flex gap-1 justify-between">
                                    <div className="font-medium">
                                        Cat Regdoll (girl)
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">
                                    $ 20
                                </div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col bg-blue-600/5 rounded-md p-2">
                            <Image
                                src={"/product.jpg"}
                                height={400}
                                width={400}
                                alt="product"
                                className="h-[200px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-col gap-2 p-3">
                                <div className="flex gap-1 justify-between">
                                    <div className="font-medium">
                                        Cat Regdoll (girl)
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">
                                    $ 20
                                </div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col bg-blue-600/5 rounded-md p-2">
                            <Image
                                src={"/product.jpg"}
                                height={400}
                                width={400}
                                alt="product"
                                className="h-[200px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-col gap-2 p-3">
                                <div className="flex gap-1 justify-between">
                                    <div className="font-medium">
                                        Cat Regdoll (girl)
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">
                                    $ 20
                                </div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col bg-blue-600/5 rounded-md p-2">
                            <Image
                                src={"/product.jpg"}
                                height={400}
                                width={400}
                                alt="product"
                                className="h-[200px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-col gap-2 p-3">
                                <div className="flex gap-1 justify-between">
                                    <div className="font-medium">
                                        Cat Regdoll (girl)
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">
                                    $ 20
                                </div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <div className="text-2xl font-medium">Similar ads</div>
                    </div>
                    <ul className="flex gap-3">
                        <li className="flex flex-col bg-blue-600/5 rounded-md p-2">
                            <Image
                                src={"/product.jpg"}
                                height={400}
                                width={400}
                                alt="product"
                                className="h-[200px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-col gap-2 p-3">
                                <div className="flex gap-1 justify-between">
                                    <div className="font-medium">
                                        Cat Regdoll (girl)
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">
                                    $ 20
                                </div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col bg-blue-600/5 rounded-md p-2">
                            <Image
                                src={"/product.jpg"}
                                height={400}
                                width={400}
                                alt="product"
                                className="h-[200px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-col gap-2 p-3">
                                <div className="flex gap-1 justify-between">
                                    <div className="font-medium">
                                        Cat Regdoll (girl)
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">
                                    $ 20
                                </div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col bg-blue-600/5 rounded-md p-2">
                            <Image
                                src={"/product.jpg"}
                                height={400}
                                width={400}
                                alt="product"
                                className="h-[200px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-col gap-2 p-3">
                                <div className="flex gap-1 justify-between">
                                    <div className="font-medium">
                                        Cat Regdoll (girl)
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">
                                    $ 20
                                </div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col bg-blue-600/5 rounded-md p-2">
                            <Image
                                src={"/product.jpg"}
                                height={400}
                                width={400}
                                alt="product"
                                className="h-[200px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-col gap-2 p-3">
                                <div className="flex gap-1 justify-between">
                                    <div className="font-medium">
                                        Cat Regdoll (girl)
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">
                                    $ 20
                                </div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col bg-blue-600/5 rounded-md p-2">
                            <Image
                                src={"/product.jpg"}
                                height={400}
                                width={400}
                                alt="product"
                                className="h-[200px] object-cover rounded-t-md"
                            />
                            <div className="flex flex-col gap-2 p-3">
                                <div className="flex gap-1 justify-between">
                                    <div className="font-medium">
                                        Cat Regdoll (girl)
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">
                                    $ 20
                                </div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </WrapperContainer>
        </div>
    );
}
