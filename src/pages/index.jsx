import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Status from '../components/Status'
import HomePage from '../components/HomePage'
import SignInScreen from '../components/SignInScreen'

const Index = () => {
  const title = 'Home Page'

  return (
    <Layout siteTitle={title}>
      <SEO title={title} />
      <Status />
      <HomePage />
      <SignInScreen />
    </Layout>
  )
}

export default Index
