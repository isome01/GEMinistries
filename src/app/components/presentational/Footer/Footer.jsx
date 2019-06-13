import React from 'react'
import './style.css'

const Footer = ({children}) => {
  return (
    <footer>
      <div className='row'>
        <div className='col-sm-4 col-xs-12 footer-talk'>
          GEM Outreach 501(c)(3)<br />
          &copy; 2019
        </div>
        <div className='col-sm-4 col-xs-12 footer-talk'>
          Organization Address:<br />
          2326 Chinkapin Way<br />
          Dallas, TX 75212
        </div>
        <div className='col-sm-4 col-xs-12 footer-talk'></div>
        <div>{children}</div>
      </div>
      <div className='mobile'>
        <div className='col-sm-4 col-xs-12 footer-talk'>
          GEM Outreach 501(c)(3)<br />
          &copy; 2019
        </div>
        <div className='col-sm-4 col-xs-12 footer-talk'>
          Organization Address:<br />
          2326 Chinkapin Way<br />
          Dallas, TX 75212
        </div>
        <div className='col-sm-4 col-xs-12 footer-talk'></div>
        <div>{children}</div>
      </div>
    </footer>
  )
}

export default Footer
