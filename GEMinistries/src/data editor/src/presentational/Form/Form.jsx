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
    maxNoOfImages: PropTypes.number,
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

  constructor(props){
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.addMedia = this.addMedia.bind(this)
    this.removeImg = this.removeImg.bind(this)
    this.errorMsg = this.errorMsg.bind(this)
    this.state = {
      inputFields: []
    }
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

  errorMsg = msg => {
    return (`<div
      class="col-md-auto text-center text-danger"
      style="border: solid red 2px;border-radius: 5px;background-color: #ffbbbb;padding: 20px"
      >${msg}</div>`)
  }

  addMedia = e => {
    const {maxNoOfImages} = this.props || 1
    if (document.getElementById(e.target.id).files.length <= maxNoOfImages) {
      const mediaRowId = `${e.target.id}-media-row`
      const files = e.target.files
      let mediaRow = document.getElementById(mediaRowId)
      mediaRow.innerHTML = ''

      const noOfFiles = files.length
      for(let i = 0;i < noOfFiles; i++) {

        let reader = new FileReader()

        reader.onload = e => {
          let div = document.createElement('div')
          div.innerHTML = `<div
            class="col-sm-12 text-center"
            id="${mediaRowId}-img-${mediaRow.childNodes.length+1}"
            style="word-break: break-all">${files[i].name}</div>`
          div.value = e.target.result
          div.name = files[i].name
          mediaRow.insertBefore(div, null)
        }

        reader.readAsDataURL(files[i])
      }
    } else {
      const mediaRow = document.getElementById(`${e.target.id}-media-row`)
      const div = document.createElement('div')
      mediaRow.innerHTML = ''
      div.innerHTML = this.errorMsg(`No more than ${this.props.maxNoOfImages} images allowed.`)
      mediaRow.insertBefore(div, null)
    }
  }

  removeImg = e => document.body.removeChild(e.target.id)

  submitForm = e => {
    e.preventDefault()
    const {inputFields} = this.state || []
    let inputValues = {}

    inputFields.forEach(input => {
      const field = document.getElementById(input.field.id)
      if (field.type !== 'file') {
        inputValues[input.key] = field.value
      } else if (field.type === 'file' && field.files[0]) {
        const mediaRow = document.getElementById(`${field.id}-media-row`).childNodes
        document.getElementById(`${field.id}-media-row`)
        console.log(mediaRow)
        if (mediaRow.length > 1) {
          console.log(mediaRow)
          mediaRow.forEach( media => {
            inputValues[input.key] = inputValues[input.key] || []
            inputValues[input.key].push({
              name: media.name,
              value: media.value
            })
          })
        } else {
          inputValues[input.key] = {
            name: mediaRow[0].name,
            value: mediaRow[0].value
          }
        }
      }
    })
    const {dataObjectKey, apiUrl} = this.props
    this.props.toggleSubmit(inputValues, dataObjectKey, apiUrl)
  }

  render(){
    const {title} = this.props
    const {inputFields} = this.state
    return (
      <form className="container-fluid" onSubmit={this.submitForm}>
        <h4>{title}</h4>
        <hr />
        {
          inputFields.map( (input, index) => (
            <Fragment>
              <FormGroup
                key={input.field.id}
                inputType={input.field.inputType}
                label={input.field.label}
                textArea={input.field.textArea}
                id={input.field.id}
                onChange={ input.field.inputType === 'file' ? this.addMedia : null}
                multiple={this.props.maxNoOfImages > 1}
              />
              {input.field.inputType === 'file' &&
              (
                <div
                  id={`${input.field.id}-media-row`}
                  className='row container-fluid'
                ></div>
              )}
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
                size='50'
                color='#1e416e'
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
