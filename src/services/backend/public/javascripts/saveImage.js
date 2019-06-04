const fs = require('fs')
const path = require('path')
const dir = '../../../../assets'

module.exports = (name, dataUrl) => {
  if (dataUrl) {
    let imageType = dataUrl.split('data:')[1].split(';')[0].split('image/')[1]
    imageType = imageType === 'jpeg' ? 'jpg' : imageType
    imageType = imageType === 'tiff' ? 'tif' : imageType
    const content = dataUrl.split(',')[1]
    const imageName = name || `${content.slice(0,20).replace(/[\/\\]/g, '')}.${imageType}`
    const imageBase = dataUrl.split(';')[1].split(',')[0]

    fs.appendFile(path.join(__dirname, `${dir}/${imageName}`), content, imageBase, err => {
      if (err) {
        console.log('Oops...\n')
        throw err
      }
    })
    return imageName
  } return ''
}
