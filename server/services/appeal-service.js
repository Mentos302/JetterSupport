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
}

module.exports = new AppealService()
