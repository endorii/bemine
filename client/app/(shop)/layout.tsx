import { ShopHeader } from "@/src/widgets/header";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ShopHeader />
            {children}
        </div>
    );
}
