
const categories = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT id, name FROM categories', (error, results) => {
          if (error) {
            errorHandler(error, reject)
            return false
          }

          if (!results.length) {
            errorHandler(new Error('Nenhuma Categoria Encontrada'), reject)
            return false
          }

          resolve({ categories: results })
        })
      })
    },

    one: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT * FROM categories WHERE id = ?', [id], (error, results) => {
          if (error) {
            errorHandler(error, reject)
            return false
          }

          if (!results.length) {
            errorHandler(new Error(`Categoria de ID ${id} Não Encontrada`), reject)
            return false
          }

          resolve({ category: results[0] })
        })
      })
    },

    save: (name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('INSERT INTO categories (name) VALUES (?)', [name], (error, results) => {
          if (error) {
            errorHandler(error, reject)
            return false
          }

          if (!results.affectedRows) {
            errorHandler(new Error(`Falha ao Tentar Inserir a Categoria ${name}`), reject)
            return false
          }

          resolve({ category: { name, id: results.insertId } })
        })
      })
    },

    update: (id, name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (error, results) => {
          if (error) {
            errorHandler(error, reject)
            return false
          }

          if (!results.affectedRows) {
            errorHandler(new Error(`Falha ao Tentar Atualizar a Categoria de ID ${id}`), reject)
            return false
          }

          resolve({ category: { name, id }, affectedRows: results.affectedRows })
        })
      })
    },

    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('DELETE FROM categories WHERE id = ?', [id], (error, results) => {
          if (error) {
            errorHandler(error, reject)
            return false
          }

          if (!results.affectedRows) {
            errorHandler(new Error(`Falha ao Tentar Remover a Categoria de ID ${id}`), reject)
            return false
          }

          resolve({ message: 'Categoria Removida com Sucesso!', affectedRows: results.affectedRows })
        })
      })
    }
  }
}

module.exports = categories
