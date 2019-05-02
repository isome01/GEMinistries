import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from '../FormGroup/FormGroup.jsx'

const Form = ({toggleSubmit, title, inputFields}) => (
    <form className="container-fluid" onSubmit={ e=>{
            e.preventDefault()
            toggleSubmit(e)}}>
        <h1>{title}</h1>
        <hr />
        {
            (inputFields || []).map( (inputfield, index) => {
                return (<FormGroup
                    key={index}
                    inputType={inputfield.inputType}
                    label={inputfield.label}
                    textArea={inputfield.textArea}
                />)
            })
        }
        <div className={"container"}>
            <button
                className={"btn btn-primary form-control col-md-6 col-md-offset-3"}
                type={"submit"}
            >Submit</button>
        </div>
    </form>
)

Form.propTypes = {
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

export default Form
