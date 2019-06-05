import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Announcement from '../../containers/Announcement/Announcement.jsx'
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'
import PageLoader from '../../presentational/Loaders/PageLoader.jsx'
import feed from './default'
import './style.css'
import $ from 'jquery'

class Home extends Component{
  static propTypes = {
    getImage: PropTypes.func,
    uriHangar: PropTypes.func,
    domain: PropTypes.string.isRequired
  }

  constructor() {
    super()
    this.state = {
      fetchNewsFeed: false,
      newsFeed: [],
      fetchEvents: false,
      featuredEvent: null,
      upcomingEvents: []
    }
    this.convertDate = this.convertDate.bind(this)
    this.meridiem = this.meridiem.bind(this)

  }

  componentWillMount () {
    /* Set some arbitrary variables */
    const {uriHangar, domain} = this.props
    let announcements = window.sessionStorage.getItem('announcements')

    if (!announcements){
      uriHangar('announcements', 'read', {}, domain).then(
        message => {
          console.log(message)
          this.setState({fetchNewsFeed: true})
          window.sessionStorage.setItem('announcements', 'true')
        },
        err => console.log(err)
      )
    }
  }

  componentDidMount () {
    /* get info from the uri hangar ... */
    let news_feed = [...feed]
    let upcomingEvents = []
    let featuredEvent = null
    const {uriHangar, domain} = this.props
    const {fetchNewsFeed, fetchEvents} = this.state
    if (!fetchEvents) {
      uriHangar('events', 'read', {}, domain).then(
       res => {
         if (res.length > 1) {
           for (let i = 1; i < res.length; i++) {
             let event = res[i]
             if (event['status'] === 'past' && event['attachment']) {
               if (new Date(event['endDate']) >= new Date(res[i-1]['endDate'])) {
                 featuredEvent = event
               } else featuredEvent = res[i]
             }
           }
         } else featuredEvent = (
           (res[0] && res[0]['status'] === 'past' && res[0]['attachment'] && res[0]['attachment'].length)
             ? {...res[0]}
             : {...featuredEvent}
         )

         this.setState({
           featuredEvent: {...featuredEvent},
           upcomingEvents: (res || []).reverse().map(event => {
             if (event['status'] === 'future') {
               return {...event}
             }
           }),

         })
       },
       err => {
         console.log(err)
         featuredEvent = null
         upcomingEvents = []
       }
      )
    }
    if (!fetchNewsFeed) {
      uriHangar('announcements', 'read', {}, domain).then(
        res => {
          this.setState({
            newsFeed: (res || []).map((feed, index) => ({
              header: feed.header,
              summary: feed.summary,
              attachment: feed.attachment,
              created: feed.created
            })),
            fetchNewsFeed: true,
            fetchEvents: true
          })
        },
        err => {
          console.log(err)
          this.setState(()=>({
            newsFeed : news_feed.slice(),
            upcomingEvents: upcomingEvents.slice(),
            featuredEvent: null
          }))
        }
      )
    }
  }

  meridiem = (hr, min) => hr < 12 ? `${hr}:${min} AM` : `${hr === 12 ? '12' : `${hr - 12}`}:${String(min).length === 1 ? '0' : ''}${min} PM`

  convertDate = created => {
    const date = new Date(created)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${days[date.getDay()]} - ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${this.meridiem(date.getHours(),date.getMinutes())}`
  }

  render () {
    const {newsFeed, fetchNewsFeed, fetchEvents, featuredEvent, upcomingEvents} = this.state
    const {getImage} = this.props
    if (!fetchNewsFeed || !fetchEvents) {
      return (
        <div className='container'>
          <div className='text-center' style={{position: 'center'}}>
            <PageLoader/>
          </div>
        </div>
      )
    }
    return (
      <div id="home-page" className="home container-fluid">
        <main>
          <section>
            <br/>
            <h2 className='text-center' style={{color: 'navy'}}>
              Living His mission
            </h2>
            <div>
              {
                featuredEvent && featuredEvent['attachment'] && (
                  <DynamicImg
                    title='featured-event'
                    className='text-center'
                    style={({
                      border: 'solid navy 1px',
                      height: '600px'
                    })}
                    dataList={featuredEvent['attachment'].split(',').map(image => ({
                      name: 'featured-event',
                      caption: (featuredEvent.description || ''),
                      path: getImage(image)})
                    )}
                  />
                )
              }
            </div>
            <br/>
            <br/>
            <h2> Announcements: </h2>
            {(newsFeed || []).reverse().map(feed => (
              <div>
                <hr style={{border: 'solid #000080 1px'}}/>
                <p
                  className='text-left'
                  style={{color: 'navy'}}
                >Posted On:&nbsp;
                  {this.convertDate(feed.created)}
                </p>
                <Announcement
                  article={({
                    header: feed.header || 'No header',
                    summary: feed.summary || 'This announcement has no summary',
                    children: (
                      feed.attachment &&
                      <div style={{height: '370px', width: '370px', display: 'inline-block'}}>
                        <DynamicImg
                          style={{
                            border: 'solid #eee 2px',
                            backgroundColor: '#000',
                            height: '100%',
                            width: '100%',
                            display: 'block'
                          }}
                          dataList={[{
                            name: feed.header,
                            path: `${getImage(feed.attachment)}`,
                          }]}
                          title={feed.header}
                          showCaption={false}
                          showTitle={false}
                        />
                      </div>
                    )
                  })}
                />
              </div>
            ))}
          </section>
        </main>
      </div>
    )
  }
}

export default Home;
