import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import PrayerFragment from './PrayerFragment.jsx'
import MissionTripsFragment from "./MissionTripsFragment.jsx"
import MinistriesFragment from "./MinistriesFragment.jsx"
import ActivitiesFragment from './ActivitiesFragment.jsx'
import VerticalNav from "../../presentational/VerticalNav/VerticalNav.jsx"
import './style.css'

class Community extends Component {

  constructor(props){
    super(props)

    this.state = {
      navContent: [],
    }

    this.populateNavContent = this.populateNavContent.bind(this)
  }

  populateNavContent = content => {
    if (content){
      let navContent = content.slice()
      this.setState({navContent: navContent})
    } else {
      /*populate with default values*/
      this.setState( {
        navContent: [
          {link: '/Prayer', text: 'Prayer'},
          {link: '/Activities', text: 'Activities'},
          {link: '/Ministries', text: 'Ministries'},
          {link: '/Mission-Trips', text: 'Mission Trips'},
        ]})
    }
  }

  componentWillMount() {
    /*make and axios fetch to backend if need be...*/
    this.populateNavContent()
  }

  render(){
    const {navContent} = this.state

    return (
      <div id="community-page" className="community container-fluid">
        <main>
          <section className='row'>
            <VerticalNav
              navHeader={'Our Community'}
              navContent={navContent}
              className={'bg-light col-sm-2'}
              matchUrl={this.props.match.url}
            />
            <div className='offset-sm-1 col-sm-9 col-xs-12'>
              <Route
                path={`${this.props.match.url}`}
                render={() =>(
                  <div className='text-center xioudown-banner'>
                    <h3>Our community is growing!</h3>
                    <b>
                      We highly value our community, and you make the community. We
                      strive for Christ-like relationships and growth for all; come and
                      join us as we sail on this outreach!
                    </b>
                  </div>
                )}
                exact
              />
              <Route
                path={`${this.props.match.url}/Prayer`}
                render={()=><PrayerFragment />}
                exact
              />
              <Route
                path={`${this.props.match.url}/Mission-Trips`}
                render={()=><MissionTripsFragment />}
                exact
              />
              <Route
                path={`${this.props.match.url}/Activities`}
                render={()=><ActivitiesFragment />}
                exact
              />
              <Route
                path={`${this.props.match.url}/Ministries`}
                render={()=><MinistriesFragment />}
                exact
              />
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Community
