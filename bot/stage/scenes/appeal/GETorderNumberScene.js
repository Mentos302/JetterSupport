module.exports = () => {
  const Scene = require('telegraf/scenes/base')

  const scene = new Scene('getnumber')
  const controller = require('../../../controllers/AppealController')

  scene.enter(controller.orderNumberRequest)

  scene.on('text', controller.orderNumberValidation)

  scene.on('message', (ctx) => ctx.scene.reenter())

  return scene
}
