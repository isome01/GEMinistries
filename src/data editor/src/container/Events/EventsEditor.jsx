import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Editor from '../Editor'
import './EventEditor.css'
import {addEvent, updateEvent} from "../../read-only/events"

class EventsEditor extends Component{
  static propTypes = {
    uriHangar: PropTypes.func.isRequired,
    domain: PropTypes.string.isRequired,
  }
  render() {
    const title = 'Events Editor'
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div
            className='offset-3 col-md-5 text-center'
            style={{
              border: 'solid #eee 1px',
              boxShadow: '5px 5px 5px 5px #ddd',
              borderRadius: '5px',
              padding: '10px',
            }}>
            <div style={{padding: '20px'}}>
              <h1>{title}</h1>
              <hr/>
            </div>
            <div style={{padding: '10px'}}>
              <Editor
                uriHangar={this.props.uriHangar}
                domain={this.props.domain}
                maxNoOfImages={5}
                basePath={this.props.match.path}
                baseAPI={'events'}
                tabData={[
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
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default EventsEditor
