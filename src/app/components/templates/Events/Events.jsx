import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'
import PageLoader from '../../presentational/Loaders/PageLoader.jsx'
import {centerElementToScreen, convertDate} from '../../../scripts'
import UpcomingFragment from './UpcomingFragment.jsx'
import CollageFragment from './CollageFragment.jsx'
import './style.css'

class Events extends Component {
  static propTypes = {
    getImage: PropTypes.func,
    uriHangar: PropTypes.func,
    domain: PropTypes.func,
    centerElementToScreen: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      fetchEvents: false,
      upcomingEvents: [],
      pastEvents: [],
      navContent: []
    }
  }

  componentWillMount () {
    this.setState({
      navContent: [
        {link: '/Future-Events', text: 'Upcoming Events'},
        {link: '/Collage', text: 'Our Wall of Events'}
      ]
    })
  }

  componentDidMount() {
    const {uriHangar, domain} = this.props
    this.setState({
      fetchEvents: true,

    })
    uriHangar('events', 'read', {}, domain).then(
      res => {
        this.setState({
          upcomingEvents: res.map(event => ({...event})).filter(
            event => {
              return (
                new Date(event.startDate) >= new Date()
                || event.endDate >= new Date(event.endDate))
            }
          ),
          pastEvents: res.map(event => ({...event})).filter(
            event => new Date(event.endDate) < new Date()
          ),
          fetchEvents: false
        })
      }
    ).catch(
      err => {
        console.log(err)
        this.setState({
          fetchEvents: false
        })
      }
    )
  }

  isKnownPath = (path = '') => {
    let  knownPath = false
    this.state.navContent.forEach(content => {
      const relPath = String(`${this.props.match.url}${content.link}`).toLowerCase()
      const query = String(path).toLowerCase()
      if (relPath.endsWith(query)) {
        knownPath = true
      }
    })
    return knownPath
  }

  render () {
    const {fetchEvents, upcomingEvents, pastEvents, navContent} = this.state
    const {getImage} = this.props
    if (fetchEvents) {
      return (
        <div className='text-center'>
          <PageLoader/>
        </div>
      )
    }

    return (
      <div id='events-page' className='events-page container-fluid'>
        <main>
          <section className='row'>
            <Route
              path={`${this.props.match.url}/Future-Events`} strict exact
              render={() => (
                <UpcomingFragment
                  upcomingEvents={upcomingEvents}
                  loading={fetchEvents}
                  getImage={getImage}
                  convertDate={convertDate}
                />
              )}
            />
            <Route
              strict
              path={`${this.props.match.url}/Collage`}
              render={() => (
                <CollageFragment
                  getImage={getImage}
                  loading={fetchEvents}
                  convertDate={convertDate}
                  pastEvents={pastEvents}
                  centerElement={this.props.centerElementToScreen}
                />
              )}
            />
            {!this.isKnownPath(window.location.href) && (
              <Redirect to={`${this.props.match.url}${navContent[0].link}`} />
            )}
          </section>
        </main>
      </div>
    )
  }
}

export default Events
