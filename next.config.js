/* eslint-disable */
const path = require('path')
const merge = require('webpack-merge')
const withSass = require('@zeit/next-sass')

function configureWebpack(config) {
  return merge(config, {
    resolve: {
      alias: {
        pages: path.join(__dirname, 'pages'),
        components: path.join(__dirname, 'components'),
        layout: path.join(__dirname, 'layout'),
        general: path.join(__dirname, 'general'),
      },
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: path.resolve(
            __dirname,
            './config/webpack-markdown-loader.js',
          ),
        },
      ],
    },
  })
}

let webpack = {webpack: configureWebpack}
let sass = withSass(webpack)
module.exports = sass
