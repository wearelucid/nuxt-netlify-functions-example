// eslint-disable-next-line require-await
export async function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello, World',
  })
}
