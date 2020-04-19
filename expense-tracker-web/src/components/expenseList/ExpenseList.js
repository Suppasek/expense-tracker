import React from 'react'
import moment from 'moment'
import {
  List, Menu, Dropdown, Avatar,
} from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import { SubDesc, ListContainer } from './styles'

const ExpenseList = ({
  expenses, setAddModal, setSelectedExpense, deleteExpense,
}) => (
  <ListContainer>
    <div className="sub-data">
      <span className="monthly-expense">
        {`${moment().format('MMMM YYYY')} `}
        <span className="total">{`(${expenses.length} expense)`}</span>
      </span>
      <span className="showing-expense">
        Monthly Expenses:
        {' '}
        {expenses.map(expense => expense.amount).reduce((a, b) => a + b, 0)}
        {' '}
        THB
      </span>
    </div>
    <List
      className="list"
      dataSource={expenses}
      renderItem={item => (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar size="large">{item.createdBy.username.substr(0, 2)}</Avatar>}
            title={item.type.name}
            description={item.description}
          />
          <>
            <SubDesc>
              <span>{`${item.amount} THB`}</span>
              <span className="created-at">{moment(item.createdAt).fromNow()}</span>
            </SubDesc>
            <Dropdown overlay={
            (
              <Menu>
                <Menu.Item onClick={() => {
                  setSelectedExpense(item)
                  setAddModal(true)
                }}
                >
                  Edit
                </Menu.Item>
                <Menu.Item onClick={() => {
                  deleteExpense(item._id)
                }}
                >
                  Delete
                </Menu.Item>
              </Menu>
            )
          }
            >
              <MoreOutlined style={{ fontSize: '30px', paddingLeft: '20px' }} />

            </Dropdown>
          </>
        </List.Item>
      )}
    />
  </ListContainer>
)

export default ExpenseList
