export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-blue-600 flex justify-center items-center p-4 h-screen">
            <div className="flex flex-col gap-5 px-6 py-4 bg-white w-[420px] rounded-md max-h-[90vh] overflow-y-auto shadow-2xl">
                {children}
            </div>
        </div>
    );
}
