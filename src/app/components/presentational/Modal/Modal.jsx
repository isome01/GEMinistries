import React, {Fragment} from 'react'
//import Form from '../../../../data editor/src/presentational/Form/Form.jsx'
import PropTypes from 'prop-types'
import './style.css'

const Modal = ({className, toggleRender, children, isZoomed}) => {

  const centerModal = e => {
    e.preventDefault()
    let modal = document.getElementsByClassName('modal')[0]
    if (modal) {
      modal.style.width = `${window.screen.width}`
    }
  }

  //init()
  return (
    <div className='modal container-fluid row' onClick={toggleRender}>
      <div className={`modal-body ${className}`} style={{width: (isZoomed ? '1000px' : '100%')}}>
        <div className={`modal-main`} onLoad={centerModal}>
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
  children: PropTypes.node,
  className: PropTypes.string,
  toggleRender: PropTypes.func,
  isZoomed: PropTypes.bool
}

Modal.defaultProps = {
  isForm: false,
  children: null,
  isZoomed: false,
  className: ''
}

export default Modal
