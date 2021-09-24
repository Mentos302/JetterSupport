const Extra = require('telegraf/extra')

class TalkieController {
  welcomeMessage(ctx) {
    ctx.reply(
      ctx.i18n.t('talkie.welcome', { name: ctx.from.first_name }),
      Extra.HTML().markup((m) =>
        m.inlineKeyboard([
          [m.callbackButton(`⚡️ Идея`, 'idea')],
          [m.callbackButton(`🛒 Закупить`, 'tobuy')],
          [m.callbackButton(`🚧 Сообщить о проблеме`, 'problem')],
          [m.callbackButton(`🚨 Рекламация`, 'reclamation')],
        ])
      )
    )
  }

  chosenCategory(ctx) {
    const category = ctx.callbackQuery.data
    let sceneToGo

    if (category === 'reclamation') {
      sceneToGo = 'getnumber'
    } else {
      sceneToGo = 'getappeal'
    }

    ctx.session.appeal = { category }
    ctx.scene.enter(sceneToGo)
  }
}

module.exports = new TalkieController()
