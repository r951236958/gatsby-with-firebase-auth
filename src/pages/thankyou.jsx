import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TextField from '../components/TextField'
import Button from 'gatsby-theme-material-ui'

const ThanksPage = () => {
  const title = 'Thank You!!'
  return (
    <Layout siteTitle={title}>
      <SEO title={title} />
      <Button color="primary" variant="contained" to="/form/">
        返回表格
      </Button>
      <div className="block max-w-1/2 my-4">
        <TextField
          id="test-input"
          label="hi-label-here"
          name="im-input"
          type="text"
          placeholder="placeholder"
          className="w-12"
        />
      </div>
      <div className="md-input-main">
        <div className="md-input-box">
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="md-input"
            placeholder=" "
          />
          <label htmlFor="fullName" className="md-label">
            Full Name
          </label>
          <div className="md-input-underline"></div>
        </div>
      </div>
    </Layout>
  )
}

export default ThanksPage
