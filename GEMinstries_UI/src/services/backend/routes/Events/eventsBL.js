const eventsDAL = require('./eventsDAL')
const eventsBL = {}

eventsBL.retrieveEvents = () => {
    return eventsDAL.retrieveEvents().then(
        results => {
            if (results && results != null)
                return results
            else return {message: "There are no entries."}
        }
    ).catch(
        err => console.log(err)
    )
}

eventsBL.addEventBL = event =>{
    return eventsDAL.retrieveEvents(event).then(
        result => result
    ).catch(
        err => err
    )
}

eventsBL.delEventBL = id =>{
    return
}

module.exports = eventsBL
