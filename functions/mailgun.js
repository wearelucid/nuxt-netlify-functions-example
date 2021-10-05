/* eslint-disable no-console */
import mailgun from 'mailgun.js'
const { MG_API_KEY, MG_DOMAIN, MG_HOST } = process.env
const mg = mailgun.client({
  url: MG_HOST,
  username: 'api',
  key: MG_API_KEY,
})

const sendEmail = async ({ name, recipient }) => {
  console.log('Sending email')

  const res = await mg.messages.create(MG_DOMAIN, {
    from: 'Netlify Function Example <noreply@wearelucid.ch>',
    to: recipient.toString(),
    subject: `Hello ${name}`,
    text: `Hello ${name}`,
    html: `<h1>👋 Hello ${name}</h1>`,
  })

  return res
}

export async function handler(event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const data = JSON.parse(event.body)
    await sendEmail(data)
    return {
      statusCode: 200,
      body: 'Email sent!',
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message || err,
    }
  }
}
