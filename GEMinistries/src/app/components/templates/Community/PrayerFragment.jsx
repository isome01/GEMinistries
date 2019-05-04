import React from 'react'
import Article from '../../presentational/Article/Article.jsx'

const PrayerFragment = () => (
    <div>
        <br />
        <br />
        <h5 className='text-center'>Prayer requests</h5>
        <hr style={{border: 'solid navy 1px'}} />
        <ul>
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