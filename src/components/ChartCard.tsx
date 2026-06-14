import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

export const ChartCard = ({children, title,change,isPositive, desc, price,downDesc}) => {
    return (
        <div>
            <div className="dark:bg-slate-700 bg-[#c6c6c6] p-4 h-100 rounded-md">
                <div className="flex justify-between">
                <h2 className="dark:text-white text-2xl">{title}</h2>
                <button className="border border-gray-500 dark:text-gray-200 w-8 h-8 rounded-sm flex justify-center"><span className="">...</span></button>
                </div>
                <p className="dark:text-gray-300/50 text-gray-600 text-sm mb-8">{desc}</p>
                {/* up chartCard flex */}
                <div className="flex justify-start items-center gap-4">
                    <span className="text-2xl dark:text-gray-200 font-bold">
                        <sup className="text-sm align-super dark:text-gray-500 text-black font-bold">
                            $
                        </sup>
                        {price}
                    </span>
                    <span
                        className={`${isPositive ? "dark:bg-green-600/40 bg-green-500/50 dark:text-green-500 text-green-900" : "bg-red-600/40 text-red-500"} px-2 py-1 rounded-md  text-sm`}
                    >
                        <div className="flex">
                            {isPositive ? (
                                <IoIosArrowRoundUp size={18} />
                            ) : (
                                <IoIosArrowRoundDown size={20} />
                            )}{" "}
                            {change}%
                        </div>
                    </span>
                </div>
                {/* middle chartCard text */}
                <p className="dark:text-gray-300/50 text-gray-600 text-sm mb-2">{downDesc}</p>

                {/* down chartCard  */}
                {children}
            </div>
        </div>
    );
};
