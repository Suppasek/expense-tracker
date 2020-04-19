import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import ExpenseChart from './ExpenseChart'

const ExpenseChartContainer = ({ expenses }) => {
  const { width } = useWindowDimensions()

  // set chart position middle of the screen
  const chartWidth = (width * 0.8) / 2

  const chartData = expenses.map(expense => ({ name: expense.type.name, value: expense.amount }))

  const groupingChartData = chartData.reduce((prev, current) => {
    const o = prev.filter(obj => obj.name === current.name).pop() || { name: current.name, value: 0 }
    o.value += current.value
    prev.push(o)
    return prev
  }, []).filter((itm, i, a) => i === a.indexOf(itm))

  return (<ExpenseChart width={chartWidth} expenses={expenses} chartData={groupingChartData} />)
}

export default ExpenseChartContainer
