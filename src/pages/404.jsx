import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFound = () => {
  const title = 'Page Not Found'
  return (
    <Layout siteTitle={title}>
      <SEO title={title}>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </SEO>
    </Layout>
  )
}

export default NotFound
