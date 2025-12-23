import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AttributeValue } from "src/attribute-value/models/attribute-value.model";
import { Category } from "src/category/models/category.model";
import { User } from "src/user/models/user.model";
import { ConditionTypeEnum } from "../enums/condition-type.enum";
import { StatusTypeEnum } from "../enums/status-type.enum";

@ObjectType()
export class Listing {
    @Field()
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

    @Field(() => [String])
    images: string[];

    @Field()
    views: number;

    @Field()
    location: string;

    @Field(() => ConditionTypeEnum)
    condition: ConditionTypeEnum;

    @Field(() => StatusTypeEnum)
    status: StatusTypeEnum;

    @Field(() => [AttributeValue])
    values: AttributeValue[];

    @Field()
    userId: string;

    @Field(() => User)
    user: User;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
