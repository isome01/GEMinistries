const userAuth = {user: 'dbadmin', pwd: 'M4st3rful3x3cut10n'}
const mongoDBClient = require('mongodb').MongoClient
const urlParser = {useNewUrlParser: true}
const url = `mongodb://${userAuth.user}:${userAuth.pwd}@www.gemoutreach.org:27017`

module.exports = uri => (
  mongoDBClient.connect(url, urlParser).then(
    client => client.db(uri)
  ).catch(
    err => {
      console.log('There\'s been an error...', err)
      return null
    }
  )
)
