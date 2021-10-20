const { Router } = require('express')
const controller = require('../controllers/appeal-controller')
const router = new Router()

router.get('/', controller.getAll)
router.get('/:category', controller.getByCategory)
router.get('/single/:id', controller.getSingleById)
router.get('/pdf/:id', controller.getPDFReport)
router.post('/sendMessage', controller.sendTelegramMessage)
router.delete('/:id', controller.deleteAppeal)
router.put('/status', controller.updateStatus)

module.exports = router
