import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { AttributeValue } from "src/attribute-value/models/attribute-value.model";
import { Category } from "src/category/models/category.model";

@ObjectType()
export class Product {
    @Field(() => ID)
    id: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => Int)
    price: number;

    @Field()
    categoryId: string;

    @Field(() => Category)
    category: Category;

    @Field(() => [AttributeValue])
    values: AttributeValue[];

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
