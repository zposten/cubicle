module.exports = {
  parser: "babel-eslint",
  parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
          jsx: true,
          modules: true,
          experimentalObjectRestSpread: true
      }
  },
  env: { es6: true, browser: true },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    // Turn off rules that prettier conflicts with
    'indent': 'off', 
    'quotes': 'off',
    'semi': 'off',
    'no-trailing-spaces': 'off',
    'object-curly-spacing': 'off',
    'react/no-unescaped-entities': 'off',
    'no-console': 'off',
    'quotes': 'off',
    'linebreak-style': ['warn', 'unix'],
    'no-unused-vars': 'warn'
  },
  settings: {
    react: { 
      version: 'detect',
      pragma: "React",
    },
  },
}
