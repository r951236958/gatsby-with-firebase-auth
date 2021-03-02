import React from 'react'
import { Button, Link } from 'gatsby-theme-material-ui'

export default function HomePage() {
  return (
    <div className="flex items-start h-screen w-full justify-center mt-20">
      <div className="max-w-lg">
        <div className="my-8">
          <p className="text-base leading-8 font-normal">
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

        <div className="my-8">
          <p className="text-base leading-8 font-normal">
            <span className="mr-2" role="img" aria-label="books">
              📚
            </span>
            It uses concepts from the{' '}
            <Link
              color="primary"
              href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/"
            >
              client-only routes section
            </Link>{' '}
            and{' '}
            <Link
              color="primary"
              href="https://www.gatsbyjs.org/tutorial/authentication-tutorial"
            >
              making a site with user authentication{' '}
            </Link>
            tutorial in the official gatsby doc.
          </p>
        </div>

        <div className="my-8">
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="row-span-2 col-span-2">
              <p className="text-base leading-8 font-normal">
                This is the public home, and here it is a private route to
                start:{' '}
              </p>
            </div>
            <div className="col-span-2">
              <div className="flex items-center">
                <Button color="primary" variant="contained" to="/app/profile">
                  Go to your profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
