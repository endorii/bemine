import { AccountTabs } from "@/src/features/account/components";
import { WrapperContainer } from "@/src/shared/wrappers";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="bg-blue-600">
                <WrapperContainer>
                    <AccountTabs />
                </WrapperContainer>
            </div>
            <WrapperContainer>{children}</WrapperContainer>
        </div>
    );
}
