import { GET_LISTING_PAGE } from "@/src/graphql/queries/listings";
import { fetchGraphQL } from "@/src/lib/graphql";
import { Breadcrumbs, SearchInput } from "@/src/shared/components";
import { WrapperContainer } from "@/src/shared/wrappers";
import { print } from "graphql";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ExpandIcon,
    FlagIcon,
    HeartIcon,
    MapPinIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function page({
    params,
}: {
    params: Promise<{
        product: string;
    }>;
}) {
    const { product } = await params;

    const data = await fetchGraphQL(print(GET_LISTING_PAGE), {
        id: product,
    });

    const breadcrumbs = data.listingPageData.breadcrumbs;
    const listing = data.listingPageData.listing;

    return (
        <div>
            <SearchInput />
            <WrapperContainer className="flex flex-col gap-5">
                <div>
                    <div className="flex items-center gap-5 py-3">
                        <button className="flex gap-1 items-center text-white px-4 py-3 bg-blue-600 rounded-3xl font-medium">
                            <ChevronLeftIcon />
                            <div>Go back</div>
                        </button>
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                    <div className="flex gap-2 w-full relative">
                        <div className="flex flex-col gap-4 w-4/6 ">
                            <div className="relative">
                                <Image
                                    src={"/product.jpg"}
                                    width={1000}
                                    height={1000}
                                    alt="product"
                                    className="h-[600px] object-contain"></Image>
                                <button className="absolute bottom-[30px] right-[30px] group bg-white p-2 rounded-full">
                                    <ExpandIcon className="group-hover:scale-110 transition" />
                                </button>
                            </div>
                            <div className="flex flex-col gap-7 bg-blue-600/5 rounded-xl p-4">
                                <div className="flex flex-wrap gap-2">
                                    {listing.values.map((value, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="shadow-md text-sm font-medium rounded-sm px-3 py-1.5 bg-white">
                                                {value.attribute.label}: {value.value}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="text-2xl font-semibold ">Description</div>
                                    <div>{listing.description}</div>
                                    <hr />
                                    <div className="flex items-center gap-1 justify-between text-sm text-zinc-600">
                                        <div>ID: {listing.id}</div>
                                        <div>Views: {listing.views}</div>
                                        <button className="flex gap-2 items-center text-red-500 text-base px-2 py-1 border-b-transparent border-b-2 border-b-transparent hover:border-red-500">
                                            <FlagIcon />
                                            <div className="font-medium">Report</div>
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
                                            {listing.user.name}
                                        </div>
                                        <div className="text-zinc-600 text-sm">
                                            On Beemine since {listing.user.createdAt}
                                        </div>
                                        <div className="text-zinc-600 text-sm">
                                            {listing.user.isOnline
                                                ? "Online"
                                                : `Online ${listing.user.lastSeenAt || "recently"}`}
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
                                        Posted {listing.createdAt}
                                    </div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-2xl font-medium">{listing.title}</div>
                                <div className="text-2xl font-semibold">${listing.price}</div>
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
                                <div className="text-lg font-semibold">Seller</div>
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
                                            {listing.user.name}
                                        </div>
                                        <div className="text-zinc-600 text-sm">
                                            On Beemine since {listing.user.createdAt}
                                        </div>
                                        <div className="text-zinc-600 text-sm">
                                            {listing.user.isOnline
                                                ? "Online"
                                                : `Online ${listing.user.lastSeenAt || "recently"}`}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <Link
                                        href={"#"}
                                        className="flex justify-center items-center gap-1 p-2 font-medium">
                                        <div>All author`s ads</div>
                                        <ChevronRightIcon />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 bg-blue-600/5 rounded-xl p-4">
                                <div className="text-lg font-semibold">Location</div>
                                <div className="flex gap-2 justify-between">
                                    <div className="flex gap-2">
                                        <MapPinIcon />
                                        <div>
                                            <div>
                                                <div className="text-lg font-medium">
                                                    {listing.location}
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
                                            loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <div className="text-2xl font-medium">All author`s ads</div>
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
                                    <div className="font-medium">Cat Regdoll (girl)</div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">$ 20</div>
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
                                    <div className="font-medium">Cat Regdoll (girl)</div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">$ 20</div>
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
                                    <div className="font-medium">Cat Regdoll (girl)</div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">$ 20</div>
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
                                    <div className="font-medium">Cat Regdoll (girl)</div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">$ 20</div>
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
                                    <div className="font-medium">Cat Regdoll (girl)</div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">$ 20</div>
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
                                    <div className="font-medium">Cat Regdoll (girl)</div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">$ 20</div>
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
                                    <div className="font-medium">Cat Regdoll (girl)</div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">$ 20</div>
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
                                    <div className="font-medium">Cat Regdoll (girl)</div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">$ 20</div>
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
                                    <div className="font-medium">Cat Regdoll (girl)</div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">$ 20</div>
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
                                    <div className="font-medium">Cat Regdoll (girl)</div>
                                    <button className="group">
                                        <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                                    </button>
                                </div>
                                <div className="text-xl font-semibold">$ 20</div>
                                <div className="text-sm text-zinc-600">
                                    <div>New York, NY</div>
                                    <div>Today at 12:34</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div> */}
            </WrapperContainer>
        </div>
    );
}
