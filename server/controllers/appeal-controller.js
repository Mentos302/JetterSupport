const service = require('../services/appeal-service')

class AppealController {
  async getAll(req, res) {
    try {
      const appeals = await service.getAll()

      res.json(appeals)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new AppealController()
