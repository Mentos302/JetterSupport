const { Appeal } = require('../../database')

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
}

module.exports = new AppealService()
