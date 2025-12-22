import { Resolver } from "@nestjs/graphql";

import { FavoritesService } from "./favorites.service";
import { Favorite } from "./models/favorite.model";

@Resolver(() => Favorite)
export class FavoritesResolver {
    constructor(private readonly favoritesService: FavoritesService) {}
}
