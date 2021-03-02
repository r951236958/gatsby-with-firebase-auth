import React from 'react'
import { Link } from 'gatsby'

export default function HomePage() {
  return (
    <div className="flex items-start h-screen w-full justify-center mt-10">
      <div className="max-w-lg">
        <div>
          <p className="text-base font-normal">
            <span className="mr-2" role="img" aria-label="hands">
              👋
            </span>
            This is a simple demo of creating dynamic pages with Gatsby that
            require{' '}
            <span className="font-bold text-red-600">user authentication</span>{' '}
            and using <span className="font-bold text-red-600">Firebase</span>{' '}
            as authentication provider.
          </p>
        </div>
        <br />
        <p>
          <span role="img" aria-label="boos">
            📚
          </span>
          It uses concepts from the
          <a
            className="underline text-blue-500"
            href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/"
          >
            client-only routes section
          </a>
          and
          <a
            className="underline text-blue-500"
            href="https://www.gatsbyjs.org/tutorial/authentication-tutorial"
          >
            making a site with user authentication
          </a>
          tutorial in the official gatsby doc.
        </p>
        <br />
        <p>
          This is the public home, and here it is a private route to start:
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
            type="button"
          >
            <Link to="/app/profile">Go to your profile</Link>
          </button>
        </p>
      </div>
    </div>
  )
}
