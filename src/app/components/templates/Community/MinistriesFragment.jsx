import React from 'react'
import Article from "../../presentational/Article/Article.jsx";

const MinistriesFragment = () => (
    <div>
        <br />
        <br />
        <h5 className='text-center'>Ministries for all ages</h5>
        <hr style={{border: 'solid #1e416e 1px'}}/>
        <ul>
            <li>
                <Article
                    width={'100%'}
                    header={'Youth Ministry and Prayer'}
                    summary={`
                        Youth ministry for age groups 4-6, 7-12 and even 13-17 are all welcome.
                        More information coming soon! 
                    `}
                />
                <hr style={{border: 'solid #eee 1px', width: '80%'}}/>
            </li>
            <li>
                <Article
                    width={'100%'}
                    header={`Young Adult Bible Study (Ages 18-25)`}
                    summary={`
                        Bible study is hosted (via our home) around 6:30 PM CST for all young adults;
                        be no stranger as we welcome all to come, no matter who you are or where
                        you come from. 
                        
                        We strive to minister the way the Jesus ministered to flocks of people,
                        and it's a prodigious opportunity to serve the youth, in that we all serve
                        our great and humble King!
                    `}
                />
            </li>
        </ul>
    </div>
)

export default MinistriesFragment
