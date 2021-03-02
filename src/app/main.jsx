import React from 'react'
// import Title from '../components/Title'
import P from '../components/P'
import SEO from "../components/SEO"
import { getUser, isLoggedIn } from "../utils/auth"

function Main() {
  const user = getUser()
  const { displayName, email, photoURL } = user
  // const accessToken = user.stsTokenManager.accessToken
  const siteTitle = "Your Main App"
  return (
    <>
      <SEO title={siteTitle} />
      <ul>
        <li>
          <P>Name: {displayName}</P>
        </li>
        <li>
          <P>Email: {email}</P>
        </li>
        <li>
          <P>photoUrl: {photoURL}</P>
        </li>
      </ul>
      <hr />

      {isLoggedIn() && (
        <pre className="language-json">
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      )}
    </>
  )
}

export default Main
