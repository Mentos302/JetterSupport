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

  async getSingleById(req, res) {
    try {
      const { id } = req.params

      const appeal = await service.getSingleById(id)

      res.json(appeal)
    } catch (e) {
      console.log(e)
    }
  }

  async getPDFReport(req, res) {
    try {
      const { id } = req.params

      const reportLink = await service.getPDFReport(id)

      res.json(reportLink)
    } catch (e) {
      console.log(e)
    }
  }

  async sendTelegramMessage(req, res) {
    try {
      const { id, msg } = req.body

      await service.sendMessage(id, msg)

      res.status(200).json({ message: `Сообщение успешно отправлено` })
    } catch (e) {
      res.status(500).json({ message: `Ошибка при отправке сообщения` })
    }
  }

  async deleteAppeal(req, res) {
    try {
      const { id } = req.params

      await service.deleteAppeal(id)

      res.status(200).json({ message: `Обращение успешно удалено` })
    } catch (e) {
      res.status(500)
    }
  }

  async updateStatus(req, res) {
    try {
      const { id, status } = req.body

      await service.updateStatus(id, status)

      res.status(200).json({ message: `Обращение успешно обновлено` })
    } catch (e) {
      res.status(500)

      console.log(e)
    }
  }
}

module.exports = new AppealController()
