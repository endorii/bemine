import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ListingService {
    constructor(private readonly prisma: PrismaService) {}

    async getListingPageData(id: string) {
        const listing = await this.prisma.listing.findUnique({
            where: {
                id,
            },
            include: {
                category: true,
                values: {
                    include: {
                        attribute: true,
                    },
                },
                user: true,
            },
        });

        if (!listing) throw new NotFoundException("Listing with this id not found");

        const breadcrumbs = await this.buildBreadcrumbs(listing.categoryId);

        return { breadcrumbs, listing };
    }

    private async buildBreadcrumbs(
        categoryId: string
    ): Promise<Array<{ id: string; title: string; slug: string }>> {
        const breadcrumbs: Array<{ id: string; title: string; slug: string }> = [];

        let currentId: string | null = categoryId;

        while (currentId) {
            const category: {
                id: string;
                title: string;
                slug: string;
                parentId: string | null;
            } | null = await this.prisma.category.findUnique({
                where: { id: currentId },
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    parentId: true,
                },
            });

            if (!category) break;

            breadcrumbs.unshift({
                id: category.id,
                title: category.title,
                slug: category.slug,
            });

            currentId = category.parentId;
        }

        return breadcrumbs;
    }
}
