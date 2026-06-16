import formatNumber from "../../../formatNumber";


type Props={
    toGoal: number;
    percentage: number;
}

export const MonthlyOrdersChart = ({ toGoal, percentage }: Props) => {
    return (
        <div className="dark:bg-slate-800 bg-[#ebebeb] rounded-xl p-6 mt-2">
            <div className="mt-6">
                <div className="flex justify-between text-sm dark:text-gray-400 text-gray-600 mb-2">
                    <span>{formatNumber(toGoal)} to Goal</span>
                    <span>{percentage}%</span>
                </div>
                {/* track */}
                <div className="w-full bg-slate-700 rounded-full h-1.5">
                    {/* thumb */}
                    <div
                        className="bg-green-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};
