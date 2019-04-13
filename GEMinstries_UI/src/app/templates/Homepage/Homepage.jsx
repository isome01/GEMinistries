import React, { Component } from 'react';
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer.jsx';
import SlidingCarousel from '../../components/SlidingCarousel/SlidingCarousel.jsx';

import './Homepage.css'; //styling


class Homepage extends Component{


    constructor(){
        super();

        this.state = {
            news_feed : []
        };
    }

    componentWillMount(){
        /* Set some arbitrary variables */

    }

    componentDidMount(){
        /* get info from the server ... */

        let news_feed = [
            {article:'', carousel:''},
            {article:'', carousel:''},
            {article:'', carousel:''},
        ];

        this.setState(()=>({
            news_feed : news_feed.slice()
        }));
    }

    render(){

        const news_feed = this.state.news_feed.slice();

        return(
            <div id="home_page" class="home">
                <main>
                    <section>
                        {
                            news_feed.map(feed=>(
                                <div>
                                    <hr style={{border:'solid #eee 2px'}}/>
                                    <ArticleContainer article_feed={feed.article} />
                                    <SlidingCarousel carousel={feed.carousel} />
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

export default Homepage;