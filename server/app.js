const path = require('path')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const db = require('../database')
const bot = require('../bot')
const errorMiddleware = require('./middleware/error-middleware')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
require('./routes')(app)
app.use(errorMiddleware)

app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
})

db.connection.once('open', async () => {
  console.log('Connected to MongoDB')
  bot.launch()

  app.listen(3001, () => {
    console.log('Server has been started ...')
  })
})
