import React, { Component } from 'react'
import Form from '../../presentational/Form/Form'
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
    }

    componentDidMount(){
        const editorForms = [
            {
                title: "Add Event",
                toggleSubmit: () => { false },
                inputFields: [
                    {
                        inputType: 'text',
                        label: 'Event Name'
                    },
                    {
                        inputType: 'date',
                        label: 'Date of the event'
                    }
                ]
            },
        ]

        this.setState(()=>({
            editorForms: editorForms
        }))
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