import React from 'react'
import {
  Form,
  Input,
  Button,
  Alert,
  Result,
} from 'antd'
import { RegisterContainer } from './styles'

const Register = ({
  onSubmit, errorMsg, success, redirect,
}) => (
  <RegisterContainer>
    {errorMsg && <Alert message={errorMsg} type="error" showIcon />}
    {!success && (
    <Form
      onFinish={({ username, password }) => onSubmit(username, password)}
    >
      <Form.Item
        name="username"
        label="Username"
      >
        <Input placeholder="username" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>Register</Button>

    </Form>
    )}
    {success && (
      <Result
        status="success"
        title="Successfully Registered"
        extra={[
          <Button onClick={redirect} type="primary" key="console">
            Login
          </Button>,
        ]}
      />
    )}
  </RegisterContainer>
)

export default Register
