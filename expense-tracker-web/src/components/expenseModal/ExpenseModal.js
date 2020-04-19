import React from 'react'
import {
  Modal,
  Input,
  AutoComplete,
} from 'antd'
import { FormContainer } from './styles'

const ExpenseModal = ({
  open, initModal, onSubmit, amount, setAmount, description, setDescription, type, types, setType,
}) => (
  <Modal
    visible={open}
    onOk={onSubmit}
    onCancel={() => initModal(false)}
    title="Add Expense"
  >
    <FormContainer>
      <AutoComplete className="autocomplete form-input" placeholder="Type" options={types} defaultOpen value={type} onSelect={value => setType(value)} onChange={value => setType(value)} />
      <Input className="form-input" placeholder="Amount" type="number" onChange={e => setAmount(e.target.value.replace(/\D/, ''))} value={amount} />
      <Input className="form-input" placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
    </FormContainer>
  </Modal>
)

export default ExpenseModal
