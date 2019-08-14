const mongoDBClient = require('mongodb').MongoClient
const urlParser = {useNewUrlParser: true}
const url = 'mongodb://www.gemoutreach.org:27017'

module.exports = uri => {

    return mongoDBClient.connect(url, urlParser).then(
        client => client.db(uri)
    ).catch(
        err => {
            console.log('There\'s been an error...')
            throw new Error(err)
        }
    )
}
