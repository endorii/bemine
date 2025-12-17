import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AttributeValueModule } from "./attribute-value/attribute-value.module";
import { AttributeModule } from "./attribute/attribute.module";
import { CategoryModule } from "./category/category.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ProductModule } from "./product/product.module";
import { SectionModule } from "./section/section.module";

@Module({
    imports: [
        PrismaModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            graphiql: true,
            autoSchemaFile: join(process.cwd(), "src/schema.gql"),
            sortSchema: true,
        }),
        SectionModule,
        CategoryModule,
        ProductModule,
        AttributeModule,
        AttributeValueModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
