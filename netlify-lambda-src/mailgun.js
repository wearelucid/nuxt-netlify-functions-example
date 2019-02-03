require('dotenv').config()
const mailgun = require('mailgun.js')
const { MG_API_KEY: mgApiKey, MG_URL: mgUrl } = process.env
console.log(mgApiKey, mgUrl)
const mg = mailgun.client({
  username: 'api',
  key: mgApiKey,
  url: mgUrl
})

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const data = JSON.parse(event.body)
  const { name, recipient } = data

  const res = await mg.messages
    .create(mgUrl, {
      from: 'Netlify Function Example <noreply@wearelucid.ch>',
      to: recipient,
      subject: `Hello ${name}`,
      html: `<h1>👋 Hello ${name}</h1>`
    })
    .then(response => ({
      statusCode: 200,
      body: JSON.stringify(response)
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }))
  return res
}
