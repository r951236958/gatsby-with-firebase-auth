import React, { useEffect } from 'react'
import Prism from 'prismjs'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { graphql, useStaticQuery } from 'gatsby'

import Title from '../Title'
import Header from '../Header'
import theme from '../theme'
import Footer from '../Footer'

const Layout = ({ children, siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          <div className="max-w-5xl mt-0 mb-auto mx-auto pt-0 pb-5 px-4">
            <main>
              <div className="min-h-screen py-2 px-4 sm:px-6 lg:px-8">
                <Title>{siteTitle}</Title>
                <Container maxWidth="lg">{children}</Container>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
