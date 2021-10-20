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

  async getByCategory(req, res) {
    try {
      const { category } = req.params

      const appeals = await service.getByCategory(category)

      res.json(appeals)
    } catch (e) {
      console.log(e)
    }
  }

  getSingleById(req, res) {
    try {
      const { id } = req.params

      const appeal = await service.getSingleById(id)

      res.json(appeal)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new AppealController()
