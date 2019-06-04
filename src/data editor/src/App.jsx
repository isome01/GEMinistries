import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route } from 'react-router-dom'
import Navbar from './presentational/Navbar/Navbar.jsx'
import EventsEditor from './container/Events/EventsEditor.jsx'
import AnnouncementsEditor from './container/Announcements/AnouncementsEditor.jsx'

class App extends Component{
  static propTypes = {
    uriHangar: PropTypes.func.isRequired
  }

  state = {
    navbarLinks: []
  }

    componentDidMount(){
      /* Make an axios call to get gather categories for their corresponding editable data */

      const navLinks = [
          {text: "Events Editor", link: "/Events"},
          {text: "Community Editor", link: "#"},
          {text: "Announcement Editor", link: "/Announcements"}
      ]

      this.setState(()=>({navbarLinks: navLinks}))
    }

  render = () => {
    const {navbarLinks} = this.state
    const {uriHangar} = this.props
    const domain = 'localhost'
    return (
      <Router>
        <div className='row'>
          <div className=''>
            <Navbar
              logo={"Data Editor"}
              navlinks={navbarLinks}
            />
          </div>
          <Switch>
            <Route
              path={"/Events"} component={props => {
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
              path={"/Announcements"}
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
}

export default App
