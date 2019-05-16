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
const FormGroup = ({inputType, label, textArea, id}) => (
    <div className='row form-group'>
        <label
          className={
              `text-left col-sm-${(label.length <= 8 && !textArea) ? '2' : '12'}`}>
            {label}
        </label>
        <div className={(textArea || label.length > 8) ? 'col-sm-12' : 'col-sm-10'}>
            {!textArea
              ? <input
                className={"text-center form-control"}
                type={inputTypes[inputType] || 'text'}
                id={id} />
              : <textarea
                className='form-control'
                rows='5'
                id={id}
                defaultValue=''
                placeholder='Summary here...'
                ></textarea>
            }
        </div>
    </div>
)

FormGroup.propTypes = {
    inputType: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    textArea: PropTypes.bool
}

export default FormGroup
