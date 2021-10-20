module.exports = () => {
  const Scene = require('telegraf/scenes/base')

  const scene = new Scene('putappeal')
  const controller = require('../../../controllers/AppealController')

  scene.enter(controller.appealPutting)

  scene.action('addmedia', controller.puttingAddMediaRequest)
  scene.action('clearing', controller.puttingPreventDefault)
  scene.action('submit', controller.puttingSubmit)

  scene.on('photo', controller.puttingPhotoHandler)
  scene.on('video', controller.puttingVideoHandler)
  scene.on('document', controller.puttingDocumentHandler)
  scene.on('mediagroup', controller.puttingMediaGroupHandler)

  return scene
}
