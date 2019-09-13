import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Editor from '../Editor'
import './EventEditor.css'
import {addEvent, updateEvent} from '../../read-only/events'

class EventsEditor extends Component{
  static propTypes = {
    uriHangar: PropTypes.func.isRequired,
    domain: PropTypes.string.isRequired,
  }

  state = {
    tabData: [
      {
        action: 'add',
        title: 'Add an Event',
        dataObjectKey: 'event',
        tablink: '/Add',
        tabtext: 'Add',
        inputFields: [...addEvent],
      }, {
        action: 'update',
        title: 'Update an Event',
        dataObjectKey: 'event',
        tablink: '/Update',
        tabtext: 'Update',
        inputFields: [...updateEvent],
        hasFormData: true,
      },
    ]
  }

  isKnownPath = (path = '') => {
    let  knownPath = false
    this.state.tabData.forEach(tab => {
      const relPath = String(`${this.props.match.path}${tab.tablink}`).toLowerCase()
      const query = String(path).toLowerCase()
      if (query.endsWith(relPath)) {
        knownPath = true
      }
    })
    return knownPath
  }

  render () {
    const title = 'Events Editor'
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div
            className='offset-3 col-md-5 text-center'
            style={{
              border: 'solid #eee 1px',
              boxShadow: '5px 5px 5px 5px #ddd',
              borderRadius: 5,
              padding: 10,
              minHeight: 700
            }}>
            <div style={{padding: 20}}>
              <h1>{title}</h1>
              <hr/>
            </div>
            <div style={{padding: 10}}>
              <Editor
                uriHangar={this.props.uriHangar}
                domain={this.props.domain}
                maxNoOfImages={30}
                basePath={this.props.match.path}
                baseAPI='events'
                tabData={this.state.tabData}
                reRoutePath={this.isKnownPath}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default EventsEditor
