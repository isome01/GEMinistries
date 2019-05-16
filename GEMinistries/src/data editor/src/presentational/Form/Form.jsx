import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import FormGroup from '../FormGroup/FormGroup.jsx'
import {ClipLoader} from 'react-spinners'

class Form extends Component {

    static propTypes = {
      title: PropTypes.string.isRequired,
      toggleSubmit: PropTypes.func.isRequired,
      retrievingData: PropTypes.bool.isRequired,
      removeButton: PropTypes.bool,
      inputFields: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          field: PropTypes.shape(
            {
              inputType: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired
            }
          )
        })
      )
    }

    constructor(){
      super()
      this.submitForm = this.submitForm.bind(this)
      this.state = {
        inputFields: []
      }
    }

    submitForm = e => {
      e.preventDefault()
      const {inputFields} = this.state || []
      let inputValues = {}
      inputFields.forEach(input => {
        inputValues[input.key] = document.getElementById(input.field.id).value
      })
      const {dataObjectKey, apiUrl} = this.props
      this.props.toggleSubmit(inputValues, dataObjectKey, apiUrl)
    }

    componentWillMount() {
      //create individual ids for each field

      const inputFields = this.props.inputFields.map( (input,index) => {
        return ({
          key: input.key,
          field: {
            ...input.field,
            id: `${input.field['label']}${index}`}
          })

      })
      this.setState({inputFields: inputFields})
    }

  render(){
    const {title} = this.props
    const {inputFields} = this.state
    return (
      <form className="container-fluid" onSubmit={this.submitForm}>
        <h4>{title}</h4>
        <hr />
        {
          inputFields.map( (inputfield, index) => (
            <Fragment>
              <FormGroup
                key={inputfield.field.id}
                inputType={inputfield.field.inputType}
                label={inputfield.field.label}
                textArea={inputfield.field.textArea}
                id={inputfield.field.id}
              />
              <hr
                style={index >= inputFields.length
                  ? {paddingBottom: '15px'}
                  : {width: '80%'}
                }
              />
            </Fragment>
          ))}
        <div className={"container"}>
          {
            (this.props.retrievingData &&
              <ClipLoader
                sizeUnit='px'
                size='100px'
                color='navy'
                loading={this.props.retrievingData}
              />
            ) || (!this.props.removeButton &&
              <button
                className={"btn btn-primary form-control col-md-6 col-md-offset-3 text-center"}
                type={"submit"}
                style={{maxWidth: '130'}}
              >Submit</button>
            )
          }
        </div>
      </form>
    )
  }
}

export default Form
