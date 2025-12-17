import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SectionService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return await this.prisma.section.findMany({
            include: {
                categories: true,
            },
        });
    }
}
