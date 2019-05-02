import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FormGroup from '../FormGroup/FormGroup.jsx'

class Form extends Component {

    static propTypes = {
      title: PropTypes.string.isRequired,
      toggleSubmit: PropTypes.func.isRequired,
      inputFields: PropTypes.arrayOf(
        PropTypes.shape(
          {
            inputType: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
          }
        ))
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

      const inputValues = inputFields.map(input => {
        return ({
          type: input.label,
          title: document.getElementById(input.id).value
        })
      })
      this.props.toggleSubmit(inputValues)
    }

    componentWillMount() {
      //create individual ids for each field

      const inputFields = this.props.inputFields.map( (input,index) => {
        return ({
          ...input,
          id: `${input.label}${index}`})
      })
      this.setState({inputFields: inputFields})
    }

  render(){
    const {title} = this.props
    const {inputFields} = this.state
    return (
      <form className="container-fluid" onSubmit={this.submitForm}>
        <h1>{title}</h1>
        <hr />
        {
          inputFields.map( (inputfield) => (
            <FormGroup
              key={inputfield.id}
              inputType={inputfield.inputType}
              label={inputfield.label}
              textArea={inputfield.textArea}
              id={inputfield.id}
            />)
          )
        }
        <div className={"container"}>
          <button
            className={"btn btn-primary form-control col-md-6 col-md-offset-3"}
            type={"submit"}
          >Submit</button>
        </div>
      </form>
    )
  }
}

export default Form
