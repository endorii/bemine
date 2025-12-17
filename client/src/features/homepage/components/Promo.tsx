import { WrapperContainer } from "@/src/shared/wrappers";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

export function Promo() {
    return (
        <WrapperContainer className="flex flex-col gap-5 items-center justify-center p-40 bg-blue-600/5">
            <div className="text-2xl font-bartle">bemine</div>
            <div className="max-w-[800px] text-center text-blue-950/70">
                All online ads in USA on Bemine - here you will find what you
                were looking for! By clicking on the{" "}
                <span className="text-blue-600 font-bartle">
                    &quot;Place an announcement&quot;
                </span>{" "}
                button, you can place an ad on any topic easily and quickly.
                With the help of the Bemine service, you can buy or sell almost
                anything from hand to hand.
            </div>
            <div className="flex flex-col gap-3 justify-center items-center max-w-[800px] text-blue-950/70">
                <div>Bemine communities on social networks:</div>
                <div className="flex gap-3">
                    <div className="p-3 bg-blue-600 rounded-full border-2 border-transparent hover:bg-white hover:border-black group transition">
                        <InstagramIcon className="stroke-white size-7 group-hover:stroke-black" />
                    </div>
                    <div className="p-3 bg-blue-600 rounded-full border-2 border-transparent hover:bg-white hover:border-black group transition">
                        <YoutubeIcon className="stroke-white size-7 group-hover:stroke-black" />
                    </div>
                    <div className="p-3 bg-blue-600 rounded-full border-2 border-transparent hover:bg-white hover:border-black group transition">
                        <FacebookIcon className="stroke-white size-7 group-hover:stroke-black" />
                    </div>
                </div>
            </div>
        </WrapperContainer>
    );
}
