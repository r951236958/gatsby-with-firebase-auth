import React from 'react'
import { getUser, isLoggedIn } from '../utils/auth'
import Title from '../components/Title'
import P from '../components/P'

function Main() {
  const user = getUser()
  const { displayName, email, photoURL } = user
  // const accessToken = user.stsTokenManager.accessToken

  return (
    <>
      <Title>Your Main App</Title>
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
