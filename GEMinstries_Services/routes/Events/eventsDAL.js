const MongoClient = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017'
const urlParser = {useNewUrlParser: true}
const uri = 'events'

var eventsDAL = {}

eventsDAL.retrieveEvents = ()=>{

    return MongoClient.connect(dbUrl, urlParser).then(
        client => {
            client.db(uri).collection('upcoming').find().toArray().then(
                results => {
                    console.log(results)
                    return results
                }
            ).catch(
                err => {
                    console.log(err)
                    return null
                }
            )
        }
    ).catch(
        err => {
            console.log(err)
            return null
        }
    )
}

eventsDAL.addEvent = ()=>{
    
}

eventsDAL.delEvent = ()=>{

}

module.exports = eventsDAL