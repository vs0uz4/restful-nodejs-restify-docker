
const sha1 = require('sha1')

const users = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT id, email FROM users', (error, results) => {
          if (error) {
            errorHandler(error, reject)
            return false
          }

          if (!results.length) {
            errorHandler(new Error('Nenhum Usuário Encontrado'), reject)
            return false
          }

          resolve({ users: results })
        })
      })
    },

    one: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('SELECT * FROM users WHERE id = ?', id, (error, results) => {
          if (error) {
            errorHandler(error, reject)
            return false
          }

          if (!results.length) {
            errorHandler(new Error(`Usuário se ID ${id} Não Encontrado`), reject)
            return false
          }

          resolve({ user: results[0] })
        })
      })
    },

    save: (email, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, sha1(password)], (error, results) => {
          if (error) {
            errorHandler(error, reject)
            return false
          }

          if (!results.affectedRows) {
            errorHandler(new Error(`Falha ao Tentar Inserir o Usuário ${email}`), reject)
            return false
          }

          resolve({ user: { email, id: results.insertId } })
        })
      })
    },

    update: (id, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('UPDATE users SET password = ? WHERE id = ?', [sha1(password), id], (error, results) => {
          if (error) {
            errorHandler(error, reject)
            return false
          }

          if (!results.affectedRows) {
            errorHandler(new Error(`Falha ao Tentar Atualizar o Usuário de ID ${id}`), reject)
            return false
          }

          resolve({ user: { id }, affectedRows: results.affectedRows })
        })
      })
    },

    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
          if (error) {
            errorHandler(error, reject)
            return false
          }

          if (!results.affectedRows) {
            errorHandler(new Error(`Falha ao Tentar Remover o Usuário de ID ${id}`), reject)
            return false
          }

          resolve({ message: 'Usuário Removido com Sucesso!', affectedRows: results.affectedRows })
        })
      })
    }
  }
}

module.exports = users
