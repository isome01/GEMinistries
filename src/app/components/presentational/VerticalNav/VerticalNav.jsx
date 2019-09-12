import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import './style.css'

const VerticalNav = ({className, navHeader, navContent, matchUrl}) => (
  <nav className={`navbar vert-nav ${className}`}>
    <span className='navbar-brand nav-header text-center'>
      {navHeader}
    </span>
    <ul className="navbar-nav">
      {(navContent || []).map( (nav, index) =>{
        return (
         <li
           key={`${nav.text}${index}`}
           className={`nav-item ${index === 0 ? 'active' : ''}`}
         >
           <span>
             <Link className='nav-link' to={`${matchUrl}${nav.link}`}>{nav.text}</Link>
           </span>
         </li>)
      })}
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
