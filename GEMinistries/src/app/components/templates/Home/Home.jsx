import React, { Component } from 'react';
import Article from '../../presentational/Article/Article.jsx';
import SlidingCarousel from '../../containers/SlidingCarousel/SlidingCarousel.jsx';
import uriHangar from '../../../uri-hangar/'
import feed from './default'

import './style.css'; //styling


class Home extends Component{
    constructor(){
        super()

        this.state = {
            newsFeed : [],
            fetchAnnouncements: false,
            fetchEvents: false
        }
        this.convertDate = this.convertDate.bind(this)
        this.meridiem = this.meridiem.bind(this)
        this.toggleSummary = this.toggleSummary.bind(this)
    }

    componentWillMount(){
        /* Set some arbitrary variables */
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

    componentDidMount(){
        /* get info from the middleware ... */

        let news_feed = [...feed]

        uriHangar('announcements', 'read', {}).then(
          res => {
              this.setState({
                  newsFeed: (res || []).map((feed, index) => ({
                    header: feed.header,
                    summary: feed.summary,
                    created: feed.created,
                    overflows: feed.summary.length <= 200
                      ? {allowOverflow: true, doesOverflow: false}
                      : {allowOverflow: false, doesOverflow: true},
                    id: `${feed.header}-${index}`
                  })),
                  fetchAnnouncements: true
                })
          },
          err => {
              console.log(err)
              this.setState(()=>({
                  newsFeed : news_feed.slice()
              }));
          }
        )
    }

  toggleSummary = id => {
    const {newsFeed}= this.state
    this.setState({
      newsFeed: newsFeed.map(feed => {
        if (feed.id === id)
          feed.overflows.allowOverflow = !feed.overflows.allowOverflow
        return feed
      })
    })
  }


  meridiem = (hr, min) => hr < 12 ? `${hr}:${min} AM` : `${hr === 12 ? '12' : `${hr - 12}`}:${min} PM`

    convertDate = created => {
      const date = new Date(created)
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      return `${days[date.getDay()]} - ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${this.meridiem(date.getHours(),date.getMinutes())}`
    }

    render(){

        const {newsFeed, fetchAnnouncements} = this.state

        return(
            <div id="home-page" className="home container-fluid">
                <main>
                    <section>
                        <br />
                        <h2 className='text-center' style={{color: 'navy'}}>
                            Living His mission
                        </h2>
                        <SlidingCarousel carousel={feed.carousel} />
                        <br />
                        <br />
                        <h2> Announcements: </h2>
                        {
                            (newsFeed || []).reverse().map(feed => (
                                <div>
                                    <hr style={{border:'solid #eee 2px'}}/>
                                    <p
                                      className='text-left'
                                      style={{color: 'navy'}}
                                    >Posted On:&nbsp;
                                      {this.convertDate(feed.created)}
                                    </p>
                                    <Article
                                        header={feed.header || 'No header.. :/'}
                                        summaryid={feed.id}
                                        summary={
                                          (feed.overflows.allowOverflow
                                            ? feed.summary
                                            : feed.summary.slice(0, 200))
                                          || 'No summary... :/'}
                                        width={'1000px'}
                                        overflows={feed.overflows}
                                        articleLink={this.toggleSummary}
                                    />
                                </div>
                            ))
                        }

                    </section>
                </main>
                <footer>

                </footer>
            </div>
        )
    }
}

export default Home;
