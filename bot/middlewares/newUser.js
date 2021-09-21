const { User } = require('../../database')

module.exports = (ctx) => {
  const chat_id = ctx.from.id
  const user = User.findOne({ chat_id })

  if (!user) {
    try {
      User.create({
        chat_id,
      })
    } catch (e) {
      console.log(e)
    }
  }

  ctx.scene.enter('welcome')
}
