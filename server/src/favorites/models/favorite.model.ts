import { Field, ObjectType } from "@nestjs/graphql";
import { Listing } from "src/product/models/listing.model";
import { User } from "src/user/models/user.model";

@ObjectType()
export class Favorite {
    @Field()
    id: string;

    @Field()
    listingId: string;

    @Field(() => Listing)
    listing: Listing;

    @Field()
    userId: string;

    @Field(() => User)
    user: User;
}
