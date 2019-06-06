import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import VerticalNav from '../../presentational/VerticalNav'
import UpcomingFragment from './UpcomingFragment'
import PageLoader from '../../presentational/Loaders/PageLoader.jsx'

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
      events: []
    }
  }
  componentDidMount() {
    const {uriHangar, domain} = this.props
    let events = []
    this.setState({fetchEvents: true})
    uriHangar('events', 'read', {}, domain).then(
      res => {
        events = res.map(event => {
          if (event.startDate >= new Date() || event.endDate >= new Date()) {
            return {...event}
          }
        })
        this.setState({
          fetchEvents: false,
          events
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
    const {fetchEvents, getImage} = this.state
    if (fetchEvents) {
      return (
        <div className='text-center'>
          <PageLoader/>
        </div>
      )
    }
    return (
      <div id='events-page' className='container-fluid'>
        <main>
          <section className='row'>
            <VerticalNav
              className='bg-light'
              matchUrl={`${this.props.match.url}`}
              navHeader={'Our Events!'}
              navContent={[
                {link: '', text: 'Upcoming Events'},
                {link: '/Past', text: 'Passed Events'},
                {link: '/Collage', text: 'Our Wall of Events'}
              ]}
            />
            <Route
              path={`${this.props.match.url}`} strict exact
              render={()=>(
                <UpcomingFragment
                  loading={fetchEvents}
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
