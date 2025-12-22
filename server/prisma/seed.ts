import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Start seeding...");

    // USERS
    const users = await prisma.user.createMany({
        data: [
            {
                email: "john.doe@example.com",
                phone: "+1234567890",
                password: "hashedpassword1",
                name: "John",
                surname: "Doe",
                role: "SELLER",
            },
            {
                email: "jane.smith@example.com",
                phone: "+1987654321",
                password: "hashedpassword2",
                name: "Jane",
                surname: "Smith",
                role: "MODERATOR",
            },
        ],
        skipDuplicates: true,
    });

    // CATEGORIES
    const electronics = await prisma.category.create({
        data: {
            title: "Electronics",
            slug: "electronics",
            path: "electronics",
            banner: null,
            children: {
                create: [
                    { title: "Laptops", slug: "laptops", path: "electronics/laptops" },
                    { title: "Phones", slug: "phones", path: "electronics/phones" },
                ],
            },
        },
        include: {
            children: true, // <- тепер children буде доступний
        },
    });

    const fashion = await prisma.category.create({
        data: {
            title: "Fashion",
            slug: "fashion",
            path: "fashion",
            banner: null,
            children: {
                create: [
                    {
                        title: "Men",
                        slug: "men",
                        path: "fashion/men",
                    },
                    {
                        title: "Women",
                        slug: "women",
                        path: "fashion/women",
                    },
                ],
            },
        },
    });

    // ATTRIBUTES
    const laptopBrand = await prisma.attribute.create({
        data: {
            name: "brand",
            label: "Brand",
            type: "SELECT",
            categoryId: electronics.children[0].id, // laptops
        },
    });

    const laptopRam = await prisma.attribute.create({
        data: {
            name: "ram",
            label: "RAM",
            type: "NUMBER",
            categoryId: electronics.children[0].id, // laptops
        },
    });

    // LISTINGS
    const listings = await prisma.listing.createMany({
        data: [
            {
                title: "MacBook Pro 16",
                description: "Powerful laptop from Apple",
                price: 2500,
                images: ["macbook1.jpg", "macbook2.jpg"],
                location: "New York",
                status: "ACTIVE",
                categoryId: electronics.children[0].id,
                userId: (await prisma.user.findFirst({ where: { email: "john.doe@example.com" } }))!
                    .id,
            },
            {
                title: "Dell XPS 13",
                description: "Lightweight and powerful",
                price: 1200,
                images: ["dellxps1.jpg"],
                location: "San Francisco",
                status: "ACTIVE",
                categoryId: electronics.children[0].id,
                userId: (await prisma.user.findFirst({
                    where: { email: "jane.smith@example.com" },
                }))!.id,
            },
        ],
    });

    // ATTRIBUTE VALUES
    const macbookListing = await prisma.listing.findFirst({ where: { title: "MacBook Pro 16" } });
    const dellListing = await prisma.listing.findFirst({ where: { title: "Dell XPS 13" } });

    if (macbookListing && dellListing) {
        await prisma.attributeValue.createMany({
            data: [
                {
                    listingId: macbookListing.id,
                    attributeId: laptopBrand.id,
                    value: "Apple",
                },
                {
                    listingId: dellListing.id,
                    attributeId: laptopBrand.id,
                    value: "Dell",
                },
                {
                    listingId: macbookListing.id,
                    attributeId: laptopRam.id,
                    value: "16",
                },
                {
                    listingId: dellListing.id,
                    attributeId: laptopRam.id,
                    value: "8",
                },
            ],
        });
    }

    console.log("Seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
