import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Announcement from '../../containers/Announcement/Announcement.jsx'
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'
import PageLoader from '../../presentational/Loaders/PageLoader.jsx'
import {convertDate} from '../../../scripts'
import feed from './default'
import './style.css'

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
  }

  componentWillMount () {
    /* Set some arbitrary variables */
    const {uriHangar, domain} = this.props
    let announcements = window.sessionStorage.getItem('announcements')

    if (!announcements){
      uriHangar('announcements', 'read', {}, domain).then(
        () => {
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
         const pastEvents = res.filter(event => (event['status'] === 'past' && event['attachment']))
         if (pastEvents.length > 1) {
           for (let i = 1; i < pastEvents.length; i++) {
             let event = pastEvents[i]
              if (new Date(event['endDate']) >= new Date(pastEvents[i-1]['endDate'])) {
                featuredEvent = event
              } else featuredEvent = pastEvents[i]
           }
         } else featuredEvent = (
           (pastEvents[0]['attachment'] && pastEvents[0]['attachment'].length)
             ? {...pastEvents[0]}
             : {...featuredEvent}
         )

         this.setState({
           featuredEvent: {...featuredEvent},
           upcomingEvents: (pastEvents || []).reverse().map(event => {
             if (event['status'] === 'future') {
               return {...event}
             }
           }),
           fetchEvents: true
         })
       },
       err => {
         console.log(err)
         featuredEvent = null
         upcomingEvents = []
         this.setState({
           featuredEvent,
           upcomingEvents,
           fetchEvents: true
         })
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
            fetchNewsFeed: true
          })
        },
        err => {
          console.log(err)
          this.setState(()=>({
            newsFeed: [],
            fetchNewsFeed: true
          }))
        }
      )
    }
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
            <div className='featured-event-info col-sm-12'>
              <h2 className='text-center'>
                Featuring our previous event:&nbsp;
              </h2>
              {featuredEvent &&
                <div>
                  <i>{featuredEvent.description}</i>
                </div>
              }
            </div>
            <div>
              {
                featuredEvent && featuredEvent['attachment'] && (
                  <DynamicImg
                    title={featuredEvent.title ? featuredEvent.title.replace(/ /g, '-') : 'GEM'}
                    className='text-center'
                    style={({
                      border: 'solid #1e416e 1px',
                      height: '600px'
                    })}
                    dataList={featuredEvent['attachment'].split(',').slice(0, 5).map(
                      image => ({
                        name: featuredEvent.title.replace(/ /g, '-'),
                        caption: (featuredEvent.description || ''),
                        path: getImage(image)
                      })
                    )}
                    showCaption={false}
                  />
                )
              }
            </div>
            <div className='featured-event-info' style={{margin: '10px 0', boxShadow: 'none', backgroundColor: '#fff', color: '#1e416e'}}>
              <i>(For more information on upcoming events check out our events page.)</i>
            </div>
            <br/>
            <br/>
            <h2> Announcements: </h2>
            {(newsFeed || []).reverse().map(feed => (
              <div>
                <hr style={{border: 'solid #1e416e 1px'}}/>
                <p
                  className='text-left'
                  style={{color: '#000080'}}
                >Posted On:&nbsp;
                  {convertDate(feed.created)}
                </p>
                <Announcement
                  article={({
                    header: feed.header || 'No header',
                    summary: feed.summary || 'This announcement has no summary',
                    children: (
                      feed.attachment &&
                      <div style={{height: '220px', width: '300px', display: 'inline-block'}}>
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
