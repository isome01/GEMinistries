import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Calendar from "react-calendar"


class UpcomingFragment extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    upcomingEvents: PropTypes.array,
    convertDate: PropTypes.func
  }

  static defaultProps = {
    upcomingEvents: [],
    convertDate: null,
    loading: false
  }

  constructor(props) {
    super(props)
    this.state = {
      selectDate: null
    }
    this.selectEventFromDay = this.selectEventFromDay.bind(this)
  }

  selectEventFromDay = date => {
    if (date) {
      this.setState({
        selectDate: new Date(date)
      })
    }
  }

  render () {
    const {upcomingEvents, loading, convertDate} = this.props
    const {selectDate} = this.state
    if (loading) {
      return null
    }

    return (
      <Fragment>
        <div className='container-fluid'>
          <Calendar
            value={new Date()}
            tileClassName={({date}) => {
              upcomingEvents.filter(event => {
                if (event.endDate && event.startDate)
                  return (
                    new Date(event.startDate) <= new Date(date) && new Date(event.endDate) >= new Date(date)
                  )
                return false
              }).map(() => 'upcoming-calendar-tile bg-success rounded-top rounded-bottom rounded-left rounded-right border-success text-default')
            }}
            onClickDay={value => this.selectEventFromDay(value)}
            className='upcoming-calendar text-center col-sm col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 border-dark rounded-bottom'
            calendarType='Hebrew'
          />
        </div>
        <br />
        <div className='upcoming-list'>
          <div className='col-sm-12'>
            <div className='col-sm' style={{color: '#1e416e', margin: '20px 0 10px 0'}}>
              <br />
              <h3>Our Upcoming Events!</h3>
              <h4>Here's a quick look at what's happening next:</h4>
              <hr style={{backgroundColor: '#1e416e'}}/>
            </div>
          </div>
          <div className='col-sm-12' style={{margin: '20px 0 50px 0'}}>
            <ul style={{height: '300px', overflow: 'auto'}}>
              {
                (upcomingEvents &&
                  upcomingEvents.map(event => {
                    if (selectDate === null  ||
                      (selectDate >= new Date(event.startDate)
                        && selectDate <= new Date(event.endDate))
                    ) {
                      return (
                        <li
                          style={{listStyleType: 'none'}}
                          className='col-sm-12'>
                          <div className='row'>
                            <div className='col-sm'>
                              <h5>{event.title}</h5>
                              <p>{event.description}</p>
                            </div>
                            <div className='col-sm'>
                              <p className='text-success'>
                                {new Date(event.startDate) > new Date()
                                  ? 'Starts on:' : 'Started on:'}&nbsp;{convertDate(event.startDate)}
                              </p>
                              <p className='text-danger'>
                                Ends:&nbsp;{convertDate(event.endDate)}
                              </p>
                            </div>
                            <div className='col-sm-12'>
                              <hr />
                            </div>
                          </div>
                        </li>
                      )
                    }
                  }))
                || <h5> There are no upcoming events :/ </h5>
              }
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default UpcomingFragment
