const fm = require('front-matter')
const MarkdownIt = require('markdown-it')

function markdownLoader(source) {
  this.cacheable()

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight: highlightCode,
  })

  const frontmatter = fm(source)
  frontmatter.attributes.html = md.render(frontmatter.body)

  return `module.exports = ${JSON.stringify(frontmatter.attributes)};`
}

function highlightCode(code, language) {
  return code
}

module.exports = markdownLoader
