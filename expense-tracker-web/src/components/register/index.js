import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import qs from 'query-string'
import Register from './Register'

const RegisterContainer = (props) => {
  const [errorMsg, setErrorMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const history = useHistory()
  const parsedQs = qs.parse(window.location.search)
  const onSubmit = async (username, password) => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVICE_ENDPOINT}/register`, { username, password, refId: parsedQs.refId })
      setErrorMsg('')
      setSuccess(true)
    } catch (error) {
      setErrorMsg(error.response.data)
    }
  }

  const redirect = () => history.push('login')

  return (<Register success={success} errorMsg={errorMsg} onSubmit={onSubmit} redirect={redirect} />)
}

export default RegisterContainer
