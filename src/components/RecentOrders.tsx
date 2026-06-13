import React from "react";

export const RecentOrders = ({title, children}) => {
    return (
        <div>
            <div className="bg-slate-700 p-4 h-100 rounded-md">
                <div className="flex justify-between">
                    <h2 className="text-white text-2xl">{title}</h2>
                    <button className="border border-gray-500 text-gray-200 w-8 h-8 rounded-sm flex justify-center">
                        <span className="">...</span>
                    </button>
                </div>

                {/* recentOrders down */}
                {children}
            </div>
        </div>
    );
};
