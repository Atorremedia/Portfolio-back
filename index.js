const express = require ('express')
const articleCards = require('./data/articleCards.json')
const article000 = require('./data/article000.js')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

// app.use(express.json())

app.get('/blog-article-cards', (req, res) => {
    res.json(articleCards)
  })

app.get('/article000', (req, res) => {
    res.send(article000)
  })

  app.use((req, res) => {
  res.status(404).send('<h1>404 Not found</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})