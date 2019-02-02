# nuxt-netlify-functions-example

[![Netlify Status](https://api.netlify.com/api/v1/badges/ae375e95-eb24-46ed-95d3-a8591add95bc/deploy-status)](https://app.netlify.com/sites/nuxt-netlify-functions-example/deploys)

> Nuxt.js example for running Netlify functions locally in a dev environment and as a generated static site deployed to Netlify

## Build Setup

``` bash
# Use nvm
$ nvm use

# Install dependencies
$ yarn

# Serve lambda functions locally
$ yarn netlify-lambda serve netlify-lambda-src

# Build lambda functions locally if you feel like
# $ yarn netlify-lambda build netlify-lambda-src

# Serve nuxt app with hot reload at localhost:3000
$ yarn dev

# Generate static project
$ yarn generate
```
