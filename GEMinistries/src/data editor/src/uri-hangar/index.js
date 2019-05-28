import routes from './routes'
import axios from 'axios'

export default function (api, action, data = {}) {
  const protocol = 'http://'
  const {uri, method} = routes[api][action]
  const url = protocol + uri
  const headers = {
    'Accept': '*/*',
    'Content-Type':'application/json'
  }

  return axios({method, url, data, headers}).then(
    res => {
      const message = res.data.message
      return message || 'no message returned'
    },
    err => err.message
  )
}
