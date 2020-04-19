import React, { useEffect } from 'react'
import {
  PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer, Label,
} from 'recharts'
import { PieChartContainer } from './styles'

const renderCustomizedLabel = ({ name, value }) => `${name}: ${value}`

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const ExpenseChart = ({ width, chartData }) => (
  <PieChartContainer>
    <ResponsiveContainer debounce height={250} width="100%">
      <PieChart width={width} height={250}>
        <Pie
          data={chartData}
          cx={width}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={renderCustomizedLabel}
          isAnimationActive={false}
        >
          {
            chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip />
      </PieChart>

    </ResponsiveContainer>
  </PieChartContainer>
)

export default ExpenseChart
