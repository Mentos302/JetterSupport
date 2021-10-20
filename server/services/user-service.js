const { User } = require('../../database')
const bcrypt = require('bcrypt')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class userService {
  async registration(login, password) {
    const candidate = await User.findOne({ login })

    if (candidate) {
      throw ApiError.BadRequest('Пользователь с таким login уже существует')
    }

    const hashedPassword = await bcrypt.hash(password, 3)

    const user = await User.create({
      login,
      password: hashedPassword,
    })

    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({ ...userDto })

    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto,
    }
  }

  async login(login, password) {
    const user = await User.findOne({ login })

    if (!user) {
      throw new Error('User not found')
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      throw new Error('Password is not valid')
    }

    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({ ...userDto })

    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto,
    }
  }
}

module.exports = new userService()
