import { ShopFooter } from "@/src/widgets/footer";
import { ShopHeader } from "@/src/widgets/header/ui/components";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = { name: "Andrew" };

    return (
        <div>
            <ShopHeader user={user} />
            <div className="pt-[80px] pb-[30px]">{children}</div>
            <ShopFooter />
        </div>
    );
}
