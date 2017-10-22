const { connection, errorHandler } = require('./setup')

const categoryModule = require('./categories')({ connection, errorHandler })
const userModule = require('./users')({ connection, errorHandler })
const authModule = require('./auth')({ connection, errorHandler })

module.exports = {
  categories: () => categoryModule,
  users: () => userModule,
  auth: () => authModule
}
