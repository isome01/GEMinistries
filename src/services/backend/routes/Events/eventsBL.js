const manageAttachments = require('../../public/javascripts/manageAttachments')
const Event = require('../../public/javascripts/Event')
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
        err => err
    )
}

eventsBL.addEventBL = event =>{
    return eventsDAL.addEvent(event).then(
        result => result
    ).catch(
        err => err
    )
}

eventsBL.updateEventBL = event => {
    let {attachment, replaceMedia} = event

    return eventsDAL.updateEvent(Event(
      event.title,
      event.description,
      event.startDate,
      event.startTime,
      event.endDate,
      event.endTime,
      manageAttachments(attachment),
      event.credentials
      ), (replaceMedia === 'checked' ? true : false)
    ).then(
      result => result
    ).catch(
      err => err
    )
}

eventsBL.delEventBL = event =>{
    return eventsDAL.deleteEvent(event).then(
      result => result,
      err => err
    )
}

module.exports = eventsBL
