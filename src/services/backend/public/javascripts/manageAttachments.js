const saveImage = require('./saveImage')

module.exports = media => {
  if (media) {
    if (typeof (media.length) === 'number') {
      media = media.map(data => {
        if (data.value)
          return saveImage(data.name, data.value)
      })
    } else media = saveImage(
      media.name,
      media.value
    )
  }
  return media
}
