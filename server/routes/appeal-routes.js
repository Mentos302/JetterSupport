const { Router } = require('express')
const controller = require('../controllers/appeal-controller')
const router = new Router()

router.get('/', controller.getAll)

module.exports = router
