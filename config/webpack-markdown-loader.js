const fm = require('front-matter')
const MarkdownIt = require('markdown-it')

const hljs = require('highlight.js/lib/highlight')
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('swift', require('highlight.js/lib/languages/swift'))
hljs.registerLanguage(
  'javascript',
  require('highlight.js/lib/languages/javascript'),
)

function markdownLoader(source) {
  this.cacheable()

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight: highlightCode,
    langPrefix: 'language-',
    typographer: true,
  })

  const frontmatter = fm(source)
  frontmatter.attributes.html = md.render(frontmatter.body)

  return `module.exports = ${JSON.stringify(frontmatter.attributes)};`
}

function highlightCode(codeStr, language) {
  if (language && hljs.getLanguage(language)) {
    try {
      return hljs.highlight(language, codeStr).value
    } catch (err) {
      console.error(err.stack) // eslint-disable-line no-console
    }
  }

  // try {
  //   return hljs.highlightAuto(codeStr).value
  // } catch (err) {
  //   console.error(err.stack) // eslint-disable-line no-console
  // }

  // MarkdownIt specifies returning empty string if no changes have
  // been made
  return ''
}

module.exports = markdownLoader
