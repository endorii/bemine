import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { SectionResolver } from "./section.resolver";
import { SectionService } from "./section.service";

@Module({
    imports: [PrismaModule],
    providers: [SectionResolver, SectionService],
})
export class SectionModule {}
