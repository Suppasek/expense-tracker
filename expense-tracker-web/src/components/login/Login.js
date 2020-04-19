import React from 'react'
import {
  Form,
  Input,
  Button,
  Alert,
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { LoginContainer } from './styles'

const Login = ({
  onSubmit, redirect, errorMsg, loading,
}) => (
  <LoginContainer>
    {errorMsg && <Alert message={errorMsg} type="error" showIcon />}
    <Form
      onFinish={({ username, password }) => onSubmit(username, password)}
    >
      <Form.Item
        name="username"
      >
        <Input
          prefix={<UserOutlined style={{ fontSize: 13 }} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
      >
        <Input.Password
          prefix={<LockOutlined style={{ fontSize: 13 }} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Button loading={loading} htmlType="submit" type="primary" block>Login</Button>

    </Form>
    Or
    {' '}
    <a onClick={redirect} className="register-now">register now!</a>
  </LoginContainer>
)

export default Login
