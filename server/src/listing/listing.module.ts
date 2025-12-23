import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ListingResolver } from "./listing.resolver";
import { ListingService } from "./listing.service";

@Module({
    imports: [PrismaModule],
    providers: [ListingResolver, ListingService],
})
export class ListingModule {}
