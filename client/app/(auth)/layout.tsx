import { AuthTabs } from "@/src/features/auth";
import { AppleIcon, FacebookIcon, GoogleIcon } from "@/src/shared/icons";

const socialBtn =
    "flex items-center justify-center gap-3 p-2.5 border-2 border-zinc-400 hover:border-blue-700 hover:bg-blue-600/5 rounded-md font-medium transition";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-blue-600 flex justify-center items-center p-4 h-screen">
            <div className="flex flex-col gap-5 p-4 bg-white w-[420px] rounded-md">
                <div className="flex flex-col gap-2">
                    <button className={socialBtn}>
                        <FacebookIcon className="w-[35px] h-[35px]" />
                        Continue with Facebook
                    </button>
                    <button className={socialBtn}>
                        <AppleIcon className="w-[30px] h-[30px]" />
                        Continue with Apple
                    </button>
                    <button className={socialBtn}>
                        <GoogleIcon className="w-[30px] h-[30px]" />
                        Continue with Google
                    </button>
                </div>

                <div className="flex gap-3 items-center w-full">
                    <hr className="w-full" />
                    <div className="font-semibold text-zinc-500">OR</div>
                    <hr className="w-full" />
                </div>

                <AuthTabs />

                {children}
            </div>
        </div>
    );
}
