const saveImage = require('./saveImage')

module.exports = media => {
  let data = []
  if (media) {
    if (typeof (media.value) !== 'string') {
      data = media.map(data => {
        if (data.value)
          return saveImage(data.name, data.value)
      })
    } else {
      if (media.value)
        data.push(saveImage(media.name, media.value))
    }
  }
  return data
}
