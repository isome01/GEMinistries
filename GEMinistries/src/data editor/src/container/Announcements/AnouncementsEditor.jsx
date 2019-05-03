import React, {Component} from 'react'
import axios from "axios"
import Form from "../../presentational/Form/Form.jsx"
import announcement from '../../read-only/announcement'
import Tabs from '../../presentational/Tabs/Tabs.jsx'

class AnnouncementsEditor extends Component {


    constructor(props){
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
            url: '//localhost:9910/announcements/add',
            data: {event: inputValues},
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        }

        console.log('sending...')
        axios(authOptions).then(
            results => console.log(results.data.message),
            err => console.log(err)
        )
    }

    componentDidMount(){
        this.setState( {formData: [
                {
                    title: 'Add an announcement',
                    toggleSubmit: this.toggleSubmit,
                    inputFields: [...announcement]
                }

            ]})
    }

    render(){
        const {formData} = this.state

        return(
            <div className="container">
                <Tabs navtabs={[{link: '/Add', text:'Add'}]} />
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

export default AnnouncementsEditor