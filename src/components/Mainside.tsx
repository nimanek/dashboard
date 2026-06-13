import { ChartCard } from "./ChartCard";
import { StatCard } from "./StatCard";
import { DailySales } from "./statCardDownData/DailySales";
import { EarningsBreakdown } from "./statCardDownData/EarningsBreakdown";
import { MonthlyOrders } from "./statCardDownData/MonthlyOrders";
import { MonthlySales } from "./statCardDownData/MonthlySales";
import { TodaysHeros } from "./statCardDownData/TodaysHeros";

export const Mainside = () => {
    return (
        <>
            <div className="mx-6 mt-4">
                <div className="my-4">
                    <h3 className="text-white text-2xl">eCommerce Dashboard</h3>
                    <p className="text-gray-600 text-sm">Home - Dashboard</p>
                </div>

                <div className="grid grid-cols-8 grid-rows-6 gap-5">
                    <div className="col-start-1 col-end-3 row-start-1 row-end-10">
                        <StatCard
                            title="Expected Earnings"
                            value="69,700"
                            change={2.2}
                            isPositive={true}
                        >
                            <EarningsBreakdown />
                        </StatCard>
                    </div>
                    <div className="col-start-3 col-end-5 row-start-1 row-end-10">
                        <StatCard
                            title="Average Daily Sales"
                            value="2,420"
                            change={2.6}
                            isPositive={false}
                        >
                            <DailySales />
                        </StatCard>
                    </div>
                    <div className="col-start-5 col-end-9 row-start-1 row-end-20">
                        <ChartCard title="Sales this month" desc="Users from all channels" price="14,308" downDesc="another $49,721 to goal" change={4.6} isPositive={true}>
                            <MonthlySales />
                        </ChartCard>
                    </div>
                    <div className="col-start-1 col-end-3 row-start-10 row-end-20">
                        <StatCard
                            title="Orders this month"
                            value="1,820"
                            change={2.2}
                            isPositive={false}
                        >
                            <MonthlyOrders />
                        </StatCard>
                    </div>
                    <div className="bg-green-400 col-start-3 col-end-5 row-start-10 row-end-20 rounded-md">
                        <StatCard     //NEEDS FIX (CREATE ANOTHER COMPONENT)
                            title="New Customers this month"
                            value="6.3k"
                            change={2.2}
                        >
                            <TodaysHeros />
                        </StatCard>
                    </div>
                    <div className="bg-red-700 col-start-1 col-end-5 row-start-20 row-end-40 rounded-md">
                        2
                    </div>
                    <div className="bg-red-400 col-start-5 col-end-9 row-start-20 row-end-40 rounded-md"></div>
                </div>
            </div>
        </>
    );
};
