import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Attribute } from "src/attribute/models/attribute.model";
import { Product } from "src/product/models/product.model";
import { Section } from "src/section/models/section.model";

@ObjectType()
export class Category {
    @Field(() => ID)
    id: string;

    @Field()
    slug: string;

    @Field()
    title: string;

    @Field()
    sectionId: string;

    @Field(() => Section)
    section: Section;

    @Field(() => [Product])
    products: Product[];

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
