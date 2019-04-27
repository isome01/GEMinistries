var mongoDBClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

module.exports = (route) => {

    mongoDBClient.connect(url + route).then(
        (dbdriver) => {
            return dbdriver.db()
        }
    ).catch(
        err => {
            console.log('There\'s been an error...')
            throw new Error(err)
        }
    )
}