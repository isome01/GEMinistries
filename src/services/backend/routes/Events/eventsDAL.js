const dbDriver = require('../../public/javascripts/dbdriver')
const Event = require('../../public/javascripts/Event')
const ObjectId = require('mongodb').ObjectID
const uri = 'GEM'

let eventsDAL = {}

eventsDAL.retrieveEvents = () => {

    return dbDriver(uri).then(
        db => {
            return db.collection('events').find().toArray().then(
                results => results,
                err => err
            )
        },
        err => {throw new Error(err)}
    )
}

eventsDAL.addEvent = event => {
    return dbDriver(uri).then(
        db => {
          return db.collection('events').insertOne({
              'title': `${event.title}`,
              'startTime': `${event.startTime || ''}`,
              'endTime': `${event.endTime || ''}`,
              'startDate': `${event.startDate}`,
              'endDate': `${event.endDate}`,
              'description': `${event.description}`,
              'credentials': {
                  'author': `${event.user || 'Greg Jones'}`,
                  'created': `${new Date().toString()}`
              },
              'attachment': `${event.attachment}`
          }).then(
      result => {
              if (result.insertedCount >= 1) {
                return `Event "${event.title}" created.`
              }
              return `Uh oh... Event ${event.title} not created.`
            }
          ).catch(
          err => {throw new Error(err)}
          )
        }
    ).catch(
        err => {throw new Error(err)}
    )
}

eventsDAL.updateEvent = (event, replaceMedia=false) => {
  const id = new ObjectId(event._id)
  return dbDriver(uri).then(
    db => {
      db.collection('events').findOne({
        _id: id
      }).then(
        result => {
          console.log(...event.attachment, ...result.attachment, '\nreplacedMedia:', replaceMedia)
          const dataCopy = Event(
            event.title || result.title,
            event.description || result.description,
            event.startDate || result.startDate,
            event.startTime || result.startTime,
            event.endDate || result.endDate,
            event.endTime || result.endTime,
            event.credentials || result.credentials,
            replaceMedia
              ? (event.attachment || result.attachment)
              : [...event.attachment, ...result.attachment]
          )

          db.collection('events').updateOne({
            _id: ObjectId(dataCopy.id)
          },{$set: {
              'title': `${dataCopy.title}`,
              'description': `${dataCopy.description}`,
              'startTime': `${dataCopy.startTime}`,
              'endTime': `${dataCopy.endTime}`,
              'startDate': `${dataCopy.startDate}`,
              'endDate': `${dataCopy.endDate}`,
              'attachment': `${dataCopy.attachment}`
          }}, {}).then(
          result => result,
          err => err
          ).catch(
            err => {throw new Error(err)}
          )
        },
      ).catch(
        err => err
      )
    }
  )
}

eventsDAL.deleteEvent = () => {

}

module.exports = eventsDAL
