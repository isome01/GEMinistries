import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import './style.css'

const VerticalNav = ({className, navHeader, navContent}) => (
  <nav className={`navbar ${className}`}>
    <span className='navbar-brand'>{navHeader}</span>
    <ul className="navbar-nav">
      {(navContent || []).map( (nav, index) =>(
        <Link key={`${nav.text}${index}`}
          to={`${match.url}${nav.link}`}
          className='nav-item'
        ><a className='nav-link'>{nav.text}</a>
        </Link>)
      )}
    </ul>
  </nav>
)

VerticalNav.propTypes = {
  className: PropTypes.string.isRequired,
  navHeader: PropTypes.string.isRequired,
  navContent: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
}

export default VerticalNav
