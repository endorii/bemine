import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AttributeValueModule } from "./attribute-value/attribute-value.module";
import { AttributeModule } from "./attribute/attribute.module";
import { CategoryModule } from "./category/category.module";
import { FavoritesModule } from "./favorites/favorites.module";
import { ListingModule } from "./listing/listing.module";
import { NotificationModule } from "./notification/notification.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        PrismaModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            graphiql: true,
            autoSchemaFile: join(process.cwd(), "src/schema.gql"),
            sortSchema: true,
        }),
        CategoryModule,
        ListingModule,
        AttributeModule,
        AttributeValueModule,
        UserModule,
        FavoritesModule,
        NotificationModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
