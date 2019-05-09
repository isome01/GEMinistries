import React from 'react'
import './style.css'

const Footer = ({children}) => {
  return (
    <footer className='container'>
      <div className='row'>
        <div className='col-sm-4 footer-talk'>
          GEM Outreach &copy; 2019
        </div>
        <div className='col-sm-4 footer-talk'>
          Organization Address:
          2326 Chinkapin Way
          Dallas, TX 75212
        </div>
        <div className='col-sm-4 footer-talk'></div>
        <div>{children}</div>
      </div>
    </footer>
  )
}

export default Footer
