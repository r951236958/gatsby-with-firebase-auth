import React from 'react'
import HomePage from '../components/HomePage'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Index = () => {
  const title = 'Home Page'

  return (
    <Layout siteTitle={title}>
      <SEO title={title} />
      <HomePage />
    </Layout>
  )
}

export default Index
