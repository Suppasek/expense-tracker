import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css'
import ExpensePage from './pages/expensePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <ExpensePage />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App
