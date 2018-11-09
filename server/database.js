const assert = require('assert')
const MongoClient = require('mongodb').MongoClient
// const MONGO_URL = require('../settings/mongo_url.js')
const chalk = require('chalk')

let _db

function initDb(callback) {
  if (_db) {
    console.warn('Trying to init DB again!')
    return callback(null, _db)
  }
  MongoClient.connect(
    MONGO_URL,
    { useNewUrlParser: true },
    connected
  )
  function connected(err, db) {
    if (err) {
      return callback(err)
    }
    console.log(`${chalk.green('✓ success')} Database initialized`)
    _db = db
    return callback(null, _db)
  }
}

function getDb() {
  assert.ok(_db, 'Db has not been initialized. Please called init first.')
  return _db
}

module.exports = {
  getDb,
  initDb
}
