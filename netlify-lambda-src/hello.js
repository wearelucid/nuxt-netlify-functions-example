// eslint-disable-next-line require-await
module.exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello world ${Math.floor(Math.random() * 10)}`
    })
  }

  return response
}
