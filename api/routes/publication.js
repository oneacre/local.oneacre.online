const router = require('express').Router()

router.get('/', (req, res) => {
  res.write('Hey publication!')
  res.end()
})

module.exports = router
