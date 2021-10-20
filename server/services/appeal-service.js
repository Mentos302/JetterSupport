const { Appeal } = require('../../database')
const pdfGeneration = require('./PDFGeneration')
const bot = require('../../bot')

class AppealService {
  async getAll() {
    try {
      const appeals = await Appeal.find()

      return appeals
    } catch (e) {
      console.log(e)
    }
  }

  async getByCategory(category) {
    try {
      const appeals = await Appeal.find({ category })

      return appeals
    } catch (e) {
      console.log(e)
    }
  }

  async getSingleById(_id) {
    try {
      const appeal = await Appeal.findOne({ _id })

      return appeal
    } catch (e) {
      console.log(e)
    }
  }

  async getPDFReport(_id) {
    const appeal = await Appeal.findOne({ _id })

    if (appeal) {
      const data = await new Promise((resolve) =>
        pdfGeneration(appeal, resolve)
      )

      return data
    }
  }

  async sendMessage(id, msg) {
    await bot.telegram.sendMessage(id, msg)
  }

  async deleteAppeal(_id) {
    try {
      await Appeal.deleteOne({ _id })

      return 200
    } catch (e) {
      console.log(e)
    }
  }

  async updateStatus(_id, status) {
    try {
      await Appeal.updateOne({ _id }, { status })

      return 200
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new AppealService()
