import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import ExpensePage from './ExpensePage'

const ExpensePageContainer = () => {
  const [loading, setLoading] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [addModal, setAddModal] = useState(false)
  const [inviteModal, setInviteModal] = useState(false)
  const [selectedExpense, setSelectedExpense] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_SERVICE_ENDPOINT}/expenses`, { headers: { Authorization: localStorage.getItem('token') } })
        setExpenses(result.data)
        setLoading(false)
      } catch (error) {
        history.push('/login')
      }
    }
    fetchData()
  }, [])

  const deleteExpense = async (_id) => {
    const { data: id } = await axios.delete(`${process.env.REACT_APP_SERVICE_ENDPOINT}/expenses?id=${_id}`, { headers: { Authorization: localStorage.getItem('token') } })
    setSelectedExpense(null)
    setExpenses(expenses.filter(expense => expense._id !== id))
  }

  return !loading && (
  <ExpensePage
    expenses={expenses}
    setExpenses={setExpenses}
    addModal={addModal}
    setAddModal={setAddModal}
    inviteModal={inviteModal}
    setInviteModal={setInviteModal}
    selectedExpense={selectedExpense}
    setSelectedExpense={setSelectedExpense}
    deleteExpense={deleteExpense}
  />
  )
}

export default ExpensePageContainer
