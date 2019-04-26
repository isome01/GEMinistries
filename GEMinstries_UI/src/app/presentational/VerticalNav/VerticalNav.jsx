import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

const VerticalNav = ({className, navHeader, navContent}) => (
  <nav className={`navbar ${className}`}>
    <span className='navbar-brand'>{navHeader}</span>
    {navContent.map( (nav, index) =>(
      <Link key={`${nav.text}${index}`} to={$nav.link}>
        {nav.text}
      </Link>)
    )}
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
