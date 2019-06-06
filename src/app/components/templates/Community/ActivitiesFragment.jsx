import React from 'react'
import Article from "../../presentational/Article/Article.jsx";

const ActivitiesFragment = () => (
    <div className='text-center'>
        <br />
        <br />
        <h5 className='text-center'>Activities we participate in!</h5>
        <hr style={{border: 'solid #1e416e 1px'}}/>
        <Article
            width={'100%'}
            header={'Activities Coming Soon!'}
            summary={`
                (Activities will soon come to be once appropriate funding
                can take place. Please bear with us!)
            `}
        />
    </div>
)

export default ActivitiesFragment
