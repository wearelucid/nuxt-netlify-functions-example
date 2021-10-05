// eslint-disable-next-line require-await
export async function handler(event) {
  const name = event.queryStringParameters.name || 'World'

  return {
    statusCode: 200,
    body: `Hello, ${name}`,
  }
}
