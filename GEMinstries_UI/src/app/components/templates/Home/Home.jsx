import React, { Component } from 'react';
import Article from '../../presentational/Article/Article.jsx';
import SlidingCarousel from '../../containers/SlidingCarousel/SlidingCarousel.jsx';

import './style.css'; //styling


class Home extends Component{


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
            {article: {
                summary : `Dear Ministry Friends,
                       I am excited to share with you that Earlene and I will be travelling to Uganda on a mission trip once again this summer!
                       
                       Our trip last summer was life changing, and we know that God is calling us to return and continue showing love and sharing Jesus. We will once again be working with a team of doctors
                       and nurses at a partner clinic to assist in medical care, provide counseling and ultrasounds to pregnant young women, as well as education/teaching. Also, we will be sharing the gospel 
                       door to door with partner churches, working with children in schools (Including those in the GO Overflow sponsorship program), feeding homeless youth in the Kampala slums, praying 
                       with families for healing, and working at the newly-established "Hummingbird House" - a transitional home for girls living as orphans and in prostitution. These are just a few of the 
                       exciting opportunities we will have to share and show the love Christ. As you can imagine, Earlene and I are excited to play even a small role in this mission. We see this as an 
                       international expression of our local call to bridge builders and ministers of reconciliation to Christ.
                       
                       I would like to invite my friends and family to participate in our work. First and most importantly, through prayer support. Secondly, please consider helping us reach our financial goal
                       for the trip by donating to GO Overflow Ministries. The total expenses for the ten-day mission are $10,000. Your gift of any amount $50, $100, $250, or $1000 is tax-deductible and will 
                       help cover our direct costs, medical supplies, medications, school supplies, evangelism materials, and Uganda Bibles.
                       
                       Thank you for considering joining our GO Team as a local member. Prior to our departure, we will share specific prayer requests for the mission. When we return, we will share photos and
                       details of GOD's MIRACLES that will be accomplished on our trip.
                       We can't wait to GO and serve!
                       
                       Babies are no longer being born in the slums. They are receiving care at Latter Glory Medical Clinic, and their mothers are being freed from prostitution and poverty. We will empower
                       the poor and restore the broken hearted through the power of Jesus Christ and the support of GO teammates like YOU!!! Our deposi is due April 1, so please pray and give us as the Lord
                       leads.
                       
                       "One group is motivated by pure love, knowing that I am defending the Message, wanting to help.
                        - Philippians 1:16"

                        Blessings,

                        Greg and Earlene Jones
                       `,
                    header: 'GO (Grace and Obience Overflow Ministries)'

                },
                carousel:''
            },
            /*
            {article:{}, carousel:''},
            {article:{}, carousel:''},*/
        ];

        this.setState(()=>({
            news_feed : news_feed.slice()
        }));
    }

    render(){

        const news_feed = this.state.news_feed.slice();

        return(
            <div id="home_page" className="home">
                <main>
                    <section>
                        <br />
                        <h2> Announcements: </h2>
                        {
                            news_feed.map(feed=>(
                                <div>
                                    <hr style={{border:'solid #eee 2px'}}/>
                                    <Article
                                        article_header={feed.article.header || ''}
                                        article_summary={feed.article.summary || ''}
                                        article_width={'1000px'}
                                    />
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

export default Home;
