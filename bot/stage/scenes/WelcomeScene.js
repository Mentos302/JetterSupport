module.exports = () => {
  const Scene = require('telegraf/scenes/base')

  const scene = new Scene('welcome')
  const controller = require('../../controllers/TalkieController')

  scene.enter(controller.welcomeMessage)

  scene.on('callback_query', controller.chosenCategory)

  return scene
}
