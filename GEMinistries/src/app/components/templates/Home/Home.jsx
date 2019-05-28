import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Announcement from '../../containers/Announcement/Announcement.jsx'
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'
import PageLoader from '../../presentational/Loaders/PageLoader.jsx'
import feed from './default'
import './style.css'

class Home extends Component{
  static propTypes = {
    getImage: PropTypes.func,
    uriHangar: PropTypes.func
  }
  constructor () {
      super()
      this.state = {
          newsFeed : [],
          fetchAnnouncements: false,
          fetchEvents: false
      }
      this.convertDate = this.convertDate.bind(this)
      this.meridiem = this.meridiem.bind(this)
  }

  componentWillMount () {
    /* Set some arbitrary variables */
    const {uriHangar} = this.props
    let announcements = window.sessionStorage.getItem('announcements')

    if (!announcements){
      uriHangar('announcements', 'read', {}).then(
        message => {
          console.log(message)
          this.setState({fetchAnnouncements: true})
          window.sessionStorage.setItem('announcements', 'true')
        },
        err => console.log(err)
      )
    }
  }

  componentDidMount () {
    /* get info from the uri hangar ... */
    let news_feed = [...feed]
    const {uriHangar, fetchAnnouncements} = this.props
    if (!fetchAnnouncements) {
      uriHangar('announcements', 'read', {}).then(
        res => {
          this.setState({
            newsFeed: (res || []).map((feed, index) => ({
              header: feed.header,
              summary: feed.summary,
              attachment: feed.attachment,
              created: feed.created
        })),
            fetchAnnouncements: true
          })
        },
        err => {
          console.log(err)
          this.setState(()=>({
            newsFeed : news_feed.slice()
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
    const {newsFeed, fetchAnnouncements} = this.state
    const {getImage} = this.props
    if (!fetchAnnouncements) {
      return (
        <div className='container'>
          <div className='text-center' style={{position: 'center'}}>
            <PageLoader/>
          </div>
        </div>
      )
    }

    return(
      <div id="home-page" className="home container-fluid">
        <main>
          <section>
            <br />
            <h2 className='text-center' style={{color: 'navy'}}>
                Living His mission
            </h2>
            <div>
              <DynamicImg
                title={'Mission2018'}
                className='text-center'
                style={({
                  border: 'solid navy 1px',
                  height: '600px'
                })}
                dataList={[
                  {
                    name: 'Mission Trip Summer 2019',
                    caption: 'Carrying out His mission',
                    path: `${getImage('37553541_10155221685005834_2978869568522420224_n.jpg')}`
                  }, {
                    name: 'Mission Trip Summer 2019',
                    caption: 'Carrying out His mission',
                    path: `${getImage('37229110_10156750315657859_5542478179626647552_n.jpg')}`
                  }, {
                    name: 'Mission Trip Summer 2019',
                    caption: 'Carrying out His mission',
                    path: `${getImage('37582402_10155221650790834_491459642958807040_n.jpg')}`
                  }
                ]}
              />
            </div>
            <br />
            <br />
            <h2> Announcements: </h2>
            {(newsFeed || []).reverse().map(feed => (
              <div>
                <hr style={{border:'solid #000080 1px'}}/>
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
                      <div style={{height:'370px', width: '370px', display: 'inline-block'}}>
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
