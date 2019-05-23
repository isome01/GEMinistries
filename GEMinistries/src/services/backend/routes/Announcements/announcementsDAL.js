const dbDriver = require('../../public/javascripts/dbdriver')
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

module.exports = announcementsDAL
