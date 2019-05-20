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
    this.addMedia = this.addMedia.bind(this)
      this.state = {
        inputFields: []
      }
    }

    addMedia = e => {
      const mediaRowId = `${e.target.id}-media-row`
      console.log('gets here...')
      let fileInput = document.getElementById(e.target.id)
      let mediaRow = document.getElementById(mediaRowId)
      if (!mediaRow) {
        mediaRow = document.createElement('div')
        mediaRow.id = mediaRowId
        mediaRow.className = 'row'
        document.body.appendChild(mediaRow)
      }

      let reader = new FileReader()

      reader.onload = e => {
        let image = document.createElement('img')
        image.src = e.target.result
        image.value = e.target.result
        image.height = 200
        mediaRow.appendChild(image)
      }


      if (fileInput.files.length > 1) {
        for(let i = 0; i < fileInput.files.length; i++) {
          reader.readAsDataURL(fileInput.files[i])
        }
      } else {
        reader.readAsDataURL(fileInput.files[0])
      }
    }

    submitForm = e => {
      e.preventDefault()
      const {inputFields} = this.state || []
      let inputValues = {}

      inputFields.forEach(input => {
        const field = document.getElementById(input.field.id)
        if (field.type !== 'file') {
          inputValues[input.key] = field.value
        } else {
          const mediaRow = document.getElementById(`${field.id}-media-row`).childNodes
          if (mediaRow.length > 1) {
            console.log(mediaRow)
            mediaRow.forEach( media => {
              inputValues[input.key] = media.value
            })
          } else {
            inputValues[input.key] = mediaRow[0].value
          }
        }
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
                onChange={ inputfield.field.inputType === 'file' ? this.addMedia : null}
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
