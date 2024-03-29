import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Footer from '../components/presentational/Footer/Footer.jsx'
//Import page templates
import Home from '../components/templates/Home/Home.jsx'
import AboutUs from '../components/templates/AboutUs/AboutUs.jsx'
import Error from '../components/templates/Error/Error.jsx'
import Community from '../components/templates/Community/Community.jsx'
import Events from '../components/templates/Events/Events.jsx'
import PageBanner from '../components/containers/PageBanner/PageBanner.jsx'
import HorizontalNav from '../components/presentational/HorizontalNav/HorizontalNav.jsx'
import {getImage, centerElementToScreen} from '../scripts'
/* Styling and parent-sizing */
import './main.css'
import VerticalNav from '../components/presentational/VerticalNav'

const App = ({uriHangar, domain}) => {
  //Install navbar content
  const navContent = [
    {text: 'Community', link: '/Community',
      children: (
        <VerticalNav
          navHeader='Our Community'
          navContent={[
            {link: '/Prayer', text: 'Prayer'},
            {link: '/Activities', text: 'Activities'},
            {link: '/Ministries', text: 'Ministries'},
            {link: '/Mission-Trips', text: 'Mission Trips'},
          ]}
          className='dynamic-nav text-center bg-light col-sm-12 col-md-12 col-lg-12'
          matchUrl='/Community'
        />)
    },
    {text: 'Events', link: '/Events',
      children: (
        <VerticalNav
          className='dynamic-nav text-center bg-light col-sm-12 col-md-12 col-lg-12'
          matchUrl={`/Events`}
          navHeader={'Our Events!'}
          navContent={[
            {link: '/Future-Events', text: 'Upcoming Events'},
            {link: '/Collage', text: 'Our Wall of Events'}
          ]}
        />
      )
    },
    {text: 'About Us', link: '/About-Us'}
  ]
  const homePageStyle = {width: '100%'}
  return (
    <Router
      basename='/'
      forceRefresh={!('pushState' in window.history)}
    >
      <div>
        <div className='container-fluid' style={{maxHeight: 100}}>
          <PageBanner
            className=''
            bannerMoto={getImage('mission_statement_2.png')}
          />
        </div>
        <div
          className='sticky-top'
          style={homePageStyle}
        >
          <HorizontalNav
            className='offset-md-2 col-md-6'
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
                />)
              }
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
                  centerElementToScreen={centerElementToScreen}
                  uriHangar={uriHangar}
                  domain={domain}
                />
              )}
            />
            <Route component={Error}/>
          </Switch>
        </div>
        <div className='container-fluid' style={homePageStyle}>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

App.propTypes = {
  uriHangar: PropTypes.func.isRequired,
  domain: PropTypes.string
}

App.defaultProps = {
  uriHangar: () => {},
  domain: 'localhost'
}

export default App
