module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  parserOptions: {
    parser: 'babel-eslint',
    'sourceType': 'module'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  // required to lint *.vue files
  plugins: ['prettier', 'cypress'],
  rules: {
    semi: [2, 'never'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/component-name-in-template-casing': [
      'warn',
      'PascalCase',
      { ignores: ['nuxt', 'nuxt-link', 'no-ssr', 'component', 'transition'] }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        endOfLine:"auto"
      }
    ],
  }
}
