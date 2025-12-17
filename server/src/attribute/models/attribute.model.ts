import { Field, ID, ObjectType } from "@nestjs/graphql";
import { AttributeValue } from "src/attribute-value/models/attribute-value.model";
import { Category } from "src/category/models/category.model";
import { AttributeTypeEnum } from "../enums/attribute-type.enum";

@ObjectType()
export class Attribute {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    label: string;

    @Field(() => AttributeTypeEnum)
    type: AttributeTypeEnum;

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
