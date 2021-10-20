const { Router } = require('express')
const controller = require('../controllers/appeal-controller')
const router = new Router()

router.get('/', controller.getAll)
router.get('/:category', controller.getByCategory)
router.get('/single/:id', controller.getSingleById)

module.exports = router
