// eslint-disable-next-line require-await
exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || 'Meow'

  return {
    statusCode: 200,
    body: `https://cataas.com/cat/gif/says/${name}`
  }
}
