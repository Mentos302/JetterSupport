module.exports = () => {
  const Scene = require('telegraf/scenes/base')

  const scene = new Scene('getappeal')
  const controller = require('../../../controllers/AppealController')

  scene.enter((ctx) => ctx)

  return scene
}
