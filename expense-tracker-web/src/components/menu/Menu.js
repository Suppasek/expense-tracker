import React from 'react'
import { Dropdown, Affix, Menu as AntMenu } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { MenuContainer } from './styles'

const Menu = ({ setModal, logout }) => {
  const menuList = (
    <AntMenu>
      <AntMenu.Item onClick={setModal}>
        Invite Friends
      </AntMenu.Item>
      <AntMenu.Item onClick={logout}>
        Sign out
      </AntMenu.Item>
    </AntMenu>
  )
  return (
    <MenuContainer>
      <Affix>
        <Dropdown className="drop-menu" overlay={menuList}>
          <MenuOutlined />
        </Dropdown>
      </Affix>
    </MenuContainer>
  )
}

export default Menu
