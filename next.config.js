const path = require('path')

module.exports = {
  webpack (config) {
    config.resolve.alias['pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['general'] = path.join(__dirname, 'general')
    return config
  }
}