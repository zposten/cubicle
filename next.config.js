/* eslint-disable */
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

let config = {webpack: configureWebpack, exportPathMap}
// let css = withCss(config)
module.exports = config
