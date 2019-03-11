module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // Turn off rules that prettier conflicts with
    'indent': 'off', 
    'quotes': 'off',
    'semi': 'off',
    'no-trailing-spaces': 'off',
    'object-curly-spacing': 'off',
    'react/no-unescaped-entities': 'off',
    'no-console': 'warn',
    'quotes': 'off',
    'linebreak-style': ['warn', 'unix'],
    'no-unused-vars': 'warn'
  },
  settings: {
    react: { version: 'detect' },
  },
}
