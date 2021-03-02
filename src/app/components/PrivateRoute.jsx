import { navigate } from "@reach/router"
import PropTypes from 'prop-types'
import React from "react"
import { isLoggedIn } from '../../utils/auth'

const PrivateRoute = (props) => {
  const { component: Component, location, ...rest } = props

  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`, { replace: true })
    return null
  }

  return isLoggedIn() ? <Component {...rest} /> : null
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
