import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import VerticalNav from '../../presentational/VerticalNav'
import PageLoader from '../../presentational/Loaders/PageLoader.jsx'
import {convertDate} from '../../../scripts'
import UpcomingFragment from './UpcomingFragment'
import CollageFragment from './CollageFragment'
import './style.css'

class Events extends Component {
  static propTypes = {
    getImage: PropTypes.func,
    uriHangar: PropTypes.func,
    domain: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      fetchEvents: false,
      upcomingEvents: [],
      pastEvents: []
    }
  }
  componentDidMount() {
    const {uriHangar, domain} = this.props
    this.setState({fetchEvents: true})
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

  render () {
    const {fetchEvents, upcomingEvents} = this.state
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
            <VerticalNav
              className='bg-light'
              matchUrl={`${this.props.match.url}`}
              navHeader={'Our Events!'}
              navContent={[
                {link: '', text: 'Upcoming Events'},
                {link: '/Collage', text: 'Our Wall of Events'}
              ]}
            />
            <Route
              path={`${this.props.match.url}`} strict exact
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
                />
              )}
            />
          </section>
        </main>
      </div>
    )
  }
}

export default Events
