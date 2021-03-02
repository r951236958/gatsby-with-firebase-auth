import React from 'react'
import SEO from '../components/SEO'
import { getUser } from '../utils/auth'

const Profile = () => {
  const user = getUser()
  const { displayName, email, emailVerified } = user
  const accessToken = user.stsTokenManager.accessToken
  const siteTitle = 'Your Profile'

  return (
    <>
      <SEO title={siteTitle} />
      <div>
        <div className="text-xl text-gray-300 flex items-center mb-4">
          <svg
            fill="currentColor"
            width="16"
            height="16"
            className="text-gray-300 w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Members only
        </div>
        <div className="text-gray-300 text-base">
          <ul>
            <li>
              <div className="text-xl font-bold">Name:</div>
              <div className="pl-2 ">{`${displayName}`}</div>
            </li>
            <li>
              <div className="text-xl font-bold">Email:</div>
              <div className="pl-2 ">{`${email}`}</div>
            </li>
            <li>
              <div className="text-xl font-bold">Email Verified:</div>
              <div className="pl-2 ">{`${emailVerified}`}</div>
            </li>
            <li>
              <div className="text-xl font-bold">Firebase Access Token:</div>
              <div className="pl-2 truncate">{`${accessToken}`}</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Profile
