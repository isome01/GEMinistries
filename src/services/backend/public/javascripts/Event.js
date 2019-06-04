const ObjectId = require('mongodb').ObjectID

module.exports = ({id, title, description, startDate, startTime, endDate, endTime, attachment, credentials}) => ({
  title,
  description,
  startDate,
  startTime,
  endDate,
  endTime,
  attachment,
  credentials,
  id: new ObjectId(id)
})
