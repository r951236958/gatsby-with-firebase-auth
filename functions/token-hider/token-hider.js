const axios = require('axios')
const qs = require('qs')

exports.handler = async function (event, context) {
  // apply our function to the queryStringParameters and assign it to a variable
  const API_PARAMS = qs.stringify(event.queryStringParameters)
  // Get env var values defined in our Netlify site UI
  // TODO: change this
  //   const { API_SECRET = 'shiba' } = process.env
  const spreadsheetId = process.env.GATSBY_GOOGLE_SHEETS_ID
  // TODO: customize your URL
  // this is secret too, your frontend won't see this
  //   const URL = `https://dog.ceo/api/breed/${API_SECRET}/images`
  const URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`
  console.log('Constructed URL is ...', URL)

  try {
    const { data } = await axios.get(URL)
    // refer to axios docs for other methods if you need them
    // for example if you want to POST data:
    //    axios.post('/user', { firstName: 'Fred' })
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}
