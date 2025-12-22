import { GET_PRODUCTS_BY_CATEGORY_PATH } from "@/src/graphql/queries/listings";
import { fetchGraphQL } from "@/src/lib/graphql";
import { print } from "graphql";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function page({
    params,
}: {
    params: Promise<{
        category: string[];
    }>;
}) {
    const { category } = await params;

    const path = category.join("/");

    const listings = await fetchGraphQL(print(GET_PRODUCTS_BY_CATEGORY_PATH), {
        path,
    });

    return (
        <div className="grid grid-cols-4 gap-0 w-full">
            {listings.productsByCategoryPath.map((listing) => (
                <Link
                    href={`/p/${listing.id}`}
                    key={listing.id}
                    className="min-h-[300px] border border-t-0 border-l-0 p-3 flex flex-col gap-2 ">
                    <div className="relative">
                        <Image
                            src={"/product.jpg"}
                            alt="product"
                            width={400}
                            height={400}
                            className="h-[200px] w-full object-contain rounded-md"></Image>

                        <button className="absolute top-2 right-2 bg-white p-2 rounded-full group">
                            <HeartIcon className="stroke-blue-600 group-hover:fill-blue-600 group-hover:scale-110 transition" />
                        </button>
                    </div>
                    <div className="line-clamp-2">{listing.title}</div>
                    <div className="px-2.5 py-1 text-sm rounded-md w-fit font-medium bg-blue-600 text-white">
                        {listing.condition}
                    </div>
                    <div className="pt-2">
                        <div className="text-sm text-zinc-500">
                            {listing.location} - {listing.createdAt}
                        </div>
                        <div className="font-bold text-[18px]">${listing.price}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
