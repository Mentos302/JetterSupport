const Stage = require('telegraf/stage')

module.exports = (bot) => {
  const WelcomeScene = require('./scenes/WelcomeScene')()
  const GETorderNumberScene = require('./scenes/appeal/GETorderNumberScene')()
  const GETappealScene = require('./scenes/appeal/GETappealScene')()
  const PUTappealScene = require('./scenes/appeal/PUTappealScene')()
  const ConfirmScene = require('./scenes/ConfirmScene')()

  const stage = new Stage(
    [
      WelcomeScene,
      GETorderNumberScene,
      GETappealScene,
      PUTappealScene,
      ConfirmScene,
    ],
    {
      ttl: 999,
    }
  )

  bot.use(stage.middleware())
}
