import { ShopFooter } from "@/src/widgets/footer";
import { ShopHeader } from "@/src/widgets/header";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ShopHeader />
            <div className="pt-[80px] pb-[30px]">{children}</div>
            <ShopFooter />
        </div>
    );
}
