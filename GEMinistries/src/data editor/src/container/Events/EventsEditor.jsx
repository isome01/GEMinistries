import React, { Component } from 'react'
import Editor from '../Editor/Editor.jsx'
import './EventEditor.css'
import {addEvent} from "../../read-only/events"

class EventsEditor extends Component{
  render() {
    const title = 'Events Editor'
    const uri = '//localhost:9910/events'
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
                basePath={this.props.match.path}
                tabData={[
                  {
                    title: 'Add an Event',
                    dataObjectKey: 'event',
                    apiUrl: `${uri}/add`,
                    tablink: '/Add',
                    tabtext: 'Add',
                    inputFields: [...addEvent]
                  }
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
