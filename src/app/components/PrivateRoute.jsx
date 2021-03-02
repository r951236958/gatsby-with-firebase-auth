import { navigate } from "@reach/router"
import PropTypes from 'prop-types'
import React, { useEffect } from "react"
import { isLoggedIn } from '../../utils/auth'

const PrivateRoute = (props) => {
  const { component: Component, location, ...rest } = props

  useEffect(() => {
    if (!isLoggedIn() && location.pathname !== `/app/login`) {
      // If we’re not logged in, redirect to the home page.
      navigate(`/app/login`, { replace: true })
      return null
    }
   
    }, [location])

  return isLoggedIn() ? <Component {...rest} /> : null
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
