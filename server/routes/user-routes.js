const Router = require('express').Router
const controller = require('../controllers/user-controller')
const router = new Router()

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.get('/refresh', controller.refresh)

module.exports = router
