import React, { useState } from 'react'
import ExpenseList from '../../components/expenseList'
import ExpenseModal from '../../components/expenseModal'
import { Container, StyledButton } from './styles'
import ExpenseChart from '../../components/expenseChart'
import Menu from '../../components/menu'
import InviteFriendsModal from '../../components/inviteFriendsModal'

const ExpensePage = ({
  expenses,
  setExpenses,
  addModal,
  setAddModal,
  inviteModal,
  setInviteModal,
  selectedExpense,
  setSelectedExpense,
  deleteExpense,
}) => (
  <Container>
    <div className="content">
      <Menu setModal={setInviteModal} />
      <ExpenseChart expenses={expenses} />
      <StyledButton onClick={setAddModal} size="large" shape="round" type="primary">+ Add New</StyledButton>
      <ExpenseList setAddModal={setAddModal} setSelectedExpense={setSelectedExpense} expenses={expenses} deleteExpense={deleteExpense} />
      {ExpenseModal && (
      <ExpenseModal
        open={addModal}
        setModal={setAddModal}
        expenses={expenses}
        setExpenses={setExpenses}
        selectedExpense={selectedExpense}
        setSelectedExpense={setSelectedExpense}
      />
      )}
      {inviteModal && <InviteFriendsModal open={inviteModal} setModal={setInviteModal} />}
    </div>
  </Container>
)

export default ExpensePage
