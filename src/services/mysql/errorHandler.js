const errorHandler = (error, rejectFunction) => {
  rejectFunction({
    error: error.message
  })
}

module.exports = { errorHandler }
