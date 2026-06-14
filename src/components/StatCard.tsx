import type { ReactNode } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";


type Props = {
    title: string;
    value: string;
    change: number;
    isPositive?: boolean;
    children: ReactNode
}

export const StatCard = ({ title, value, change, isPositive, children }:Props) => {
    return (
        <>
            <div className="dark:bg-slate-700 bg-[#c6c6c6] p-4 h-full rounded-md">
                {/* up stat flex */}
                <div className="flex justify-start items-center gap-4">
                    <span className="text-2xl dark:text-gray-200 font-bold"><sup className="text-sm align-super dark:text-gray-500 font-bold">$</sup>{value}</span>
                    <span className={`${isPositive ? 'dark:bg-green-600/40 bg-green-500/50 dark:text-green-500 text-green-900' : 'bg-red-600/40 text-red-500'} px-2 py-1 rounded-md  text-sm`}>
                        <div className="flex">
                            {isPositive ? <IoIosArrowRoundUp size={18}/> :<IoIosArrowRoundDown size={20}/>} {change}%
                        </div>
                    </span>
                </div>
                {/* middle text */}
                <p className="dark:text-gray-300/50 text-mist-600 text-sm">{title}</p>

                {/* down stat flex  */}
               {children}

            </div>
        </>
    );
};


