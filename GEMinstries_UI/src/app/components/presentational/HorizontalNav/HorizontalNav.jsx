import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const HorizontalNav = ({className, navLogoImg, navLogoText, navContent}) => (
  <nav className={`hrzl-nav navbar navbar-expand-md ${className}`}>
    <div className="navbar-header">
        <NavLink to="/">
          <span className='nav-header navbar-brand'>
            <img className='nav-logo' src={navLogoImg} alt={navLogoText} style={{width: '200px'}}/>
          </span>
        </NavLink>
    </div>

    <ul className="navbar-nav">
      {(navContent || []).map(content => (
        <NavLink key={content.text} to={content.link}>
          <li className="nav-item" key={content.text}>
            <span className="nav-link" key={content.text}>
              {content.text}
            </span>
          </li>
        </NavLink>)
      )}
    </ul>
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
