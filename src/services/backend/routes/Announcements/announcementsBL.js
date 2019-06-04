const manageAttachments = require('../../public/javascripts/manageAttachments')
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

  return announcementsDAL.addAnnouncement(Announcement({
    header: announcement.header,
    summary: announcement.summary,
    attachment: manageAttachments(attachment) || ''
  })).then(
    results => results,
    err => err
  )
}

announcementsBL.updateAnnouncement = announcement => {
  let {attachment, replaceMedia} = announcement
  return announcementsDAL.updateAnnouncement(Announcement({
    header: announcement.header,
    summary: announcement.summary,
    attachment: manageAttachments(attachment) || ''
  }), (replaceMedia === 'checked' ? true : false)
  ).then(
    results => results,
    err => err
  )
}

module.exports = announcementsBL
