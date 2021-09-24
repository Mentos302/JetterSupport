module.exports = () => {
  const Scene = require('telegraf/scenes/base')

  const scene = new Scene('getappeal')
  const controller = require('../../../controllers/AppealController')

  scene.enter(controller.appealRequest)

  scene.on('text', controller.appealResponse)

  scene.on('message', (ctx) => ctx.reenter())

  return scene
}
