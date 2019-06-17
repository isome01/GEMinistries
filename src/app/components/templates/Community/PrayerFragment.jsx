import React from 'react'
import Article from '../../presentational/Article/Article.jsx'

const PrayerFragment = () => (
    <div>
        <br />
        <br />
        <h5 className='text-center xioudown-banner'>Prayer requests</h5>
        <hr style={{border: 'solid #1e416e 1px'}} />
        <ul className='community-fragment offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
            <li>
                <Article
                    header={'Prayers for you'}
                    width='100%'
                    summary={
                        `Submit a prayer request and let us intercede with you.
                         
                         For life is a war not meant for you take on and fight alone, but for 
                         the Lord to walk you to the victory. 
                         
                         Let us pray for whatever you need; we personally take time to read 
                         these prayer requests on a daily basis.
                        `
                    }
                />
              <hr style={{border: 'solid #eee 1px', width: '80%'}}/>
            </li>
            <li>
                <Article
                    width='100%'
                    header={'Prayers heard abroad!'}
                    summary={`
                        If you want to pray for someone but don't know how to make that approach,
                        we humbly encourage you to submit your thoughts to us, and we can pray 
                        for them. 
                        
                        Our lives are a ministry, and it is never a burden of ours to help you serve
                        the kingdom and our Lord and Savior, whether that be through service in 
                        Spirit or interceding for others; we can help you. 
                        
                        Allow us to serve you in that.
                    `}
                />
            </li>
        </ul>
    </div>
)

export default PrayerFragment
