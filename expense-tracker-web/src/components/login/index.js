import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Login from './Login'

const LoginContainer = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const onSubmit = async (username, password) => {
    try {
      setLoading(true)
      const result = await axios.post(`${process.env.REACT_APP_SERVICE_ENDPOINT}/login`, { username, password })
      localStorage.setItem('token', `Bearer ${result.data.token}`)
      history.push('/')
    } catch (error) {
      setLoading(false)
      setErrorMsg(error.response && error.response.data)
    }
  }

  const redirect = () => history.push('register')

  return (<Login loading={loading} errorMsg={errorMsg} onSubmit={onSubmit} redirect={redirect} />)
}

export default LoginContainer
