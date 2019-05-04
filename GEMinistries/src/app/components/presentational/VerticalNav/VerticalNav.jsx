import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import './style.css'

const VerticalNav = ({className, navHeader, navContent, matchUrl}) => (
  <nav className={`navbar vert-nav ${className}`} style={{maxHeight: '245px', height: '100%'}}>
    <span className='navbar-brand nav-header'>{navHeader}</span>
    <ul className="navbar-nav">
      {(navContent || []).map( (nav, index) =>(
        <li>
          <Link key={`${nav.text}${index}`}
                to={`${matchUrl}${nav.link}`}
                className='nav-item'
          ><a className='nav-link'>{nav.text}</a>
          </Link>
        </li>)
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
  ).isRequired,
  matchUrl: PropTypes.string.isRequired
}

export default VerticalNav
