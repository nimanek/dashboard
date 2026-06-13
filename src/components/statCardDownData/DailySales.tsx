import { BarChart, Bar, ResponsiveContainer } from "recharts"

export const DailySalesChart = () => {


  const data = [
    {value: 30},
    {value: 45},
    {value: 28},
    {value: 50},
    {value: 60},
    {value: 35},
    {value: 55}
]


  return (
    <div>
        <ResponsiveContainer width="100%" height={100} >
          <BarChart data={data}>
            <Bar dataKey="value" fill="darkcyan" radius={[4,4,0,0]}/>
          </BarChart>
        </ResponsiveContainer>
    </div>
  )
}
