
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'mysql',
  user: 'restful_ws',
  password: 'restful_ws',
  database: 'restful_ws'
})

const categories = new Promise((resolve, reject) => {
  connection.query('SELECT id, name FROM categories', (error, results) => {
    if (error) {
      reject(error)
    }
    resolve({ categories: results })
  })
})

module.exports = categories
