module.exports = () => {
  const Scene = require('telegraf/scenes/base')

  const scene = new Scene('confirm')
  const controller = require('../../../controllers/TalkieController')

  scene.enter((ctx) => ctx)

  return scene
}
