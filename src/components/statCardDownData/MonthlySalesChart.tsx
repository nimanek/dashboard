import { AreaChart,Area, XAxis, YAxis,Tooltip, ResponsiveContainer } from "recharts"
import formatNumber from "../../../formatNumber"

export const MonthlySalesChart = () => {


  const data = [
    {date: 'Jun 04', value: 17000},
    {date: 'Jun 07', value: 20500},
    {date: 'Jun 10', value: 18000},
    {date: 'Jun 14', value: 14000},
    {date: 'Jun 17', value: 17500},
    {date: 'Jun 25', value: 12000},
  ]



  return (
    <div>
        <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis 
          dataKey="date" 
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis 
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `$${(v/1000).toFixed(0)}K`}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
          labelStyle={{ color: '#94a3b8' }}
          itemStyle={{ color: '#22d3ee' }}
          formatter={(value)=> [`$${formatNumber(value)} Sales`]}
        />
        <Area 
          type="monotone" 
          dataKey="value"
          stroke="#22d3ee" 
          strokeWidth={2}
          fill="url(#salesGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}
