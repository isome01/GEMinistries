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
  let attachment
  if (typeof (announcement.attachment.length) === 'number') {
    attachment = announcement.attachment.map(data => {
      if (data.value)
        return saveImage(data.name, data.value)
    })
  } else attachment = saveImage(
      announcement.attachment.name,
      announcement.attachment.value
    )

  return announcementsDAL.addAnnouncement(Announcement({
    header: announcement.header,
    summary: announcement.summary,
    attachment
  })).then(
    results => results,
    err => err
  )
}

module.exports = announcementsBL
