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
      'attachment': `${announcement.attachment || ''}`,
      'created': `${new Date().toString()}`
    }).then(
      result => result
    )
  ).catch(
    err => ({message: err})
  )
}

announcementsDAL.updateAnnouncement = announcement => {
  const id = new ObjectId(announcement.id)
  return dbDriver(uri).then(
    db => db.collection('announcements').findOne({
      _id: id
    }, {'limit': 1}).then(
      result => {
        const dataCopy = Announcement({
          id,
          header: (announcement.header || announcement.header),
          summary: (announcement.summary || result.summary),
          attachment: announcement.attachment || result.attachment
        })
        console.log(dataCopy)
        db.collection('announcements').updateOne({
          _id: id
        }, {$set : {
          'header': `${dataCopy.header}`,
          'title': `${dataCopy.header}`,
          'summary': `${dataCopy.summary}`,
          'attachment': `${dataCopy.attachment || ''}`,
          'created': `${result.created}`
          }}, {}).then(
          res => {
            console.log(res)
            return res
          }
        ).catch(
          err => {throw new Error(err)}
        )
      }
    ).catch(
      err => {throw new Error(err)}
    )
  ).catch(
    err => {throw new Error(err)}
  )
}

module.exports = announcementsDAL
