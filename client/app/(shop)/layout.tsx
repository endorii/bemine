import { ShopHeader } from "@/src/widgets/header";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ShopHeader />
            <div className="pt-[70px]">{children}</div>
        </div>
    );
}
