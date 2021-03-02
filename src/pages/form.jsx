import React from "react"
import GoogleSheets from "../components/GoogleSheets"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Form = () => {
  const title = "Google試算表"
  return (
    <Layout siteTitle={title}>
      <SEO title={title} />

      <GoogleSheets />
    </Layout>
  )
}

export default Form
