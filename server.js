const express = require('express')
const next = require('next')

const isDev = process.env.NODE_ENV !== 'production'
const app = next({dev: isDev})
const handle = app.getRequestHandler()

const mode = isDev ? 'development' : 'production'
console.log(`> Running a ${mode} build`)

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = {id: req.params.id}
      app.render(req, res, actualPage, queryParams)
    })

    server.get(['/blog', '/blog/*'], (req, res) => {
      return app.render(req, res, '/blog', {slug: req.params[0]})
    })

    server.get('*', handle)

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
