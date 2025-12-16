import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { PrismaModule } from "./prisma/prisma.module";
import { SectionModule } from "./section/section.module";
import { SectionModule } from './section/section.module';

@Module({
    imports: [
        PrismaModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), "src/schema.gql"),
            sortSchema: true,
        }),
        SectionModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
