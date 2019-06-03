const announcementsBL = require('./announcementsBL')

module.exports = app => {
  app.get('/announcements/read', (req, res)=> {
    announcementsBL.getAnnouncements().then(
      results => res.json({message: results}),
      err => res.json({message: err})
    )
  })
  app.post('/announcements/add', (req, res) => {
    announcementsBL.addAnnouncement(req.body.announcement).then(
      results => res.json({message: results}),
      err => res.json({message: err})
    )
  })
  app.post('/announcements/update', (req, res) => {
    announcementsBL.updateAnnouncement(req.body.announcement).then(
      result => res.json({message: result}),
      err => res.json({message: err})
    )
  })
}
