import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = ({logo, navlinks}) => (
    <nav className={"navbar bg-dark"} style={{width:"300px"}}>
        <span className="navbar-brand" style={{color:"white"}}>{logo}</span>
        <ul className={"navbar-nav"}>
            {
                (navlinks || [] ).map( (navlink, index) =>{
                    return (
                    <li key={index} className={"nav-item"} style={{color:"white"}}>
                        <Link className={"nav-link"} to={navlink.link}>
                            {navlink.text}
                        </Link>
                    </li>)
                } )
            }
        </ul>
    </nav>
)

Navbar.propTypes = {
    navlinks: PropTypes.arrayOf(
        PropTypes.shape(
            {
                link: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            }
        ).isRequired
    ).isRequired,
    logo: PropTypes.string.isRequired
}

export default Navbar