import formatNumber from "../../formatNumber";
import { ChartCard } from "./ChartCard";
import { RecentOrders } from "./RecentOrders";
import { RecentOrdersDown } from "./RecentOrdersDown";
import { StatCard } from "./StatCard";
import { DailySalesChart } from "./statCardDownData/DailySales";
import { DiscountedSalesChart } from "./statCardDownData/DiscountedSalesChart";
import { EarningsBreakdown } from "./statCardDownData/EarningsBreakdown";
import { MonthlyOrdersChart } from "./statCardDownData/MonthlyOrdersChart";
import { MonthlySalesChart } from "./statCardDownData/MonthlySalesChart";
import { TodaysHeros } from "./statCardDownData/TodaysHeros";

export const Mainside = () => {
    return (
        <>
            <div className="mx-6 mt-4">
                <div className="my-4">
                    <h3 className="dark:text-white text-2xl">eCommerce Dashboard</h3>
                    <p className="dark:text-gray-600 text-mist-700 text-sm">Home - Dashboard</p>
                </div>

                <div className="grid grid-cols-8 grid-rows-6 gap-5">
                    <div className="col-start-1 col-end-3 row-start-1 row-end-10">
                        <StatCard
                            title="Expected Earnings"
                            value={formatNumber(69700)}
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
                            isPositive={true}
                        >
                            <DailySalesChart />
                        </StatCard>
                    </div>
                    <div className="col-start-5 col-end-9 row-start-1 row-end-20">
                        <ChartCard
                            title="Sales this month"
                            desc="Users from all channels"
                            price="14,308"
                            downDesc="another $49,721 to goal"
                            change={4.6}
                            isPositive={true}
                        >
                            <MonthlySalesChart />
                        </ChartCard>
                    </div>
                    <div className="col-start-1 col-end-3 row-start-10 row-end-20">
                        <StatCard
                            title="Orders this month"
                            value="1,820"
                            change={2.2}
                            isPositive={false}
                        >
                            <MonthlyOrdersChart percentage={68} toGoal={1050}/>
                        </StatCard>
                    </div>
                    <div className="col-start-3 col-end-5 row-start-10 row-end-20 rounded-md">
                        <StatCard //NEEDS FIX (CREATE ANOTHER COMPONENT)
                            title="The workers are working🚧" //NEEDS FIX (CREATE ANOTHER COMPONENT)
                            value="🚧" //NEEDS FIX (CREATE ANOTHER COMPONENT)
                            change={0} //NEEDS FIX (CREATE ANOTHER COMPONENT)
                        >
                            <TodaysHeros /> 
                        </StatCard>  
                    </div>
                    <div className="col-start-1 col-end-5 row-start-20 row-end-40 rounded-md">
                        <RecentOrders title="Recent Orders">
                            <RecentOrdersDown />
                        </RecentOrders>
                    </div>
                    <div className="col-start-5 col-end-9 row-start-20 row-end-40 rounded-md">
                        <ChartCard
                        title="Discounted Product Sales"
                        desc="Users from all channels"
                        price="3,500"
                        downDesc="Total discouned sales this mounth"
                        change={2.8}
                        isPositive={false}
                    >
                        <DiscountedSalesChart isPositive={false}/>
                    </ChartCard>
                    </div>
                    
                </div>
            </div>
        </>
    );
};
