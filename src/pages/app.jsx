import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import Profile from '../app/profile'
import Login from '../app/login'
import Main from '../app/main'
import PrivateRoute from '../app/components/PrivateRoute'
import NavBar from '../app/components/NavBar'
// import Status from "../components/Status"

function PublicRoute(props) {
  return <div>{props.children}</div>
}

const App = ({ title }) => {
  return (
    <Layout siteTitle={title}>
      <NavBar />
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PublicRoute path="/app">
          <PrivateRoute path="/" component={Main} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </Layout>
  )
}

export default App
