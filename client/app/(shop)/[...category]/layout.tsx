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
import { CategoriesList } from "@/src/features/category/components/CategoriesList";
import { GET_CATALOG_DATA } from "@/src/graphql/queries/catalog";
import { fetchGraphQL } from "@/src/lib/graphql";
import { Breadcrumbs, SearchInput } from "@/src/shared/components";
import { WrapperContainer } from "@/src/shared/wrappers";
import { print } from "graphql";
import { Grid2x2Icon, Grid3X3Icon } from "lucide-react";

export default async function layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{
        category: string[];
    }>;
}) {
    const { category } = await params;

    const categorySlug = category[category.length - 1];

    const data = await fetchGraphQL(print(GET_CATALOG_DATA), {
        categorySlug,
    });

    const catalogData = data.catalog;

    console.log(catalogData);

    return (
        <div className="flex flex-col gap-6">
            <SearchInput />
            <WrapperContainer className="flex flex-col gap-5">
                <Breadcrumbs breadcrumbs={catalogData.breadcrumbs} />
                {catalogData.subcategories.length > 0 && (
                    <CategoriesList subcategories={catalogData.subcategories} />
                )}

                <div>
                    <div className="sticky top-[72px] z-2 flex items-center gap-3 justify-between bg-white py-1.5 border-b text-sm">
                        <div className="">
                            Found {catalogData.totalProducts}{" "}
                            {catalogData.totalProducts === 1 ? "product" : "products"}{" "}
                        </div>
                        <div className="flex gap-2 items-center h-full">
                            <Select>
                                <SelectTrigger className="w-[180px] h-11.5! text-[16px] shadow-none">
                                    <SelectValue defaultValue="rating" placeholder="Rating" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="rating" className="text-[16px]!">
                                        Rating
                                    </SelectItem>
                                    <SelectItem value="cheap" className="text-[16px]!">
                                        Cheaper first
                                    </SelectItem>
                                    <SelectItem value="expensive" className="text-[16px]!">
                                        Expensive first
                                    </SelectItem>
                                    <SelectItem value="new" className="text-[16px]!">
                                        New
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="p-1 gap-2 border rounded-md flex items-center ">
                                <button className="bg-black/5 p-1 rounded-md">
                                    <Grid2x2Icon className="stroke-black size-7" />
                                </button>

                                <button>
                                    <Grid3X3Icon className="stroke-zinc-400 size-7" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-1/5 border-r">
                            <div className="sticky top-[140px] flex flex-col max-h-[calc(100vh-145px)] pr-3 overflow-y-hidden hover:overflow-y-auto">
                                {catalogData.filters.map((filter) => {
                                    return <FilterBlock filter={filter} key={filter.id} />;
                                })}
                            </div>
                        </div>
                        <div className="w-full">{children}</div>
                    </div>
                </div>
            </WrapperContainer>
        </div>
    );
}

function FilterBlock({ filter }: { filter: any }) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="font-medium mb-2">{filter.label}</AccordionTrigger>
                <AccordionContent className="max-h-[250px] overflow-y-hidden hover:overflow-y-auto space-y-1">
                    {filter.values.map((value, i) => (
                        <li key={i} className="flex gap-1">
                            <input type="checkbox" /> <div>{value.value}</div>
                        </li>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
