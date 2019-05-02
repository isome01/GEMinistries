import React, { Component } from 'react'
import axios from 'axios'
import Form from '../../presentational/Form/Form.jsx'
import './EventEditor.css'

class EventsEditor extends Component{

    /* Events editor allows CRUD appliances for events:
        Add Events to the calendar
        Delete Events from the calendar
    */

    constructor(){
        super()
        this.state = {
            editorTabs: [], //and we will get rid of "editorForms" var; each tab will have a form
            formData: [],
        }
        this.toggleSubmit = this.toggleSubmit.bind(this)
    }

    toggleSubmit = inputValues => {
        console.log(inputValues)
        const authOptions = {
            method: 'POST',
            url: '//localhost:9910/events/add',
            data: {event: inputValues},
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        }

        console.log('Hello..?')
        axios(authOptions).then(
          results => console.log(results.data.message),
          err => console.log(err)
        )
    }

    componentDidMount(){
         this.setState( {formData: [
            {
                title: "Add Event",
                toggleSubmit: this.toggleSubmit,
                inputFields: [
                    {
                        key: 'title',
                        field: {
                            inputType: 'text',
                            label: 'Title: '
                        }
                    },{
                      key: 'type',
                      field: {
                        inputType: 'checkbox',
                        label: 'Type of event',
                      }
                    },{
                        key: 'time',
                        field: {
                            inputType: 'time',
                            label: 'What time of day?',
                        }
                    },{
                        key: 'date',
                        field: {
                            inputType: 'date',
                            label: 'What day?',
                        }
                    },{
                        key: 'description',
                        field: {
                            inputType: 'text',
                            label: 'Description of the event',
                            textArea: true
                        }
                    }
                ]
            },
        ]})
    }

    render(){
        const {formData} = this.state

        return(
            <div className="container event-editor">
                <div className="row">
                {
                    formData.map( (form, index) =>{
                        return (
                            <Form
                                key={index}
                                title={form.title}
                                toggleSubmit={form.toggleSubmit}
                                inputFields={form.inputFields}
                            />
                        )
                    } )
                }
                </div>
            </div>
        )
    }
}

export default EventsEditor
