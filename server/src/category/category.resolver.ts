import { Args, Query, Resolver } from "@nestjs/graphql";
import { Listing } from "src/listing/models/listing.model";
import { CategoryService } from "./category.service";
import { Catalog } from "./models/catalog.model";
import { Category } from "./models/category.model";

@Resolver(() => Category)
export class CategoryResolver {
    constructor(private readonly categoryService: CategoryService) {}

    @Query(() => [Category], { name: "categories" })
    findAll() {
        return this.categoryService.findAll();
    }

    @Query(() => Catalog, { name: "catalog" })
    getCatalogData(@Args("categorySlug") categorySlug: string) {
        return this.categoryService.getCatalogData(categorySlug);
    }

    @Query(() => [Listing], { name: "productsByCategoryPath" })
    getProductsByCategoryPath(@Args("path") path: string) {
        return this.categoryService.getProductsByCategoryPath(path);
    }
}
