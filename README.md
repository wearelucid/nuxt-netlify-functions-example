# nuxt-netlify-functions-example

[![Netlify Status](https://api.netlify.com/api/v1/badges/ae375e95-eb24-46ed-95d3-a8591add95bc/deploy-status)](https://app.netlify.com/sites/nuxt-netlify-functions-example/deploys)

> Nuxt.js example for running Netlify functions locally in a dev environment and as a generated static site deployed to Netlify

## Info
For the requests on the client side we use the [Axios Module](https://github.com/nuxt-community/axios-module). To proxy locally you have to set up the [Proxy Module](https://github.com/nuxt-community/proxy-module) in `nuxt.config.js`:

```js
proxy: {
  '/.netlify': {
    target: 'http://localhost:9000',
    pathRewrite: { '^/.netlify/functions': '' }
  }
}
```

## Build Setup

``` bash
# Use nvm
$ nvm use

# Install dependencies
$ yarn

# Build lambda functions locally
$ yarn netlify-lambda build netlify-lambda-src

# Serve lambda functions locally
$ yarn netlify-lambda serve netlify-lambda-src

# Serve nuxt app with hot reload at localhost:3000
$ yarn dev

# Generate static project
$ yarn generate
```
