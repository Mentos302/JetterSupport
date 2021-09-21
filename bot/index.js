const { db } = require('../database')
const path = require('path')
const I18n = require('../database')
const updateMiddleware = require('./middlewares/updateMiddleware')
const sceneInitialisation = require('./stage')
const botError = require('./exceptions')

const rateLimit = require('telegraf-ratelimit')
const session = require('telegraf/session')

module.exports = (bot) => {
  const i18n = new I18n({
    directory: path.resolve(__dirname, '..', 'bot', 'locales'),
    defaultLanguage: 'ru',
    defaultLanguageOnMissing: true,
  })

  bot.use(i18n.middleware())

  bot.catch((error) => {
    console.log(error)
  })

  bot.use(
    session({
      getSessionKey: (ctx) =>
        ctx.from &&
        `${ctx.from.id}:${(ctx.chat && ctx.chat.id) || ctx.from.id}`,
    })
  )

  const limitConfig = {
    window: 1000,
    limit: 1,
    onLimitExceeded: (ctx) =>
      ctx.reply('Превышение лимита, попробуйте ещё раз!'),
  }

  bot.use(rateLimit(limitConfig))

  bot.context.i18n = i18n

  bot.start((ctx) => console.log(ctx.from.first_name))

  sceneInitialisation(bot)
}
