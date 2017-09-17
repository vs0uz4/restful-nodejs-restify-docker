
const categories = deps => {
  return new Promise((resolve, reject) => {
    const { connection } = deps
    connection.query('SELECT id, name FROM categories', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve({ categories: results })
    })
  })
}

module.exports = categories
