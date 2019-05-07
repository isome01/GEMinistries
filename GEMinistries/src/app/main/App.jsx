import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Footer from '../components/presentational/Footer/Footer.jsx'

//Import page templates
import Home from '../components/templates/Home/Home.jsx'
import AboutUs from '../components/templates/AboutUs/AboutUs.jsx'
import Error from '../components/templates/Error/Error.jsx'
import Community from '../components/templates/Community/Community.jsx'
import PageBanner from '../components/containers/PageBanner/PageBanner.jsx'
import HorizontalNav from '../components/presentational/HorizontalNav/HorizontalNav.jsx'
//Image imports
import banner_logo from '../../assets/GEMnavImgLogo.png';
import banner_moto from '../../assets/mission_statement_2.png';
import navLogoImg from '../../assets/GEMnavLogoText.png'
/* Styling and parent-sizing */
import './main.css';

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
          {text: 'Community', link: '/Community'},
          {text: 'About Us', link: '/About_Us'},
        ]
        return(
            <div id='app-content' class="container">
                <Router>
                    <div>
                        <PageBanner banner_logo={banner_logo} banner_moto={banner_moto}/>
                        <HorizontalNav
                          className='bg-light sticky-top'
                          navLogoText='GEMOutreach'
                          navLogoImg={navLogoImg}
                          navContent={navbar_content}
                        />
                        <Switch>
                            <Route path="/" exact strict component={Home} />
                            <Route path="/About_Us" component={AboutUs} strict/>
                            <Route path="/Community" component={Community} strict/>
                            <Route component={Error}/>
                        </Switch>
                        <Footer/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
