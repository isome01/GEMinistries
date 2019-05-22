import React, {Component} from 'react'
import Editor from '../Editor/Editor.jsx'
import {addAnnouncements} from '../../read-only/announcements'

class AnnouncementsEditor extends Component {
  render() {
    const title = 'Announcements Editor'
    const uri = '//localhost:9910/announcements'
    return (
      <div className='container-fluid'>
        <div
          className='offset-3 col-md-5 text-center'
          style={{
            border: 'solid #eee 1px',
            boxShadow: '5px 5px 5px 5px #ddd',
            borderRadius: '5px',
            padding: '10px',
          }}
        >
          <div style={{padding: '20px'}}>
            <h1>{title}</h1>
            <hr/>
          </div>
          <div style={{padding: '10px'}}>
            <Editor
              maxNoOfImages={5}
              basePath={this.props.match.path}
              tabData={[
                {
                  dataObjectKey: 'announcement',
                  apiUrl: `${uri}/add`,
                  title: 'Add an Announcement',
                  tablink: '/Add',
                  tabtext: 'Add',
                  inputFields: [...addAnnouncements]
                }
              ]}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AnnouncementsEditor
