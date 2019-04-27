var eventsDAL = require('./eventsDAL')
var eventsBL = {}

eventsBL.retrieveEvents = () => {
    return eventsDAL.retrieveEvents().then(
        results => {
            if (results && results != null)
                return (JSON.stringify(results) )
        }
    ).catch(
        err => console.log(err)
    )
}

eventsBL.addEventBL = event =>{
    return
}

eventsBL.delEventBL = id=>{
    return
}

module.exports = eventsBL