import routes from './routes'
import axios from 'axios'

export default function (api, action, data = {} , domain, port = '9910', apiContents={}) {
  const protocol = 'http://'
  const {uri, method} = routes[api][action]
  const url = protocol + (domain || 'gemoutreach.org') + ':' + port + uri
  const headers = {
    'Accept': '*/*',
    'Content-Type':'application/json'
  }

  return axios({method, url, data, headers, ...apiContents}).then(
    res => {
      console.log(res.data)
      const message = res.data.message
      return message || 'no message returned'
    },
    err => err.message
  )
}
