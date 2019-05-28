const saveImage = require('../../public/javascripts/saveImage')
const Announcement = require('../../public/javascripts/Announcement')
const announcementsDAL = require('./announcementsDAL')

let announcementsBL = {}

announcementsBL.getAnnouncements = () => {
  return announcementsDAL.getAnnouncements().then(
    results => results,
    err => err
  )
}

announcementsBL.addAnnouncement = announcement => {
  let {attachment} = announcement
  if (attachment) {
    if (typeof (attachment.length) === 'number') {
      attachment = attachment.map(data => {
        if (data.value)
          return saveImage(data.name, data.value)
      })
    } else attachment = saveImage(
      attachment.name,
      attachment.value
    )
  }

  return announcementsDAL.addAnnouncement(Announcement({
    header: announcement.header,
    summary: announcement.summary,
    attachment: attachment || ''
  })).then(
    results => results,
    err => err
  )
}

module.exports = announcementsBL
