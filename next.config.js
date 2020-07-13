/* eslint-disable */

///////////////////////////////////////
// NEXT CONFIG
///////////////////////////////////////

const path = require('path')
const merge = require('webpack-merge')

function configureWebpack(config) {
  let srcPath = path.join(__dirname, 'src')

  // prettier-ignore
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: path.resolve(__dirname, './bld/webpack-markdown-loader.js'),
        },
      ],
    },
  })
}

let nextConfig = {webpack: configureWebpack}

///////////////////////////////////////
// NEXT PLUGINS
///////////////////////////////////////

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        // Config for next-optimized-images
      },
    ],

    // Other plugins here
  ],
  nextConfig,
)
