/* eslint-disable */

///////////////////////////////////////
// NEXT CONFIG
///////////////////////////////////////

const path = require('path')
const merge = require('webpack-merge')
const generateBlogExportPathMap = require('./bld/generateBlogExportPathMap')

function configureWebpack(config) {
  let srcPath = path.join(__dirname, 'src')

  // prettier-ignore
  return merge(config, {
    resolve: {
      alias: {
        content:    path.join(__dirname, 'content'),
        static:     path.join(__dirname, 'public', 'static'),
        components: path.join(srcPath, 'components'),
        general:    path.join(srcPath, 'general'),
        pages:      path.join(srcPath, 'pages'),
        sections:   path.join(srcPath, 'sections'),
      },
    },
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
        /* config for next-optimized-images */
      },
    ],

    // your other plugins here
  ],
  nextConfig,
)
