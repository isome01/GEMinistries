import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Editor from '../Editor'
import {addAnnouncements, updateAnnouncements} from '../../read-only/announcements'

class AnnouncementsEditor extends Component {
  static propTypes = {
    uriHangar: PropTypes.func.isRequired,
    domain: PropTypes.string.isRequired
  }

  state = {
    tabData: [
      {
        action: 'add',
        dataObjectKey: 'announcement',
        title: 'Add an Announcement',
        tablink: '/Add',
        tabtext: 'Add',
        inputFields: [...addAnnouncements]
      }, {
        action: 'update',
        dataObjectKey: 'announcement',
        title: 'Update an Announcement',
        tablink: '/Update',
        tabtext: 'Update',
        inputFields: [...updateAnnouncements],
        hasFormData: true
      }
    ]
  }

  isKnownPath = (path = '') => {
    let knownPath = false
    this.state.tabData.forEach(tab => {
      const relPath = String(`${this.props.match.url}${tab.tablink}`).toLowerCase()
      const query = String(path).toLowerCase()
      if (query.endsWith(relPath)) {
        knownPath = true
      }
    })
    return knownPath
  }

  render() {
    const title = 'Announcements Editor'
    return (
      <div className='container-fluid'>
        <div
          className='offset-3 col-md-5 text-center'
          style={{
            border: 'solid #eee 1px',
            boxShadow: '5px 5px 5px 5px #ddd',
            borderRadius: 5,
            padding: 10,
            minHeight: 700
          }}
        >
          <div style={{padding: 20}}>
            <h1>{title}</h1>
            <hr/>
          </div>
          <div style={{padding: 10}}>
            <Editor
              uriHangar={this.props.uriHangar}
              domain={this.props.domain}
              maxNoOfImages={1}
              basePath={this.props.match.path}
              baseAPI='announcements'
              reRoutePath={this.isKnownPath}
              tabData={this.state.tabData}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AnnouncementsEditor
