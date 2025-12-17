import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Attribute } from "src/attribute/models/attribute.model";
import { Product } from "src/product/models/product.model";

@ObjectType()
export class AttributeValue {
    @Field(() => ID)
    id: string;

    @Field()
    productId: string;

    @Field(() => Product)
    product: Product;

    @Field()
    attributeId: string;

    @Field(() => Attribute)
    attribute: Attribute;

    @Field()
    value: string;

    @Field()
    createdAt: Date;
}
