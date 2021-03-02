import React from 'react'
import GoogleSheets from '../components/GoogleSheets'
import NetlifyForm from '../components/NetlifyForm'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Form = () => {
  const title = '填寫表單'
  return (
    <Layout siteTitle={title}>
      <SEO title={title} />
      <NetlifyForm />
      <GoogleSheets />
    </Layout>
  )
}

export default Form
