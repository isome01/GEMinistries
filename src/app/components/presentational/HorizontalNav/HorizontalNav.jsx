import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './style.css'

const HorizontalNav = ({className, navLogoImg, navLogoText, navContent}) => (
  <nav className={`navbar hrzl-nav navbar-expand-md`}>
    <div className={`${className}`}>
      <div className="navbar-header">
        <Link to="/">
          <span className='nav-header navbar-brand'>
            <img className='nav-logo' src={navLogoImg} alt={navLogoText}/>
          </span>
        </Link>
      </div>
      <ul className="navbar-nav">
        {(navContent || []).map(content => (
            <li>
              <Link
                key={content.text}
                to={content.link}
                className="nav-item"
              ><a className="nav-link">{content.text}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  </nav>
)

HorizontalNav.propTypes = {
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
