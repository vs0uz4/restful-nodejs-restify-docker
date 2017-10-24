
const test = require('ava')
const { connection, errorHandler } = require('./setup')

const users = require('../users')({ connection, errorHandler })
const auth = require('../auth')({ connection, errorHandler })

test.beforeEach(async t => {
  connection.query('TRUNCATE TABLE users')
  await users.save('user@test.com', '123456')
})

test.after.always(t => connection.query('TRUNCATE TABLE users'))

test('Login de Usuário - Sucesso', async t => {
  const result = await auth.authenticate('user@test.com', '123456')
  t.not(result.token, null)
  t.not(result.token.length, 0)
})

test('Login de Usuário - Falha', async t => {
  const promise = auth.authenticate('user2@test.com', '123456')
  const error = await t.throws(promise)
  t.is(error.error, 'Falha ao Tentar Localizar o Usuário')
})
