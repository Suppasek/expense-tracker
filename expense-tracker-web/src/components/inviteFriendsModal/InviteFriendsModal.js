import React from 'react'
import {
  Modal,
  Input,
  message,
} from 'antd'
import { CopyOutlined } from '@ant-design/icons'

const InviteFriendsModal = ({ open, setModal, inviteUrl }) => (
  <Modal
    visible={open}
    onCancel={() => setModal(false)}
    onOk={() => setModal(false)}
    title="Invite Friends"
    cancelButtonProps={{ style: { display: 'none' } }}
  >
    Copy and send the below link to invite people to your expense
    <Input
      suffix={(
        <CopyOutlined onClick={() => {
          navigator.clipboard.writeText(inviteUrl)
          message.info('Copied!!')
        }}
        />
)}
      value={inviteUrl}
    />
  </Modal>
)

export default InviteFriendsModal
