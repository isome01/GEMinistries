import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import './style.css'

const HorizontalNav = ({id, className, navLogoImg, navLogoText, navContent}) => {
  $('a').hover(()=> {
    console.log('this')
  })

  const [selectedChild, getSelectedChild] = useState(null)
  return (
    <Fragment>
      <nav className={`navbar hrzl-nav navbar-expand-md container-fluid`}>
        <div className='navbar-header offset-md-1 col-md-2'>
          <Link to="/">
        <span className='nav-header navbar-brand'>
          <img src={navLogoImg} alt={navLogoText} className='nav-logo' />
        </span>
          </Link>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target={`#${id.replace(/ /g, '-')}`}
          aria-controls='navbarSupportedContent'
        >
          <span className='navbar-toggler-icon'/>
        </button>
        <div className={`${className}`}>
          <div id={id.replace(/ /g, '-')} className='collapse navbar-collapse' style={{width: '100%'}}>
            <ul className="navbar-nav">
              {(navContent || []).map(content => (
                  <Fragment>
                    <div className='nav-separator text-center'>|</div>
                    <li>
                      <Link
                        key={content.text}
                        to={content.link}
                        className='nav-item'
                      >{content.text && content.text}
                      </Link>
                    </li>
                  </Fragment>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

HorizontalNav.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  navLogoImg: PropTypes.string,
  navLogoText: PropTypes.string.isRequired,
  navContent: PropTypes.arrayOf(
    PropTypes.shape(
      {
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        children: PropTypes.any
      }
    ).isRequired
  ).isRequired,
}

export default HorizontalNav
