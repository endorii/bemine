import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Breadcrumb } from "src/common/models/breadcrumb.model";
import { Category } from "./category.model";

@ObjectType()
export class FilterValue {
    @Field()
    value: string;

    @Field()
    label: string;

    @Field(() => Int)
    count: number;
}

@ObjectType()
export class Filter {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    label: string;

    @Field()
    type: string;

    @Field(() => [FilterValue])
    values: FilterValue[];
}

@ObjectType()
export class Catalog {
    @Field(() => [Category])
    subcategories: Category[];

    @Field(() => Int)
    totalProducts: number;

    @Field(() => [Filter])
    filters: Filter[];

    @Field(() => [Breadcrumb])
    breadcrumbs: Breadcrumb[];
}
