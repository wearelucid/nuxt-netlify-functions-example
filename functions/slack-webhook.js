const fetch = require('node-fetch')
require('dotenv').config()

// eslint-disable-next-line require-await
exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const data = JSON.parse(event.body)
  const name = data.name || 'noname'

  // Send greeting to Slack
  return fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ text: `${name} says hello!` })
  })
    .then(() => ({
      statusCode: 200,
      body: `Hello, ${name}! Your greeting has been sent to Slack 👋`
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`
    }))
}
