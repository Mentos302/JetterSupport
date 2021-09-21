const ngrok = requite('ngrok')
const express = require('express')
const { db } = require('../database')

module.exports = () => {
  const app = express()

  const bot = new Telegraf(process.env.BOT_TOKEN)

  botInitializtion(bot)

  db.connection.once('open', async () => {
    console.log('Connected to MongoDB')
    app.use(bot.webhookCallback('/secreting'))
    bot.telegram.setWebhook(`${await ngrok.connect(8443)}/secreting`)

    app.listen(8443, () => {
      console.log('Bot has been started ...')
    })
  })
}
