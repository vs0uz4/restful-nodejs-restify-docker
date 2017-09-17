
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'mysql',
  user: 'restful_ws',
  password: 'restful_ws',
  database: 'restful_ws'
})

const categories = require('./categories')({ connection })

module.exports = categories
