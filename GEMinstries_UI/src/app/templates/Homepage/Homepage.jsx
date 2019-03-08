import React, { Component } from 'react';
import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import NavbarContainer from '../../components/NavbarContainer/NavbarContainer.jsx';

import './Homepage.css'

class Homepage extends Component{


    componentWillMount(){
        /* Set some arbitrary variables */
    }

    componentDidMount(){

    }

    render(){
        return(
            <div id="home_page" class="home">
                <header>
                    <PageBanner />
                    <NavbarContainer />
                </header>
                <main>

                </main>
                <footer>

                </footer>
            </div>
        )
    }
}

export default Homepage;