
require('dotenv').config()

const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_TEST_DATABASE
})

const errorHandler = (error, msg, rejectFunction) => {
  // @TODO(Vitor Rodrigues): Refactor this method by implementing 'errorHandler' with only 2 parameters (error and reject) and use 'error.msg' instead of 'msg'
  if (error) {
    console.error(error)
  }
  rejectFunction({ error: msg })
}

module.exports = { connection, errorHandler }
