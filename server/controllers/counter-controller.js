const services = require('../services/counter-service')

class CounterController {
  async getMetricInfo(req, res) {
    try {
      const appealsData = await services.getStatAppeals()
      const usersData = await services.getStatUsers()

      res.json({ appealsData, usersData })
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new CounterController()
