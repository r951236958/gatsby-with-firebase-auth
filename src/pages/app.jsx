import { Router } from "@reach/router"
import React from "react"
import NavBar from "../app/components/NavBar"
import PrivateRoute from "../app/components/PrivateRoute"
import Login from '../app/login'
import Main from '../app/main'
import Profile from "../app/profile"
import Layout from "../components/Layout"
// import Status from "../components/Status"

function PublicRoute(props) {
  return <div>{props.children}</div>
}

const App = ({ siteTitle }) => {
  return (
    <Layout siteTitle={siteTitle}>
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
