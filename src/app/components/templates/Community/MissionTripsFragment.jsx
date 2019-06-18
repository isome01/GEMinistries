import React from 'React'
import Article from "../../presentational/Article/Article.jsx"

const MissionTripsFragment = () => (
    <div>
        <br />
        <br />
        <h5 className='text-center xioudown-banner'>Mission trips: What we do and where the Lord takes us</h5>
        <hr style={{border: 'solid #1e416e 1px'}}/>
        <ul className='community-fragment'>
            <li>
                <Article
                    width={'100%'}
                    header={'Our trip to Uganda'}
                    summary={`
                        May 4th, 2019 -
                        
                        Summer (2018) was our relatively first mission trip, and by the grace
                        of where ever God takes us next, we shall embark with joy! 
                        
                        Join us as we set sail to another mission abroad (Hopefully this coming summer)
                        and by all means join us in Spirit, by prayer or any support in which you are 
                        moved and guided by the Holy Spirit to perform. 
                        
                        All of what comes our way, in constitution in however we are called to live 
                        "the mission", is a blessing to be a part of - and by the grace of God may we
                        be used to touch the hearts of many.
                    `}
                />
              <hr style={{border: 'solid #eee 1px', width: '80%'}}/>
            </li>
            <li>
                <Article
                    width={'100%'}
                    header={'Serving abroad and around!'}
                    summary={`
                        A conduit of success have we been moved to live this ministry, and by the
                        uniqueness, vastness, and incomprehensible willpower of God are we
                        led to serve all over. 
                        
                        Uganda is not just our focus, though our hearts have been moved and guided 
                        to serve in that country this season.
                        
                        We don't just limit "the mission" to that of what is around the world, but
                        we also take sight of what is here, around us, in America, a country 
                        consistently growing both in a direction of physical progression, yet a 
                        waning glimmer of light in which the Spirit is free to move - though not 
                        a "mission impossible". We serve all in Greg and Earlene ministries and,
                        by movement and discernment of the Spirit, are we ever so blessed to be
                        a part of such a ministry that is privileged in spiritual momentum.
                    `}
                />
              <hr style={{border: 'solid #eee 1px', width: '80%'}}/>
            </li>

            <li>
                <Article
                    width={'100%'}
                    header={'Serve with us!'}
                    summary={`
                        Come and participate with us on our journeys, and for any light of
                        mission trips that are on your heart, do not hesitate to suggest.
                    `}
                />
            </li>
        </ul>
    </div>
)

export default MissionTripsFragment
