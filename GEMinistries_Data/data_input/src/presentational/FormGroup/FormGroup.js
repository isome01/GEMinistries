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
const FormGroup = ({inputType, label}) => (
    <div className="form-group">
        <label className={"input-group-text"}>{label}</label>
        <input className={"form-control"}
            type={inputTypes[inputType] || 'text'}
        />
    </div>
)

FormGroup.propTypes = {
    inputType: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default FormGroup