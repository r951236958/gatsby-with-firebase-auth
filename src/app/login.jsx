import React from 'react'
// import { navigate } from 'gatsby'
import SEO from '../components/SEO'
import Title from '../components/Title'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { uiConfig } from '../utils/auth'
import firebaseApp from 'gatsby-plugin-firebase'

const Login = () => {
  return (
    <>
      <SEO title="Your Profile" />
      <Title>Welcome to My Awesome App</Title>
      <p>Please sign-in to access to the private route:</p>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebaseApp.auth()}
      />
    </>
  )
}

export default Login
