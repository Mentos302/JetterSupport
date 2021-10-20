const { User } = require('../../database')
const moment = require('moment')

module.exports = async (ctx) => {
  const chat_id = ctx.from.id
  const user = await User.findOne({ chat_id })

  if (!user) {
    try {
      User.create({
        chat_id,
        date: moment().format('DD.MM.YYYY'),
      })
    } catch (e) {
      console.log(e)
    }
  }

  ctx.scene.enter('welcome')
}
