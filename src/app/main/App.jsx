import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, browserHistory} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Footer from '../components/presentational/Footer/Footer.jsx'
//Import page templates
import Home from '../components/templates/Home/Home.jsx'
import AboutUs from '../components/templates/AboutUs/AboutUs.jsx'
import Error from '../components/templates/Error/Error.jsx'
import Community from '../components/templates/Community/Community.jsx'
import Events from '../components/templates/Events/Events'
import PageBanner from '../components/containers/PageBanner/PageBanner.jsx'
import HorizontalNav from '../components/presentational/HorizontalNav/HorizontalNav.jsx'
import {getImage} from '../scripts'

/* Styling and parent-sizing */
import './main.css'

class App extends Component {
  static propTypes = {
    uriHangar: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    //create the context to assets here!!! Don't forget
    //NOTE: this is so that you will always have a 'context' to refer to.
  }

  render() {
    //Install navbar content
    const navContent = [
      {text: 'Community', link: '/Community'},
      {text: 'Events', link: '/Events'},
      {text: 'About Us', link: '/About-Us'}
    ]
    const {uriHangar} = this.props
    const domain = this.props.domain || 'localhost'
    return (
      <Router history={browserHistory}>
        <div>
          <div className='container-fluid' style={{backgroundColor: '#1e416e'}}>
            <PageBanner
              className=''
              bannerLogo={getImage('GEM-04.svg')}
              bannerMoto={getImage('mission_statement_2.png')}
            />
          </div>
          <div
            className='sticky-top'
            style={{backgroundColor: '#eee', width: '100%', margin: '0'}}
          >
            <HorizontalNav
              className='container-fluid'
              navLogoText='GEMOutreach'
              navLogoImg={getImage('GEMnavLogoText.png')}
              navContent={navContent}
              id='GEMOutreachNav'
            />
          </div>
          <div id='app-content'>
            <Switch>
              <Route
                path="/" exact strict
                component={props => (
                  <Home
                    {...props}
                    getImage={getImage}
                    uriHangar={uriHangar}
                    domain={domain}
                  />)}
              />
              <Route
                path="/About-Us" strict
                component={props => (
                  <AboutUs
                    {...props}
                    getImage={getImage}
                    uriHangar={uriHangar}
                    domain={domain}
                  />
                )}
              />
              <Route
                path="/Community" strict
                component={props => (
                  <Community
                    {...props}
                    getImage={getImage}
                    uriHangar={uriHangar}
                    domain={domain}
                  />
                )}
              />
              <Route
                path="/Events" strict
                component={props => (
                  <Events
                    {...props}
                    getImage={getImage}
                    uriHangar={uriHangar}
                    domain={domain}
                  />
                )}
              />
              <Route component={Error}/>
            </Switch>
          </div>
          <div className='container-fluid'>
            <Footer/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
