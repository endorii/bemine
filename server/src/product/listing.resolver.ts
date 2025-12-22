import { Resolver } from "@nestjs/graphql";
import { ListingService } from "./listing.service";
import { Listing } from "./models/listing.model";

@Resolver(() => Listing)
export class ListingResolver {
    constructor(private readonly listingService: ListingService) {}

    // @Query(() => [Product], { name: "product" })
    // findAll() {
    //     return this.productService.findAll();
    // }
}
