import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavbarContainer.css';

class NavbarContainer extends Component {

    constructor(props){
        super(props);
    }

    shouldComponentUpdate = (nextProps, nextState) => {

        return this.props.navbar_content == nextProps.navbar_content ? false : true;
    }

    render(){

        const navbar_content = this.props.navbar_content || [
            { text : 'Community', link : '/Community' },
            { text : 'Events', link : '/Events' },
            { text : 'About Us', link : '/About_Us' }
        ];

        return(
            <div id="navbar_sticky-top">
                <nav className="navbar navbar-expand-md bg-light">
                    <div className="navbar-header">
                        <NavLink to="/">
                            <span> GEMinistries </span>
                        </NavLink>
                    </div>

                    <ul class="navbar-nav">
                        {navbar_content.map( $_ => {
                            return <NavLink key={$_.text} to={$_.link}>
                                <li className="nav-item" key={$_.text}><a className="nav-link">{$_.text}</a></li>
                            </NavLink>
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}

NavbarContainer.propTypes = {
    navbar_content : PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    navbar_header : PropTypes.string.isRequired
};

export default NavbarContainer;
