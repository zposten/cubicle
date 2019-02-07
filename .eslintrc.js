module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'indent': ['warn', 2],
    'linebreak-style': ['warn','unix'],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'no-trailing-spaces': ['warn', { ignoreComments: true }],
    'object-curly-spacing': ['warn', 'never'],
    'react/no-unescaped-entities': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  }
};