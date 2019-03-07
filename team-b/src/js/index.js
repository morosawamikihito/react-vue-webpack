import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HeadNavbar from '../components/HeadNavbar'
import Content from '../components/Content'
import LoginForm from '../components/LoginForm'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <HeadNavbar />
    <Content />
  </div>
)
const Login = () => (
  <div>
    <HeadNavbar />
    <LoginForm />
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"));

