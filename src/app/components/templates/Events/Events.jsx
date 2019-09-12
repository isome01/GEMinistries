import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'
import PageLoader from '../../presentational/Loaders/PageLoader.jsx'
import {centerElementToScreen, convertDate} from '../../../scripts'
import {List} from 'immutable'
import UpcomingFragment from './UpcomingFragment.jsx'
import CollageFragment from './CollageFragment.jsx'
import './style.css'

class Events extends Component {
  static propTypes = {
    getImage: PropTypes.func,
    uriHangar: PropTypes.func,
    domain: PropTypes.string.isRequired,
    centerElementToScreen: PropTypes.func,
    routingContent: PropTypes.instanceOf(List)
  }

  static defaultProps = {
    routingContent: List()
  }

  constructor (props) {
    super(props)
    this.state = {
      fetchEvents: false,
      upcomingEvents: List(),
      pastEvents: List(),
      navContent: List()
    }
    this.populateNavContent = this.populateNavContent.bind(this)
  }

  componentWillMount () {
    this.populateNavContent(this.props.routingContent)
  }

  componentDidMount () {
    const {uriHangar, domain} = this.props
    this.setState({
      fetchEvents: true
    })
    uriHangar('events', 'read', {}, domain).then(
      res => {
        this.setState({
          upcomingEvents: List(res.map(event => ({...event})).filter(
            event => {
              return (
                new Date(event.startDate) >= new Date()
                || event.endDate >= new Date(event.endDate))
            }
          )),
          pastEvents: List(res.map(event => ({...event})).filter(
            event => new Date(event.endDate) < new Date()
          )),
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

  populateNavContent = (content = List()) => {
    this.setState({
      navContent: List(content.size
        ? content
        : [{link: '/Future-Events', text: 'Upcoming Events'},
          {link: '/Collage', text: 'Our Wall of Events'}]
    )})
  }

  isKnownPath = (path = '') => {
    let  knownPath = false
    this.state.navContent.toJS().forEach(content => {
      const relPath = String(`${this.props.match.url}${content.link}`).toLowerCase()
      const query = String(path).toLowerCase()
      if (query.endsWith(relPath)) {
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
                  upcomingEvents={upcomingEvents.toJS()}
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
                  pastEvents={pastEvents.toJS()}
                  centerElement={this.props.centerElementToScreen}
                />
              )}
            />
            {!this.isKnownPath(window.location.href) && (
              <Redirect to={`${this.props.match.url}${navContent.get(0, {link: '/#'}).link}`} />
            )}
          </section>
        </main>
      </div>
    )
  }
}

export default Events
