export const meridiem = (hr, min) => hr < 12 ? `${hr}:${min} AM` : `${hr === 12 ? '12' : `${hr - 12}`}:${String(min).length === 1 ? '0' : ''}${min} PM`

export const convertDate = created => {
  const date = new Date(created)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${days[date.getDay()]} - ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${meridiem(date.getHours(),date.getMinutes())}`
}

export const getImage = (src = '') => {
  if (src && src !== 'undefined') {
    try {
      const media = require(`../../assets/${src}`)
      return media
    } catch {
      console.log('Problem loading the image;')
    }
  } else console.log('Media source not defined. :/')
  return ''
}
