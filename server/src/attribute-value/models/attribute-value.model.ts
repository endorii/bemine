import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Attribute } from "src/attribute/models/attribute.model";
import { Listing } from "src/product/models/listing.model";

@ObjectType()
export class AttributeValue {
    @Field(() => ID)
    id: string;

    @Field()
    productId: string;

    @Field(() => Listing)
    listing: Listing;

    @Field()
    attributeId: string;

    @Field(() => Attribute)
    attribute: Attribute;

    @Field()
    value: string;

    @Field()
    createdAt: Date;
}
