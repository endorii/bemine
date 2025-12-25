import { UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogInButton({ user }: { user: any | null }) {
    const router = useRouter();
    const handleClick = () => {
        if (!user) {
            router.push("/signin");
            return;
        }

        router.push("/account");
    };

    console.log(user);

    return (
        <button
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            onClick={handleClick}>
            <UserRound className="size-5" />
            <div>{user ? user.name : "Log In"}</div>
        </button>
    );
}
