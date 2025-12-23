import { Args, Query, Resolver } from "@nestjs/graphql";
import { ListingService } from "./listing.service";
import { ListingPage } from "./models/listing-page.model";
import { Listing } from "./models/listing.model";

@Resolver(() => Listing)
export class ListingResolver {
    constructor(private readonly listingService: ListingService) {}

    @Query(() => ListingPage, { name: "listingPageData", nullable: true })
    getListingPageData(@Args("id") id: string) {
        return this.listingService.getListingPageData(id);
    }
}
