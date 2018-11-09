const router = require('express').Router()
const MongoClient = require('mongodb').MongoClient
const getDb = require('../../server/database').getDb
const chalk = require('chalk')

router.get('/', function(req, res) {
  const db = getDb()

  db.db('heroku_pgl6fmwb')
    .collection('oneacre_lines')
    // .collection('oneacre_lines')
    .find()
    .limit(40)
    .toArray(function(err, results) {
      res.json(results)
    })
})

router.post('/', function(req, res) {
  const db = getDb()

  db.db('heroku_pgl6fmwb')
    .collection('testing_lines')
    .insertOne(req.body, function(err, result) {
      if (err) throw err

      console.log(chalk.green('success!'))
    })
})

module.exports = router
