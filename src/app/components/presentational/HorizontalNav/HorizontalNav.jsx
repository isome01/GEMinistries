import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './style.css'

const HorizontalNav = ({title, className, navLogoImg, navLogoText, navContent}) => (
  <nav className={`navbar hrzl-nav navbar-expand-md`}>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target={`#${title.replace(/ /g,'-')}`}
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="HorizontalNav Toggle"
    >
      <span className='navbar-toggler-icon' />
    </button>
    <div id={title.replace(/ /g,'-')}  className={`collapse navbar-collapse ${className}`}>
      <div className='navbar-header'>
        <Link to="/">
          <span className='nav-header navbar-brand'>
            <img className='nav-logo' src={navLogoImg} alt={navLogoText}/>
          </span>
        </Link>
      </div>
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
  </nav>
)

HorizontalNav.propTypes = {
  title: PropTypes.string.isRequired,
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
