import Image from "next/image";
import Link from "next/link";

export function CategoriesList({ subcategories }: { subcategories: any[] }) {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4">Subcategories</h1>

            <ul className="grid grid-cols-10 gap-10 mb-6">
                {subcategories.map((subcategory) => {
                    return (
                        <Link
                            key={subcategory.id}
                            href={`/${subcategory.path}`}
                            className="flex flex-col items-center text-center">
                            <Image
                                src="/product.jpg"
                                alt={subcategory.title}
                                width={150}
                                height={150}
                                className="w-[100px] h-[100px] object-contain"
                            />
                            <li>{subcategory.title}</li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}
