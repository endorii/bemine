import { Promo, SectionsList } from "@/src/features/homepage";
import { GET_CATEGORIES } from "@/src/graphql/queries/categories";
import { fetchGraphQL } from "@/src/lib/graphql";
import { SearchInput } from "@/src/shared/components";
import { print } from "graphql";

export default async function CategoriesSection() {
    const data = await fetchGraphQL(print(GET_CATEGORIES));

    console.log(data);

    return (
        <div className="flex flex-col">
            <SearchInput />
            <SectionsList categories={data.categories} />
            <Promo />
        </div>
    );
}
