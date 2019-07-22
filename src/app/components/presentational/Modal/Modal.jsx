import React, {Fragment} from 'react'
//import Form from '../../../../data editor/src/presentational/Form/Form.jsx'
import PropTypes from 'prop-types'
import './style.css'
import $ from 'jquery'

const Modal = ({className, toggleRender, children, isZoomed, positionFunc, clientScrollEnabled}) => {

  const centerModal = e => {
    e.preventDefault()
    let modal = document.getElementsByClassName('modal-body')[0]
    modal && positionFunc && positionFunc(modal)
  }

  //init()
  return (
    <div className='modal container-fluid row' onClick={toggleRender}>
      <div
        className={`modal-body ${className}`}
        style={{
          width: (isZoomed ? '1000px' : '100%'),
          position: clientScrollEnabled ? 'absolute' : 'relative'
        }}>
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
  isZoomed: PropTypes.bool,
  positionFunc: PropTypes.func,
  clientScrollEnabled: PropTypes.bool
}

Modal.defaultProps = {
  isForm: false,
  children: null,
  isZoomed: false,
  className: '',
  clientScrollEnabled: false,
  positionFunc: () => {}
}

export default Modal
