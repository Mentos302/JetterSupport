const Stage = require('telegraf/stage')

module.exports = (bot) => {
  const WelcomeScene = require('')()
  const GETorderNumberScene = require('')()
  const GETappealScene = require('')()
  const PUTappealScene = require('')()
  const ConfirmScene = require('')()

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
