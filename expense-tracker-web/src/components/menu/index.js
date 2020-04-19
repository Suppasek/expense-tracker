import React from 'react'
import { useHistory } from 'react-router-dom'
import Menu from './Menu'

const MenuContainer = ({ setModal }) => {
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }

  return (<Menu setModal={setModal} logout={logout} />)
}

export default MenuContainer
