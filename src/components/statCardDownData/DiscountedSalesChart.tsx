import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import formatNumber from "../../../formatNumber"

type Props = {
  isPositive: boolean;
}

export const DiscountedSalesChart = ({isPositive}: Props) => {

  const color= isPositive ? "green" : 'red'
  const data = [
    { date: 'Jun 04', value: 35100 },
    { date: 'Jun 07', value: 36000 },
    { date: 'Jun 12', value: 48000 },
    { date: 'Jun 14', value: 25200 },
    { date: 'Jun 15', value: 65500 },
    { date: 'Jun 16', value: 65500 },
    { date: 'Jun 18', value: 45500 },
  ]




  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
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
          tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
          labelStyle={{ color: '#94a3b8' }}
          itemStyle={{ color }}
          formatter={(value) => [`$${formatNumber(value as number)}`, 'Sales']}
        />
        <Area
          type="monotone" 
          dataKey="value" 
          stroke={color}
          strokeWidth={2}
          fill={`url(#gradient-${color})`}
        />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}
