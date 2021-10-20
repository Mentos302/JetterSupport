const getFilesURL = require('./helpers/getFilesURL')
const nodeMailer = require('./helpers/nodeMailer')
const moment = require('moment')
const { Appeal } = require('../../database')

class AppealService {
  async newAppeal(appeal) {
    const { from, category, text, photos, videos, documents, orderId } = appeal

    try {
      const appeals = await Appeal.find()

      await Appeal.create({
        from,
        category,
        reqidenty: appeals.length + 1,
        text,
        orderId,
        photos: await getFilesURL(photos),
        videos: await getFilesURL(videos),
        documents: await getFilesURL(documents),
        date: moment().format('DD.MM.YYYY'),
        status: 'open',
      })
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new AppealService()
