// eslint-disable-next-line require-await
export async function handler(event) {
  const name = event.queryStringParameters.name || 'Meow'

  return {
    statusCode: 200,
    body: `https://cataas.com/cat/gif/says/${name}`,
  }
}
