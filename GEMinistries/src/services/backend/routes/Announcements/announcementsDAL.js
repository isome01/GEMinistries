const dbDriver = require('../../public/javascripts/dbdriver')
const ObjectId = require('mongodb').ObjectID
const Announcement = require('../../public/javascripts/Announcement')
const uri = 'GEM'
const collection = 'announcements'

let announcementsDAL = {}

announcementsDAL.getAnnouncements = () => {
  return dbDriver(uri).then(
    db => {
      return db.collection(collection).find().toArray().then(
        results => results
      )
    }
  ).catch(
    err => ({message: err})
  )
}

announcementsDAL.addAnnouncement = announcement => {
  return dbDriver(uri).then(
    db => db.collection('announcements').insertOne({
      'header': `${announcement.header}`,
      'title': `${announcement.header}`,
      'summary': `${announcement.summary}`,
      'attachment': `${announcement.attachment}`,
      'created': `${new Date().toString()}`
    }).then(
      result => result
    )
  ).catch(
    err => ({message: err})
  )
}

announcementsDAL.updateAnnouncement = (announcement, replaceMedia=false) => {
  const id = new ObjectId(announcement._id)
  return dbDriver(uri).then(
    db => db.collection('announcements').findOne({
      _id: id
    }, {'limit': 1}).then(
      result => {
        const dataCopy = Announcement(
          announcement.header || result.header,
          announcement.summary || result.summary,
          replaceMedia
            ? (announcement.attachment || result.attachment)
            : [...result.attachment, announcement.attachment]
        )
        db.collection('announcements').updateOne({
          _id: id
        }, {$set : {
          'header': `${dataCopy.header}`,
          'title': `${dataCopy.header}`,
          'summary': `${dataCopy.summary}`,
          'attachment': `${dataCopy.attachment}`,
          'created': `${result.created}`
          }},{}).then(
          result => result,
          err => err
        )
      },
      err => {throw new Error(err)}
    )
  )
}

module.exports = announcementsDAL
