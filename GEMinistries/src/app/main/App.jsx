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
        super()
        this.getImage = this.getImage.bind(this)
    }

    componentWillMount(){
        //create the context to assets here!!! Don't forget
        //NOTE: this is so that you will always have a 'context' to refer to.
    }

    getImage = (src = '') => {
        try{
            return require(`../../assets/${src}`)
        } catch {
            throw new Error('Problem loading the image;')
            return ''
        }
    }

    render(){
        //Install navbar content
        const navbar_content = [
          {text: 'Community', link: '/Community'},
          {text: 'About Us', link: '/About_Us'},
        ]
        return(
            <div>
                <Router>
                    <div id='app-content' className="container">
                        <PageBanner banner_logo={banner_logo} banner_moto={banner_moto}/>
                        <HorizontalNav
                          className='bg-light sticky-top'
                          navLogoText='GEMOutreach'
                          navLogoImg={navLogoImg}
                          navContent={navbar_content}
                        />
                        <Switch>
                            <Route
                              path="/" exact strict
                              component={props=>(
                                <Home
                                  {...props}
                                  getImage={this.getImage}
                                />)}
                            />
                            <Route
                              path="/About_Us" strict
                              component={ props => (
                                <AboutUs
                                  {...props}
                                  getImage={this.getImage}
                                />
                              )}
                            />
                            <Route
                              path="/Community" strict
                              component={props => (
                                <Community
                                  {...props}
                                  getImage={this.getImage}
                                />
                                )}
                            />
                            <Route component={Error}/>
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
