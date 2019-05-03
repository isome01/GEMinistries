import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import Form from "../../presentational/Form/Form";
import axios from 'axios'

class Editor extends Component {
    /*The proptypes should be contained within an array of tabs displayed one at a time*/
    static propTypes = {
        title: PropTypes.string.isRequired,
        inputFields: PropTypes.arrayOf(
            PropTypes.shape({
                key: PropTypes.string.isRequired,
                field: PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    inputType: PropTypes.string.isRequired,
                    textArea: PropTypes.bool
                })
            }).isRequired
        ),
        tabs: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        url: PropTypes.string.isRequired,
        dataObjectKey: PropTypes.string.isRequired
    }

    constructor(){
        super()
        this.toggleSubmit = this.toggleSubmit.bind(this)
    }

    toggleSubmit = inputValues => {
        let data = {}
        const {dataObjectKey} = this.props

        data[dataObjectKey] = inputValues
        const authOptions = {
            method: 'POST',
            url: this.props.url,
            data: data[dataObjectKey],
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        }

        console.log('sending')
        axios(authOptions).then(
            results => console.log(results.data.message),
            err => console.log(err)
        )
    }

    render() {
        const {title, inputFields, toggleSubmit, tabs} = this.props

        return (
            <div className='editor container-fluid'>
                <div className='offset-3 col-md-5'>
                    {tabs.map(tab => {
                        return (
                            <Route
                                path={`${this.props.match.path}${tab.link}`}
                                exact={true}
                                render={() => (<div>Hello {tab.text} tab</div>)}
                            />
                            )
                    })}
                </div>
                )}
            </div>
        )
    }
}

export default Editor