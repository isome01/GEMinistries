import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

const Tabs = ({navtabs, children}) => (
    <div className='container-fluid'>
        <div className='row'>
            <ul className='nav nav-tabs'>
                {navtabs.map((tab,index) => (
                    <li key={`${tab.text}${index}`}
                        className='nav-item'
                    ><Link className='nav-link' to={tab.link}>
                        {tab.text}
                    </Link></li>
                ))}
            </ul>
        </div>
        <div className='row'>{children}</div>
    </div>
)

Tabs.propTypes = {
    navtabs: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    children: PropTypes.any
}

export default Tabs
