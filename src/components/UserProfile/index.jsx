import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby-theme-material-ui'
import { AppBarAction } from '@react-md/app-bar'
import { getUser } from '../../utils/auth'
import { Transition } from '@headlessui/react'

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const user = getUser()
  const { displayName, email, photoURL } = user

  const handleMenuOpen = (e) => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(isOpen)
  }, [isOpen])
  return (
    <div className="relative">
      <div>
        <AppBarAction
          id="user-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </AppBarAction>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <div className="max-w-md">
            <div className="bg-gray-800 shadow-xl rounded-lg space-y-2 py-4">
              <div className="photo-wrapper">
                <img
                  className="w-16 h-16 rounded-full mx-auto"
                  src={photoURL}
                  alt="user"
                />
              </div>
              <div className="user-info">
                <div className="flex flex-col items-center justify-items-center">
                  <div className="text-center mb-4">
                    <div className="text-xl text-gray-100 font-medium">
                      {displayName}
                    </div>
                    <div className="text-gray-300 text-xs font-semibold">
                      {email}
                    </div>
                  </div>
                  <button className="px-4 py-2 text-gray-100 text-sm font-sans rounded-full border border-gray-200 hover:bg-gray-100 hover:bg-opacity-10 focus:outline-none focus:ring-0">
                    View User Profile
                  </button>
                </div>
                <div className="px-4">
                  <table id="user-details" className="text-xs my-3">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 text-gray-300 font-semibold">
                          Sign-in provider
                        </td>
                        <td className="px-2 py-2 text-gray-100">Provider</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-300 font-semibold">
                          Phone
                        </td>
                        <td className="px-2 py-2 text-gray-100">
                          +977 9955221114
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-300 font-semibold">
                          Email
                        </td>
                        <td className="px-2 py-2 text-gray-100">{email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center my-3">
                  <Link color="secondary" to="/app/profile/">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default UserProfile
