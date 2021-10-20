const { Router } = require('express')
const controller = require('../controllers/counter-controller')
const router = new Router()

router.get('/', controller.getMetricInfo)

module.exports = router
