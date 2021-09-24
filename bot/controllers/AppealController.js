const { chatType } = require('telegraf/composer')
const Extra = require('telegraf/extra')
const service = require('../services/AppealService')
class AppealController {
  orderNumberRequest(ctx) {
    ctx.reply(ctx.i18n.t('appeal.reqnumber'), Extra.HTML())
  }

  orderNumberValidation(ctx) {
    parseInt(ctx.message.text)
      ? ctx.scene.enter('getappeal', { orderId: ctx.message.text })
      : ctx.reply(ctx.i18n.t('appeeal.validationfailed'))
  }

  appealRequest(ctx) {
    if (ctx.scene.state.orderId)
      ctx.session.appeal.orderId = ctx.scene.state.orderId
    let msg
    ctx.session.appeal.category = 'reclamation'
      ? (msg = 'appeal.requestReclamation')
      : (msg = 'appeal.requestMessage')

    ctx.reply(ctx.i18n.t(msg), Extra.HTML())
  }

  appealResponse(ctx) {
    ctx.session.appeal.msg = ctx.message.text

    ctx.scene.enter('putappeal')
  }

  apperalPutting(ctx) {
    const { text, photos, videos, documents } = ctx.session.appeal

    let msg = ctx.i18n.t('appeal.putting', { text })

    if (videos || photos || documents) {
      msg += `<i>${ctx.i18n.t('appeal.addfiles')}<b>${
        photos ? photos.length : 0
      }</b> 📷  <b>${videos ? videos.length : 0}</b> 📹 <b>${
        documents ? documents.length : 0
      }</b> 📄</i>`
    } else {
      msg += ctx.i18n.t('appeal.nofiles')
    }

    ctx.reply(
      msg,
      Extra.HTML().markup((m) =>
        m.inlineKeyboard([
          [m.callbackButton(`📸 Прикрепить доп.материалы`, 'addmedia')],
          [
            m.callbackButton(`❌ Очистить запрос`, 'clearing'),
            m.callbackButton(`📬 Отправить`, 'submit'),
          ],
        ])
      )
    )
  }

  puttingAddMediaRequest(ctx) {
    ctx.reply(ctx.i18n.t('appeal.mediarequest'), Extra.HTML())
  }

  async puttingPhotoHandler(ctx) {
    ctx.session.appeal.photos = ctx.session.reqbody.photos || []

    const photos = ctx.message.photo

    ctx.session.appeal.photos.push(
      await ctx.telegram.getFileLink(photos[photos.length - 1].file_id)
    )

    ctx.scene.reenter(`putappeal`)
  }

  async puttingVideoHandler(ctx) {
    ctx.session.appeal.videos = ctx.session.reqbody.videos || []

    ctx.session.appeal.videos.push(
      await ctx.telegram.getFileLink(ctx.message.video.file_id)
    )

    ctx.scene.reenter(`putappeal`)
  }

  async puttingDocumentHandler(ctx) {
    ctx.session.appeal.documents = ctx.session.reqbody.documents || []

    ctx.session.appeal.documents.push(
      await ctx.telegram.getFileLink(ctx.message.document.file_id)
    )

    ctx.scene.reenter(`putappeal`)
  }

  async puttingMediaGroupHandler(ctx) {
    ctx.session.appeal.photos = ctx.session.reqbody.photos || []

    for (const message of ctx.mediaGroup) {
      ctx.session.appeal.photos.push(
        await ctx.telegram.getFileLink(
          message.photo[message.photo.length - 1].file_id
        )
      )
    }

    ctx.scene.reenter(`putappeal`)
  }

  async puttingPreventDefault(ctx) {
    ctx.session.appeal = {}

    ctx.scene.enter('getappeal')
  }

  async puttingSubmit(ctx) {
    const appeal = {
      from: ctx.from.id,
      category: ctx.session.appeal.category,
      text: ctx.session.appeal.msg,
      photos: ctx.session.appeal.photos,
      videos: ctx.session.appeal.videos,
      documents: ctx.session.appeal.documents,
      orderId: ctx.session.appeal.orderNumber,
    }

    service.newAppeal(appeal)
  }
}

module.exports = new AppealController()
