import { Field, ObjectType } from "@nestjs/graphql";
import { Breadcrumb } from "src/common/models/breadcrumb.model";
import { Listing } from "./listing.model";

@ObjectType()
export class ListingPage {
    @Field(() => Listing)
    listing: Listing;

    @Field(() => [Breadcrumb])
    breadcrumbs: Breadcrumb[];
}
