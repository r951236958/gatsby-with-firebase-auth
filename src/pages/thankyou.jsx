import Button from "gatsby-theme-material-ui"
import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/SEO"

const ThanksPage = () => {
  const title = 'Thank You!!'
  return (
    <Layout siteTitle={title}>
      <SEO title={title} />
      <Button color="primary" variant="contained" to="/form/">
        返回表格
      </Button>
    </Layout>
  )
}

export default ThanksPage
