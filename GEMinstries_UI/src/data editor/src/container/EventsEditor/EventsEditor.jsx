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
            editorForms: [],
        }
        this.toggleSubmit = this.toggleSubmit.bind(this)
    }

    toggleSubmit = inputValues => {

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
        console.log('Hello?')
         this.setState( {editorForms: [
            {
                title: "Add Event",
                toggleSubmit: this.toggleSubmit,
                inputFields: [
                    {
                        inputType: 'text',
                        label: 'Event Name',
                        textArea: true
                    },
                    {
                        inputType: 'date',
                        label: 'Date of the event'
                    }
                ]
            },
        ]})
    }

    render(){
        const editorForms = this.state.editorForms.slice()

        return(
            <div className="container event-editor">
                <div className="row">
                {
                    (editorForms).map( (form, index) =>{
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
