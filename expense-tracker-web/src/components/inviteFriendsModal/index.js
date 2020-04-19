import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import InviteFriendsModal from './InviteFriendsModal'

const InviteFriendsModalContainer = ({ open, setModal }) => {
  const [inviteUrl, setInviteUrl] = useState('')
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_SERVICE_ENDPOINT}/group/inviteLink`, { headers: { Authorization: localStorage.getItem('token') } })
        setInviteUrl(`${result.data}`)
      } catch (error) {
        history.push('/login')
      }
    }
    fetchData()
  }, [])

  return (
    <InviteFriendsModal inviteUrl={inviteUrl} open={open} setModal={setModal} />
  )
}

export default InviteFriendsModalContainer
