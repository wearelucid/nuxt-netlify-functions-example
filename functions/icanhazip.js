import fetch from 'node-fetch'

const API_ENDPOINT = 'https://icanhazip.com/'

export async function handler(event, context) {
  const res = await fetch(API_ENDPOINT)
    .then((response) => response.text())
    .then((data) => ({
      statusCode: 200,
      body: `AWS IP is ${data}`,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }))
  return res
}
