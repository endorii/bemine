import { Resolver } from "@nestjs/graphql";
import { Product } from "./models/product.model";
import { ProductService } from "./product.service";

@Resolver(() => Product)
export class ProductResolver {
    constructor(private readonly productService: ProductService) {}

    // @Query(() => [Product], { name: "product" })
    // findAll() {
    //     return this.productService.findAll();
    // }
}
