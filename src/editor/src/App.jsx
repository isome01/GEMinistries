import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route } from 'react-router-dom'
import Navbar from './presentational/Navbar/Navbar.jsx'
import EventsEditor from './container/Events/EventsEditor.jsx'
import AnnouncementsEditor from './container/Announcements/AnouncementsEditor.jsx'

const App = ({uriHangar, domain}) => {
  const navbarLinks = [
    {text: "Events Editor", link: "/Events"},
    {text: "Community Editor", link: "#"},
    {text: "Announcement Editor", link: "/Announcements"}
  ]

  return (
    <Router
      basename='/'
      forceRefresh={!('pushState' in window.history)}
    >
      <div className='row'>
        <div className=''>
          <Navbar logo='Data Editor' navlinks={navbarLinks} />
        </div>
        <Switch>
          <Route
            path='/Events'
            component={props => {
            return (
              <EventsEditor
                {...props}
                domain={domain}
                uriHangar={uriHangar}
              />
            )
          }}
          />
          <Route
            path='/Announcements'
            component={props => {
              return (
                <AnnouncementsEditor
                  {...props}
                  domain={domain}
                  uriHangar={uriHangar}
                />
              )
            }}/>
        </Switch>
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
