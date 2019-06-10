import React, {Fragment} from 'react'
//import Form from '../../../../data editor/src/presentational/Form/Form.jsx'
import PropTypes from 'prop-types'

const Modal = ({className, toggleRender, children, title}) => {

  //init()
  return (
    <div className='modal container-fluid row'>
      <div className={`modal-body ${className}`}>
        <div className={`modal-main`}>
          {children}
        </div>
        <div className='modal-footer'>
          <button className='text-right close' aria-label={'Close'}>
            <span aria-hidden={true} onClick={toggleRender}>&times;</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  toggleRender: PropTypes.func,
}

Modal.defaultProps = {
  isForm: false,
  children: null,
  className: ''
}

export default Modal
