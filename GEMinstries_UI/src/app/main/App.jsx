import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

//Import page templates
import Home from '../templates/Home/Home.jsx';
import AboutUs from '../templates/AboutUs/AboutUs.jsx';
import Error from '../templates/Error/Error.jsx';

import PageBanner from '../components/PageBanner/PageBanner.jsx';
import NavbarContainer from '../components/NavbarContainer/NavbarContainer.jsx';

//Image imports
import banner_logo from '../../assets/GEM_Logo_Navy.png';
import banner_moto from '../../assets/mission_statement_2.png';

/* Styling and parent-sizing */
import './app.css';

class App extends Component {

    constructor(){
        super();
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    render(){

        //Install navbar content
        const navbar_content = [
            { text : 'About Us', link : '/About_Us' }
        ];

        return(
            <div class="container">
                <Router>
                    <div>
                        <PageBanner banner_logo={banner_logo} banner_moto={banner_moto}/>
                        <NavbarContainer navbar_content={navbar_content} />

                        <Switch>
                            <Route path="/" exact strict component={Home} />
                            <Route path="/About_Us" component={AboutUs} strict/>
                            <Route component={Error}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
