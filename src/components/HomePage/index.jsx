import React from 'react'
import { Link } from 'gatsby'

export default function HomePage() {
  return (
    <div>
      <p>
        <span role="img" aria-label="hands">
          👋
        </span>
        This is a simple demo of creating dynamic pages with Gatsby that require
        <b>user authentication</b> and using <b>Firebase</b> as authentication
        provider.
      </p>
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
  )
}
