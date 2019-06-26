import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
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
      upcomingEvents: [],
      pastEvents: [],
      featuredImage: null
    }
    this.getFeaturedDisplay = this.getFeaturedDisplay.bind(this)
    this.getFeaturedImage = this.getFeaturedImage.bind(this)
    this.transitionFeaturedEvent = this.transitionFeaturedEvent.bind(this)
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
           pastEvents: (pastEvents || []).filter(event => (event._id !== featuredEvent._id)).reverse().slice(0, 4),
           upcomingEvents: (res|| []).filter(event => event['status'] === 'future').reverse(),
           fetchEvents: true
         })
         //this.transitionFeaturedEvent()
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

  transitionFeaturedEvent = () => {
    const {featuredEvent} = this.state
    if (featuredEvent) {
      console.log('firing off event stuff...')
      const title = `#${featuredEvent.title.replace(/ /g, '-')}`
      console.log($(`${title}`).slide)
    }
  }

  getFeaturedImage = image => {
    const {featuredEvent} = this.state
    if (featuredEvent.title) {
      $(`#${featuredEvent.title.replace(/ /g, '-')}`).on('slid.bs.carousel', function () {
      })
      //console.log(image)
      if (image) {
        this.setState({
          featuredImage: (this.props.getImage(
            image || '37229110_10156750315657859_5542478179626647552_n.jpg'
          ))
        })
      }
    }
  }

  getFeaturedDisplay = () => {
    const element = document.getElementsByClassName('featured-display')[0]
    //console.log(element)
    if (element) {
      const {height, maxHeight} = element.style
      /*console.log('size:', height, maxHeight)
      console.log(element.style)*/
      return maxHeight || height
    }
  }

  render () {
    const {newsFeed, fetchNewsFeed, fetchEvents, featuredEvent, pastEvents, featuredImage} = this.state
    const {getImage} = this.props
    let featuredImageStyle = {
      position: 'relative',
      background: `url('${getImage('37229110_10156750315657859_5542478179626647552_n.jpg')}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      maxWidth: '100%',
      height: 600,
      display: 'block',
      transition: 'opacity 1.5s'
    }

    const featuredImageHeight = this.getFeaturedDisplay()

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
          <section className='row featured-events-section'>
            <br/>
            <div className='featured-event-info col-sm-12'>
              <h2 className='text-center' style={{color: '#1e416e', fontWeight: 'bold', fontFamily: 'Georgia, Times New Roman, serif'}}>
                Featuring our previous event:&nbsp;
              </h2>
              {featuredEvent &&
                <div>
                  <i>{featuredEvent.description}</i>
                </div>
              }
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-12-sm'>
              {
                featuredEvent && featuredEvent['attachment'] && (
                  <div className='text-center'>
                    <div
                      className='featured-display'
                      style={featuredImageStyle}>
                      <DynamicImg
                        title={featuredEvent.title || 'GEM'}
                        className='text-center'
                        style={({
                          borderTop: 'solid #eee 1px',
                          borderBottom: 'solid #eee 1px',
                          backgroundColor: 'rgba(0, 0, 0, .8)',
                          height: featuredImageHeight || 600
                        })}
                        dataList={featuredEvent['attachment'].split(',').slice(0, 5).map(
                          image => {
                            return({
                              name: featuredEvent.title || 'GEM',
                              caption: (featuredEvent.description || ''),
                              path: getImage(image)
                            })
                          }
                        )}
                        showCaption={false}
                        getCurrentImage={this.getFeaturedImage}
                        passingLink={featuredEvent['attachment'].split(',')[0]}
                      />
                    </div>
                  </div>
                )
              }
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-12-sm'  style={{backgroundColor: '#fff'}}>
              <div className='past-events-panel' style={{}}>
                <h2 className='text-center' style={{fontWeight: 'bold', color: '#fff'}}> GEM Outreach Past Events! </h2>
                <div className='offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 offset-md-1 col-md-10 text-center' style={{backgroundColor: '#fff'}}>
                  <div className='row past-event-row'>
                    {
                      pastEvents.map(event => (
                        <div className='past-event-container'>
                          <div className='past-event-img'>
                            <div className='overlay'>
                              {event.title}
                            </div>
                          </div>
                          <div className='past-events-dialog'>
                            {event.description}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div>
                    <i>(For more information on upcoming events check out our events page.)</i>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='row announcements-section'>
            <div className='col-xl-12 col-lg-12 col-md-12'>
              <div className='offset-lg-1 col-lg-10 offset-md-1 col-md-10 col-sm-12 col-xs-12'>
                <br/>
                <br/>
                <h2 className='text-left announcements-header'>
                  Announcements:
                </h2>
                <hr style={{border: 'solid #1e416e 1px'}}/>
                {(newsFeed || []).reverse().map(feed => (
                  <div style={{margin: '15px 0'}}>
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
                                border: 'solid #eee 1px',
                                borderRadius: '10px' ,
                                background: 'rgba(0, 0, 0, .15)',
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
                              children={null}
                            />
                          </div>
                        )
                      })}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          {
          }
        </main>
      </div>
    )
  }
}

export default Home;
