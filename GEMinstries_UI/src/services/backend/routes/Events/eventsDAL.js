const dbDriver = require('../../public/javascripts/dbdriver')
const uri = 'GEM'

var eventsDAL = {}

eventsDAL.retrieveEvents = ()=>{

    return dbDriver(uri).then(
        db => {
            return db.collection('events').find().toArray().then(
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

eventsDAL.addEvent = event =>{
    return dbDriver(uri).then(
        db => {
            return db.collection('events').insertOne({
                'type': `${event.type}`,
                'title': `${event.title}`,
                'time': `${event.time}`,
                'date': `${event.date}`,
                'description': `${event.description}`,
                'credentials': {
                    'author': `${event.user}`,
                    'created': `${new Date().toDateString}`
                }
            }).then(
                result => { 
                    result
                }
            ).catch(
                err => {throw new Error(err)}
            )
        }
    ).catch(
        err => {throw new Error(err)}
    )
}

eventsDAL.delEvent = ()=>{

}

module.exports = eventsDAL