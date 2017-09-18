
const db = require('../services/mysql')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Aprecie o Silêncio!')
    next()
  })

  server.get('usuario', async (req, res, next) => {
    try {
      res.send(await db.users().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.post('usuario', async (req, res, next) => {
    const { email, password } = req.params
    try {
      res.send(await db.users().save(email, password))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.put('usuario', async (req, res, next) => {
    const { id, password } = req.params
    try {
      res.send(await db.users().update(id, password))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.del('usuario', async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.users().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.get('categoria', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.post('categoria', async (req, res, next) => {
    const { name } = req.params
    try {
      res.send(await db.categories().save(name))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.put('categoria', async (req, res, next) => {
    const { id, name } = req.params
    try {
      res.send(await db.categories().update(id, name))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.del('categoria', async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.categories().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })
}

module.exports = routes
