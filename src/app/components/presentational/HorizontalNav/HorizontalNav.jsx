import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './style.css'

const HorizontalNav = ({id, className, navLogoImg, navLogoText, navContent}) => (
  <nav className={`navbar hrzl-nav navbar-expand-md container-fluid`}>
    <div className='navbar-header'>
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
                ><a className='nav-link'>{content.text}</a>
                </Link>
              </li>
            </Fragment>
            )
          )}
        </ul>
      </div>
    </div>
  </nav>
)

HorizontalNav.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  navLogoImg: PropTypes.string,
  navLogoText: PropTypes.string.isRequired,
  navContent: PropTypes.arrayOf(
    PropTypes.shape(
      {
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }
    ).isRequired
  ).isRequired,
}

export default HorizontalNav
