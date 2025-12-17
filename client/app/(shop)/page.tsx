import { Promo, SectionsList } from "@/src/features/homepage";
import { GET_SECTIONS } from "@/src/graphql/queries/sections";
import { fetchGraphQL } from "@/src/lib/graphql";
import { SearchInput } from "@/src/shared/components";
import { print } from "graphql";

export default async function CategoriesSection() {
    const data = await fetchGraphQL(print(GET_SECTIONS));

    return (
        <div className="flex flex-col">
            <SearchInput />
            <SectionsList sections={data.section} />
            <Promo />
        </div>
    );
}
