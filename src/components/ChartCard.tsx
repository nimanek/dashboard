import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

export const ChartCard = ({children, title,change,isPositive, desc, price,downDesc}) => {
    return (
        <div>
            <div className="bg-slate-700 p-4 h-100 rounded-md">
                <div className="flex justify-between">
                <h2 className="text-white text-2xl">{title}</h2>
                <button className="border border-gray-500 text-gray-200 w-8 h-8 rounded-sm flex justify-center"><span className="">...</span></button>
                </div>
                <p className="text-gray-300/50 text-sm mb-8">{desc}</p>
                {/* up chartCard flex */}
                <div className="flex justify-start items-center gap-4">
                    <span className="text-2xl text-gray-200 font-bold">
                        <sup className="text-sm align-super text-gray-500 font-bold">
                            $
                        </sup>
                        {price}
                    </span>
                    <span
                        className={`${isPositive ? "bg-green-600/40 text-green-500" : "bg-red-600/40 text-red-500"} px-2 py-1 rounded-md  text-sm`}
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
                <p className="text-gray-300/50 text-sm mb-2">{downDesc}</p>

                {/* down chartCard  */}
                {children}
            </div>
        </div>
    );
};
