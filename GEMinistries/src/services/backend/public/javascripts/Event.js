module.exports = ({title, description, startDate, startTime, endDate, endTime, attachment, credentials}) => {
  return ({
    title: title || '',
    description: description || '',
    startDate: startDate || '',
    startTime: startTime || '',
    endDate: endDate || '',
    endTime: endTime || '',
    attachment: attachment || '',
    credentials: credentials || ''
  })
}
