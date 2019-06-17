import React from 'react'
import './style.css'

const Footer = ({children}) => {
  return (
    <footer className='container-fluid'>
      <div className='row footer-talk'>
        <div className='col'>
          GEM Outreach 501(c)(3)<br />
          &copy; 2019
        </div>
        <div className='col'>
          Organization Address:<br />
          2326 Chinkapin Way<br />
          Dallas, TX 75212
        </div>
        <div className='col'></div>
        <div>{children}</div>
      </div>
      <div className='mobile'>
        <div className='col-xs-12 footer-talk'>
          GEM Outreach 501(c)(3)<br />
          &copy; 2019
        </div>
        <div className='col-xs-12 footer-talk'>
          Organization Address:<br />
          2326 Chinkapin Way<br />
          Dallas, TX 75212
        </div>
        <div className='col-xs-12 footer-talk'></div>
        <div>{children}</div>
      </div>
    </footer>
  )
}

export default Footer
