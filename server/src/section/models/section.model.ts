import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Category } from "src/category/models/category.model";

@ObjectType()
export class Section {
    @Field(() => ID)
    id: string;

    @Field()
    slug: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    banner?: string;

    @Field(() => [Category])
    categories: Category[];

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
