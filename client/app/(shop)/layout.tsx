import { WrapperContainer } from "@/src/shared/wrappers";
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
            <footer className="bg-zinc-100 mt-20">
                <WrapperContainer className="py-14">
                    <div className="grid grid-cols-6 gap-10 text-sm text-zinc-700">
                        {/* About */}
                        <div className="col-span-2 space-y-4">
                            <h3 className="text-lg font-semibold text-zinc-900">
                                About bemine
                            </h3>
                            <p>
                                All online listings in your area — find exactly
                                what you’re looking for on{" "}
                                <strong>bemine</strong>.
                            </p>
                            <p>
                                Post an ad easily and quickly. Buy or sell
                                almost anything directly from people nearby.
                            </p>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="font-semibold text-zinc-900 mb-3">
                                Categories
                            </h3>
                            <ul className="space-y-2">
                                <li>Real Estate</li>
                                <li>Cars & Vehicles</li>
                                <li>Jobs</li>
                                <li>Electronics</li>
                                <li>Home & Garden</li>
                                <li>Fashion</li>
                            </ul>
                        </div>

                        {/* Popular searches */}
                        <div>
                            <h3 className="font-semibold text-zinc-900 mb-3">
                                Popular searches
                            </h3>
                            <ul className="space-y-2">
                                <li>Auto electrician</li>
                                <li>Apartment rent</li>
                                <li>Refrigerator repair</li>
                                <li>Yamaha R1</li>
                                <li>Pit bike 125</li>
                                <li>Books</li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div>
                            <h3 className="font-semibold text-zinc-900 mb-3">
                                Help & Support
                            </h3>
                            <ul className="space-y-2">
                                <li>Help Center</li>
                                <li>Contact Us</li>
                                <li>Safety Rules</li>
                                <li>How to Buy & Sell</li>
                            </ul>
                        </div>

                        {/* Business */}
                        <div>
                            <h3 className="font-semibold text-zinc-900 mb-3">
                                Business
                            </h3>
                            <ul className="space-y-2">
                                <li>Paid Services</li>
                                <li>Advertising</li>
                                <li>Business on bemine</li>
                                <li>Press & Media</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 border-t pt-6 flex items-center justify-between text-xs text-zinc-500">
                        <div>© 2025 bemine. All rights reserved.</div>
                        <div className="flex gap-6">
                            <span>Terms of Use</span>
                            <span>Privacy Policy</span>
                            <span>Sitemap</span>
                        </div>
                    </div>
                </WrapperContainer>
            </footer>
        </div>
    );
}
