import { AttributeType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // =====================
    // 1️⃣ Sections
    // =====================
    const electronics = await prisma.section.create({
        data: { title: "Electronics", slug: "electronics" },
    });

    const pets = await prisma.section.create({
        data: { title: "Pets", slug: "pets" },
    });

    const home = await prisma.section.create({
        data: { title: "Home & Garden", slug: "home-garden" },
    });

    // =====================
    // 2️⃣ Categories
    // =====================

    // --- Electronics ---
    const computers = await prisma.category.create({
        data: {
            title: "Computers",
            slug: "computers",
            sectionId: electronics.id,
        },
    });

    const keyboards = await prisma.category.create({
        data: {
            title: "Keyboards",
            slug: "keyboards",
            sectionId: electronics.id,
            parentId: computers.id,
        },
    });

    const monitors = await prisma.category.create({
        data: {
            title: "Monitors",
            slug: "monitors",
            sectionId: electronics.id,
        },
    });

    // --- Pets ---
    const dogs = await prisma.category.create({
        data: { title: "Dogs", slug: "dogs", sectionId: pets.id },
    });

    const catFood = await prisma.category.create({
        data: { title: "Cat Food", slug: "cat-food", sectionId: pets.id },
    });

    // --- Home & Garden ---
    const furniture = await prisma.category.create({
        data: { title: "Furniture", slug: "furniture", sectionId: home.id },
    });

    const gardening = await prisma.category.create({
        data: { title: "Gardening Tools", slug: "gardening-tools", sectionId: home.id },
    });

    // =====================
    // 3️⃣ Attributes
    // =====================

    // Electronics -> Computers
    const ramAttr = await prisma.attribute.create({
        data: {
            name: "ram",
            label: "RAM",
            type: AttributeType.NUMBER,
            categoryId: computers.id,
        },
    });

    const brandAttr = await prisma.attribute.create({
        data: {
            name: "brand",
            label: "Brand",
            type: AttributeType.SELECT,
            categoryId: computers.id,
        },
    });

    // Pets -> Dogs
    const breedAttr = await prisma.attribute.create({
        data: {
            name: "breed",
            label: "Breed",
            type: AttributeType.TEXT,
            categoryId: dogs.id,
        },
    });

    // Home & Garden -> Furniture
    const materialAttr = await prisma.attribute.create({
        data: {
            name: "material",
            label: "Material",
            type: AttributeType.SELECT,
            categoryId: furniture.id,
        },
    });

    // =====================
    // 4️⃣ Products
    // =====================

    // Computers
    const laptop = await prisma.product.create({
        data: {
            title: "Gaming Laptop",
            description: "Powerful laptop for gaming",
            price: 1500,
            categoryId: computers.id,
        },
    });

    // Keyboards
    const mechKeyboard = await prisma.product.create({
        data: {
            title: "Mechanical Keyboard",
            description: "RGB Mechanical Keyboard",
            price: 120,
            categoryId: keyboards.id,
        },
    });

    // Monitors
    const monitor = await prisma.product.create({
        data: {
            title: "27 inch Monitor",
            description: "4K monitor",
            price: 400,
            categoryId: monitors.id,
        },
    });

    // Dogs
    const golden = await prisma.product.create({
        data: {
            title: "Golden Retriever",
            description: "Friendly dog",
            price: 800,
            categoryId: dogs.id,
        },
    });

    // Furniture
    const chair = await prisma.product.create({
        data: {
            title: "Office Chair",
            description: "Ergonomic chair",
            price: 200,
            categoryId: furniture.id,
        },
    });

    // =====================
    // 5️⃣ AttributeValues
    // =====================

    await prisma.attributeValue.createMany({
        data: [
            { productId: laptop.id, attributeId: ramAttr.id, value: "16" },
            { productId: laptop.id, attributeId: brandAttr.id, value: "Asus" },

            { productId: golden.id, attributeId: breedAttr.id, value: "Golden Retriever" },

            { productId: chair.id, attributeId: materialAttr.id, value: "Wood" },
        ],
    });

    console.log("✅ Seed completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
