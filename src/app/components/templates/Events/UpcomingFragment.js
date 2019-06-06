import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Calendar from "react-calendar"

class UpcomingFragment extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    upcomingEvents: PropTypes.array,
  }

  static defaultProps = {
    upcomingEvents: [],
    loading: false
  }

  state = {
  }

  render () {
    const {upcomingEvents, loading} = this.props

    if (loading) {
      return null
    }

    return (
      <Fragment>
        <Calendar
          value={new Date()}
          className='col-sm border-dark border-top-0 rounded-bottom'
          calendarType='Hebrew'
        />
        <br />
        <div className='col-sm-12'>
          <div className='col-sm' style={{color: '#1e416e', margin: '20px 0 10px 0'}}>
            <br />
            <h3>Our Upcoming Events!</h3>
            <h4>Here's a quick look at what's happening next:</h4>
            <hr style={{backgroundColor: '#1e416e'}}/>
          </div>
        </div>
        <div className='col-sm-12' style={{margin: '20px 0 50px 0'}}>
          <ul>
            {
              (upcomingEvents &&
                upcomingEvents.map(event => (
                  <li style={{listStyleType: 'none'}}>
                    <h5>{event.title}</h5>
                    <p>{event.description}</p>
                    <hr />
                  </li>
                ))) || (
                <h5> There are no upcoming events :/ </h5>
              )
            }
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default UpcomingFragment
