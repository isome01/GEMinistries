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
        };
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
              console.log(res)
              this.setState({
                  newsFeed: (res || news_feed).map(feed => ({
                    header: feed.header,
                    summary: feed.summary
                  }))
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
                        <h2> Announcements: </h2>
                        {
                            (newsFeed || []).map(feed => (
                                <div>
                                    <hr style={{border:'solid #eee 2px'}}/>
                                    <Article
                                        header={feed.header || ''}
                                        summary={feed.summary || ''}
                                        width={'1000px'}
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
