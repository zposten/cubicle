/* eslint-disable */

///////////////////////////////////////
// NEXT CONFIG
///////////////////////////////////////

const path = require('path')
const merge = require('webpack-merge')
const generateBlogExportPathMap = require('./general/generateBlogExportPathMap')

function configureWebpack(config) {
  return merge(config, {
    resolve: {
      alias: {
        pages: path.join(__dirname, 'pages'),
        components: path.join(__dirname, 'components'),
        layout: path.join(__dirname, 'layout'),
        general: path.join(__dirname, 'general'),
        content: path.join(__dirname, 'content'),
        sections: path.join(__dirname, 'sections'),
        static: path.join(__dirname, 'static'),
      },
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: path.resolve(
            __dirname,
            './general/webpack-markdown-loader.js',
          ),
        },
      ],
    },
  })
}

async function exportPathMap(
  defaultPathMap,
  {dev, dir, outDir, distDir, buildId},
) {
  return {
    ...defaultPathMap,
    ...generateBlogExportPathMap(),
  }
}

let nextConfig = {webpack: configureWebpack, exportPathMap}

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
