import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import NavbarContainer from '../../components/NavbarContainer/NavbarContainer.jsx';

//Image imports
import banner_logo from '../../../assets/GEM_logo_navy.png';
import banner_moto from '../../../assets/mission_stsatement_2.png';

import './AboutUspage.css';

class AboutUspage extends Component{

    render(){
        return(
            <div id="about_us" class="about-us">
                <header>
                    <PageBanner banner_logo={banner_logo} banner_moto={banner_moto}/>
                    <NavbarContainer />
                </header>
                <main>
                    <h1 className="about-us-header">
                        About Us
                    </h1>
                </main>
                <footer class="about-us-footer">

                </footer>
            </div>
        );
    }
};

export default AboutUspage;