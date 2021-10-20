const userRoutes = require('./user-routes')
const counterRoutes = require('./counter-routes')

module.exports = (app) => {
  app.use('/api/user', userRoutes)
  app.use('/api/counter', counterRoutes)
}
