import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SectionResolver } from "./section.resolver";
import { SectionService } from "./section.service";

@Module({
    imports: [PrismaService],
    providers: [SectionResolver, SectionService],
})
export class SectionModule {}
