import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Attribute } from "src/attribute/models/attribute.model";
import { Listing } from "src/product/models/listing.model";

@ObjectType()
export class Category {
    @Field(() => ID)
    id: string;

    @Field()
    slug: string;

    @Field()
    title: string;

    @Field()
    path: string;

    @Field({ nullable: true })
    banner?: string;

    @Field(() => [Listing])
    listings: Listing[];

    @Field(() => [Attribute])
    attributes: Attribute[];

    @Field({ nullable: true })
    parentId?: string;

    @Field(() => Category, { nullable: true })
    parent?: Category;

    @Field(() => [Category])
    children: Category[];

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
