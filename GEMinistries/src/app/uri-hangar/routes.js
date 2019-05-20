export default {
  events: {
    read: {
      uri: `localhost:9910/events/read`,
      method: 'GET'
    },
    add: {
      uri: `localhost:9910/events/add`,
      method: 'POST'
    }
  },
  announcements: {
    read: {
      uri: `localhost:9910/announcements/read`,
      method: 'GET'
    },
    add: {
        uri: `localhost:9910/announcements/add`,
        method: 'POST'
    }
  },
  profiles: {
    read: {
      uri: 'localhost:9910/profiles/read',
      method: 'GET'
    },
    add: {
      uri: 'localhost:9910/profiles/add',
      method: 'POST'
    }
  }
}
