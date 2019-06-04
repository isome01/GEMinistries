const manageAttachments = require('../../public/javascripts/manageAttachments')
const Announcement = require('../../public/javascripts/Announcement')
const announcementsDAL = require('./announcementsDAL')

let announcementsBL = {}

announcementsBL.getAnnouncements = () => {
  return announcementsDAL.getAnnouncements().then(
    results => results,
  ).catch(
    err => err
  )
}

announcementsBL.addAnnouncement = announcement => {
  let {attachment} = announcement

  return announcementsDAL.addAnnouncement(Announcement({
    header: announcement.header,
    summary: announcement.summary,
    attachment: manageAttachments(attachment)[0]
  })).then(
    results => results
  ).catch(
    err => err
  )
}

announcementsBL.updateAnnouncement = announcement => {
  let {attachment} = announcement
  const data = {
    ...announcement,
    attachment: manageAttachments(attachment)[0],
  }
  return announcementsDAL.updateAnnouncement(
    Announcement(data)
  ).then(
    results => results
  ).catch(
    err => err
  )
}

module.exports = announcementsBL
