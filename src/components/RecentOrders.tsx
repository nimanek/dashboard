


type Props = {
    title: string;
    children: React.ReactNode;
}

export const RecentOrders = ({title, children}: Props) => {
    return (
        <div>
            <div className="dark:bg-slate-700 bg-[#c6c6c6] p-4 h-100 rounded-md">
                <div className="flex justify-between">
                    <h2 className="dark:text-white text-2xl">{title}</h2>
                    <button className="border border-gray-500 w-8 h-8 rounded-sm flex justify-center">
                        <span className="text-gray-800">...</span>
                    </button>
                </div>

                {/* recentOrders down */}
                {children}
            </div>
        </div>
    );
};
