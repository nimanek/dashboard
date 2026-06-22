import { PieChart, Pie, Sector } from "recharts";
import formatNumber from "../../../formatNumber";

export const EarningsBreakdown = () => {
    const datas = [
        { name: "Shoes", value: 7660, color: "red" },
        { name: "Gaming", value: 2820, color: "blue" },
        { name: "Others", value: 2527, color: "yellow" },
    ];

    function EarningsDonut() {
        return (
            <PieChart width={80} height={80}>
                <Pie
                    data={datas}
                    dataKey="value"
                    innerRadius={26}
                    outerRadius={32}
                    paddingAngle={3}
                    stroke="none"
                    shape={(props) => {
                        // Extracts the color from the current data entry
                        const fill = props.payload.color;

                        // Renders the built-in Sector shape with the correct color
                        return <Sector {...props} fill={fill} />;
                    }}
                />
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
                        <div
                            key={data.name}
                            className="flex justify-evenly items-center dark:text-gray-300/70 gap-2"
                        >
                            <>
                                <span
                                    style={{ backgroundColor: data.color }}
                                    className="w-2 h-2 rounded-full"
                                ></span>
                                <div className="text-sm">{data.name}</div>
                                <div className="dark:text-white text-black hidden lg:block">
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
