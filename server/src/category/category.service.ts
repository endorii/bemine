import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoryService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.category.findMany({
            where: { parentId: null },
            include: { children: true },
        });
    }

    async getCatalogData(categorySlug: string) {
        const category = await this.prisma.category.findFirst({
            where: { slug: categorySlug },
            include: { children: true },
        });

        if (!category) {
            throw new NotFoundException(`Category with slug "${categorySlug}" not found`);
        }

        const categoryIds = await this.getCategoryAndChildrenIds(category.id);

        const breadcrumbs = await this.buildBreadcrumbs(category.id);

        const totalProducts = await this.prisma.listing.count({
            where: {
                categoryId: { in: categoryIds },
                status: "ACTIVE",
            },
        });

        const attributes = await this.prisma.attribute.findMany({
            where: {
                categoryId: { in: categoryIds },
            },
        });

        const filters = await Promise.all(
            attributes.map(async (attr) => {
                const values = await this.prisma.attributeValue.groupBy({
                    by: ["value"],
                    where: {
                        attributeId: attr.id,
                        listing: {
                            status: "ACTIVE",
                        },
                    },
                    _count: {
                        value: true,
                    },
                });

                return {
                    id: attr.id,
                    name: attr.name,
                    label: attr.label,
                    type: attr.type,
                    values: values.map((v) => ({
                        value: v.value,
                        label: v.value,
                        count: v._count.value,
                    })),
                };
            })
        );

        return {
            breadcrumbs,
            subcategories: category.children,
            totalProducts,
            filters,
        };
    }

    private async getCategoryAndChildrenIds(categoryId: string): Promise<string[]> {
        const ids: string[] = [categoryId];

        const children = await this.prisma.category.findMany({
            where: { parentId: categoryId },
            select: { id: true },
        });

        for (const child of children) {
            const childIds = await this.getCategoryAndChildrenIds(child.id);
            ids.push(...childIds);
        }

        return ids;
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

    async getProductsByCategoryPath(path: string) {
        const category = await this.prisma.category.findUnique({
            where: {
                path,
            },
        });

        if (!category) throw new NotFoundException("Category not found");

        const ids = await this.getCategoryAndChildrenIds(category.id);

        return await this.prisma.listing.findMany({
            where: {
                categoryId: { in: ids },
                status: "ACTIVE",
            },
        });
    }
}
