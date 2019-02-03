/* eslint-disable no-console */
require('dotenv').config()
const Mailgun = require('mailgun-js')
const { MG_API_KEY: apiKey, MG_DOMAIN: domain, MG_HOST: host } = process.env
const mailgun = Mailgun({
  apiKey,
  domain,
  host
})

// eslint-disable-next-line require-await
const sendEmail = async ({ name, recipient }) => {
  console.log('Sending email')
  return new Promise((resolve, reject) => {
    const mailData = {
      from: 'Netlify Function Example <noreply@wearelucid.ch>',
      to: recipient.toString(),
      subject: `Hello ${name}`,
      html: `<h1>👋 Hello ${name}</h1>`
    }

    mailgun.messages().send(mailData, (err, res) => {
      console.log(res && res.message ? res.message : res)
      if (err) return reject(err)
      resolve()
    })
  })
}

exports.handler = async event => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const data = JSON.parse(event.body)
    await sendEmail(data)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email sent!'
      })
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message || err
    }
  }
}
