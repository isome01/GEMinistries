export default {
  events: {
    read: {
      uri: `/events/read`,
      method: 'GET'
    },
    add: {
      uri: `/events/add`,
      method: 'POST'
    },
    update: {
      uri: '/events/update',
      method: 'POST'
    }
  },
  announcements: {
    read: {
      uri: `/announcements/read`,
      method: 'GET'
    },
    add: {
      uri: `/announcements/add`,
      method: 'POST'
    },
    update: {
      uri: '/announcements/update',
      method: 'POST'
    }
  },
  profiles: {
    read: {
      uri: '/profiles/read',
      method: 'GET'
    },
    add: {
      uri: '/profiles/add',
      method: 'POST'
    },
    update: {
      uri: '/profiles/update',
      method: 'POST'
    }
  }
}
