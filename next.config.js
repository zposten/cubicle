/* eslint-disable */
const path = require('path')
const merge = require('webpack-merge')

function configureWebpack(config) {
  return merge(config, {
    resolve: {
      alias: {
        pages: path.join(__dirname, 'pages'),
        components: path.join(__dirname, 'components'),
        layout: path.join(__dirname, 'layout'),
        general: path.join(__dirname, 'general'),
        content: path.join(__dirname, 'content'),
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
// let css = withCss(webpack)
module.exports = webpack
