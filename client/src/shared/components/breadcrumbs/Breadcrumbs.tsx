import { HomeIcon } from "lucide-react";
import Link from "next/link";

type Breadcrumb = {
    id: string;
    title: string;
    slug: string;
};

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
    return (
        <div className="flex gap-1.5 text-sm items-center text-zinc-600">
            <Link href="/">
                <HomeIcon className="size-5" />
            </Link>

            {breadcrumbs.map((breadcrumb, index) => {
                const path =
                    "/" +
                    breadcrumbs
                        .slice(0, index + 1)
                        .map((b) => b.slug)
                        .join("/");

                return (
                    <span key={breadcrumb.id} className="flex items-center gap-1">
                        /
                        <Link href={path} className="hover:underline">
                            {breadcrumb.title}
                        </Link>
                    </span>
                );
            })}
        </div>
    );
}
