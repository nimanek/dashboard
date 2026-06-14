import { PieChart, Pie, Cell } from "recharts";
import formatNumber from "../../../formatNumber";

export const EarningsBreakdown = () => {
    const datas = [
        { name: "Shoes", value: 7660, color: "red" },
        { name: "Gaming", value: 2820, color: "blue" },
        { name: "Others", value: 2527, color: "yellow" },
    ];

    function EarningsDonut() {
        return (

          // recharts for showing chart
            <PieChart width={80} height={80}>
                <Pie
                    data={datas}
                    dataKey="value"
                    innerRadius={26}
                    outerRadius={32}
                    paddingAngle={3}
                    stroke="none"
                >
                    {datas.map((data, index) => (
                        <>
                            <Cell key={index} fill={data.color} />
                        </>
                    ))}
                </Pie>
            </PieChart>
        );
    }

    return (
        <>
            <div className="flex justify-between items-center mt-2">
                <div className="">
                    <EarningsDonut />
                </div>
                <div className="flex flex-col">
                    {datas.map((data) => (
                        <div className="flex justify-evenly items-center dark:text-gray-300/70 gap-2">
                            <>
                                <span
                                    style={{ backgroundColor: data.color }}
                                    className="w-2 h-2 rounded-full"
                                ></span>
                                <div className="text-sm">{data.name}</div>
                                <div className="dark:text-white text-black">
                                    ${formatNumber(data.value)}
                                </div>
                            </>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
