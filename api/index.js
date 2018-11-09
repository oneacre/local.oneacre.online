const app = require('express')()

// isAccessGranted
// This function is responsible for checking the API key.
// Currently the API key is hardcoded in the function however
// Later we will build a database collection to add and remove API keys
// It's called each time an API route is used

function isAccessGranted(req, res, next) {

  // First we set the granted access to false
  let is_granted = false

  // We define the API key
  let api_key = req.query.api

  // we define the error message
  let API_error_message =
    'Please request an API key by emailing us at: <a href="mailto:hi@oneacre.online?subject=API Key">hi@oneacre.online</a>'

  // we check first if the key is defined
  if (api_key === undefined) {
    // if not defined send the error message
    res.send(API_error_message)

  } else if (api_key.includes('')) {
    // if defined grant the request access
    is_granted = true
    // go to the next operation (allow the function to exit and continue)
    next()

  } else {
    // if not any of the above send error message anyways
    res.send(API_error_message)

  }
}

// Use isAccessGranted on every API route when not in production mode
if (process.env.NODE_ENV === 'production') {
  app.use('*', isAccessGranted)
}

// all api routes with their route files
// app.use('/', require('./routes/index'))
app.use('/lines', require('./routes/lines'))
app.use('/publication', require('./routes/publication'))

module.exports = {
  path: '/api',
  handler: app
}
