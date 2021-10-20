module.exports = class userDto {
  login
  id

  constructor(model) {
    this.login = model.login
    this.id = model.id.toString()
  }
}
