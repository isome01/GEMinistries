import React from 'react'
import PropTypes from 'prop-types'

const inputTypes = {
    button: 'button',
    checkbox: 'checkbox',
    color: 'color',
    date: 'date',
    email: 'email',
    file: 'file',
    image: 'image',
    month: 'month',
    number: 'number',
    password: 'password',
    radio: 'radio',
    range: 'range',
    reset: 'reset',
    search: 'search',
    submit: 'submit',
    tel: 'tel',
    text: 'text',
    time: 'time',
    url: 'url',
    week: 'week'
}

/* All input types */
const FormGroup = ({inputType, label, textArea}) => (
    <div className="form-group">
        <label className={"input-group-text col-sm-3"}>{label}</label>
        {!textArea
          ? <input
              className={"form-control"}
              type={inputTypes[inputType] || 'text'}
            />
          : <textarea
              className='form-control'
              rows='5'
            >

          </textarea>
        }
    </div>
)

FormGroup.propTypes = {
    inputType: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    textArea: PropTypes.bool
}

export default FormGroup
