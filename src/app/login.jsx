import firebaseApp from "gatsby-plugin-firebase"
import React from 'react'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import { navigate } from 'gatsby'
import SEO from '../components/SEO'
import Title from "../components/Title"
import { setUser } from "../utils/auth"

const Login = () => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebaseApp.auth.FacebookAuthProvider.PROVIDER_ID,
      firebaseApp.auth.TwitterAuthProvider.PROVIDER_ID,
      firebaseApp.auth.GithubAuthProvider.PROVIDER_ID,
      firebaseApp.auth.EmailAuthProvider.PROVIDER_ID,
      // firebaseApp.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        if (authResult.user) {
          setUser(authResult.user)
        }
        return true
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInSuccessUrl: "/app/profile/",
    // Terms of service url.
    tosUrl: "https://www.google.com",
    // Privacy policy url.
    privacyPolicyUrl: "https://www.google.com",
  }

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
