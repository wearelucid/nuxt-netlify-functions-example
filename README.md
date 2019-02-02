# nuxt-netlify-functions-example

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
