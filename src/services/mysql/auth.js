
const sha1 = require('sha1')
const jwt = require('jsonwebtoken')

const auth = deps => {
  return {
    authenticate: (email, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        const queryString = 'SELECT id, email FROM users WHERE email = ? AND password = ?'
        const queryData = [email, sha1(password)]

        connection.query(queryString, queryData, (error, results) => {
          if (error || !results.length) {
            // @TODO(Vitor Rodrigues): Refuse to call the 'errorHandler' function, using only two parameters (error and rejectFunction), when there is no 'error' create a new instance with 'new Error("Descrição do Erro")'
            errorHandler(error, 'Falha ao localizar o usuário', reject)
            return false
          }

          const { email, id } = results[0]

          const token = jwt.sign({email, id}, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

          resolve({ token })
        })
      })
    }
  }
}

module.exports = auth
