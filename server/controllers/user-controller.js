const userService = require('../services/user-service')

class userController {
  async registration(req, res, next) {
    try {
      const { login, password } = req.body
      const userData = await userService.registration(login, password)

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })

      return res.json(userData)
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: 'Ошибка при регистрации' })
    }
  }
  async login(req, res, next) {
    try {
      const { login, password } = req.body

      const user = await userService.login(login, password)

      res.status(200).json(user)
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: 'Ошибка при авторизации' })
    }
  }

  async logout(req, res, next) {
    try {
    } catch (error) {}
  }
  async refresh(req, res, next) {
    try {
    } catch (error) {}
  }
}

module.exports = new userController()
