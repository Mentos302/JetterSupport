const ngrok = require('ngrok')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const db = require('../database')
const botInitializtion = require('../bot')
const Telegraf = require('telegraf')
const errorMiddleware = require('./middleware/error-middleware')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
require('./routes')(app)
app.use(errorMiddleware)

const bot = new Telegraf(process.env.BOT_TOKEN)

botInitializtion(bot)

db.connection.once('open', async () => {
  console.log('Connected to MongoDB')
  bot.launch()

  app.listen(3001, () => {
    console.log('Server has been started ...')
  })
})
