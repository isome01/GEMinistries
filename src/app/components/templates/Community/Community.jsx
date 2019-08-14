import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'
import PrayerFragment from './PrayerFragment.jsx'
import MissionTripsFragment from "./MissionTripsFragment.jsx"
import MinistriesFragment from "./MinistriesFragment.jsx"
import ActivitiesFragment from './ActivitiesFragment.jsx'
import VerticalNav from "../../presentational/VerticalNav/VerticalNav.jsx"
import './style.css'

class Community extends Component {

  static propTypes = {
    getImage: PropTypes.func.required,
    routingContent: PropTypes.array
  }

  static defaultProps = {
    routingContent: []
  }

  constructor(props){
    super(props)

    this.state = {
      navContent: []
    }

    this.populateNavContent = this.populateNavContent.bind(this)
  }

  populateNavContent = content => {
    if (content.length){
      console.log('There lies content...')
      this.setState({navContent: content.slice()})
    } else {
      /*populate with default values*/
      this.setState( {
        navContent: [
          {link: '/Prayer', text: 'Prayer'},
          {link: '/Activities', text: 'Activities'},
          {link: '/Ministries', text: 'Ministries'},
          {link: '/Mission-Trips', text: 'Mission Trips'},
        ]}
      )
    }
  }

  componentWillMount () {
    /*make and axios fetch to backend if need be...*/
    this.populateNavContent(this.props.routingContent)
  }

  isKnownPath = (path = '') => {
    let  knownPath = false
    this.state.navContent.forEach(content => {
      const relPath = String(`${this.props.match.url}${content.link}`).toLowerCase()
      const query = String(path).toLowerCase()
      if (query.endsWith(relPath)) {
        knownPath = true
      }
    })
    return knownPath
  }

  render () {
    const {navContent} = this.state
    const {getImage} = this.props

    return (
      <div id="community-page" className="community container-fluid">
        <main>
          <section className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{width: '100%', maxWidth: '100%'}}>
              <Route
                path={`${this.props.match.url}/Prayer`}
                render={props => (
                  <PrayerFragment
                    {...props}
                    getImage={getImage}
                  />
                )}
                exact
              />
              <Route
                path={`${this.props.match.url}/Mission-Trips`}
                render={props => (
                  <MissionTripsFragment
                    {...props}
                    getImage={getImage}
                  />
                )}
                exact
              />
              <Route
                path={`${this.props.match.url}/Activities`}
                component={props => (
                  <ActivitiesFragment
                    {...props}
                    getImage={getImage}
                  />
                )}
                exact
              />
              <Route
                path={`${this.props.match.url}/Ministries`}
                component={props => (
                  <MinistriesFragment
                    {...props}
                    getImage={getImage}
                  />
                )}
                exact
              />
              {!this.isKnownPath(window.location.href) && (
                <Redirect to={`${this.props.match.url}${navContent[0].link}`} />
              )}
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Community
