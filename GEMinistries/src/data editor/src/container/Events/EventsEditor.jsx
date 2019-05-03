import React, { Component } from 'react'
import Editor from '../Editor/Editor.jsx'
import './EventEditor.css'
import {addAnnouncements} from "../../read-only/announcements"

class EventsEditor extends Component{
    render () {
        const title = 'Events Editor'
        const uri = '//localhost:9910/events'
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='offset-3 col-md-5'>
                        <h1>{title}</h1>
                        <hr />
                        <Editor
                          basePath={this.props.match.path}
                          tabData={[
                              {
                                  title: 'Add an Event',
                                  dataObjectKey: 'events',
                                  apiUrl: `${uri}/add`,
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

export default EventsEditor
