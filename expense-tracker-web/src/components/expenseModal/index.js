import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { message } from 'antd'
import ExpenseModal from './ExpenseModal'

const ExpenseModalContainer = (props) => {
  const {
    open, setModal, setExpenses, expenses, selectedExpense, setSelectedExpense,
  } = props
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [types, setTypes] = useState([])
  const [type, setType] = useState('')

  useEffect(() => {
    setDescription(selectedExpense && selectedExpense.description)
    setAmount(selectedExpense && selectedExpense.amount)
    setType(selectedExpense && selectedExpense.type.name)

    const fetchData = async () => {
      const result = await axios.get(`${process.env.REACT_APP_SERVICE_ENDPOINT}/type`, { headers: { Authorization: localStorage.getItem('token') } })
      setTypes(result.data)
    }
    fetchData()
  }, [props])

  const initModal = () => {
    setModal(false)
    setAmount('')
    setDescription('')
    setType('')
    setSelectedExpense(null)
  }

  const onSubmit = async () => {
    if (!amount) {
      message.error('Please fill amount')
      return
    } if (!type) {
      message.error('Please fill type')
      return
    }
    if (selectedExpense) {
      const result = await axios.put(`${process.env.REACT_APP_SERVICE_ENDPOINT}/expenses`, {
        _id: selectedExpense._id,
        description,
        amount,
        type,
      },
      { headers: { Authorization: localStorage.getItem('token') } })
      const updatedExpenses = [...expenses]
      updatedExpenses[updatedExpenses.findIndex(oldExpense => oldExpense.id === selectedExpense.id)] = result.data
      setExpenses(updatedExpenses)
      initModal()
    } else {
      const result = await axios.post(`${process.env.REACT_APP_SERVICE_ENDPOINT}/expenses`, { description, amount, type }, { headers: { Authorization: localStorage.getItem('token') } })
      setExpenses([result.data, ...expenses])
      initModal()
    }
  }

  return (
    <ExpenseModal
      initModal={initModal}
      selectedExpense={selectedExpense}
      onSubmit={onSubmit}
      open={open}
      setDescription={setDescription}
      description={description}
      setAmount={setAmount}
      amount={amount}
      type={type}
      setType={setType}
      types={types.map(name => ({ value: name }))}
    />
  )
}

export default ExpenseModalContainer
