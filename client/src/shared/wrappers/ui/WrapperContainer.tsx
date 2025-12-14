export function WrapperContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={`px-50 ${className ?? null}`}>{children}</div>;
}
