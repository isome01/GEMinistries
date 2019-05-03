const announcementsDAL = require('./announcementsDAL')

let announcementsBL = {}

announcementsBL.getAnnouncements = () => {
  return announcementsDAL.getAnnouncements().then(
    results => results,
    err => err
  )
}

announcementsBL.addAnnouncement = announcement => {
  return announcementsDAL.addAnnouncement(announcement).then(
    results => results,
    err => err
  )
}

module.exports = announcementsBL
