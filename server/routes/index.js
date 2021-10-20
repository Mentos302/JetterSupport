const userRoutes = require('./user-routes')
const counterRoutes = require('./counter-routes')
const appealRoutes = require('./appeal-routes')

module.exports = (app) => {
  app.use('/api/user', userRoutes)
  app.use('/api/counter', counterRoutes)
  app.use('/api/appeal', appealRoutes)
}
