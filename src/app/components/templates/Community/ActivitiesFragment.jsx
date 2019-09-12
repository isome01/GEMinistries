import React from 'react'
import Article from "../../presentational/Article/Article.jsx";
import PropTypes from 'prop-types'

const ActivitiesFragment = ({getImage}) => (
  <div className='text-center'>
    <br/>
    <br/>
    <h5 className='text-center xioudown-banner'>Activities we participate in!</h5>
    <hr style={{border: 'solid #1e416e 1px'}}/>
    <div className='offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
      <Article
        summaryid='coming-soon'
        width={'100%'}
        header={'Activities Coming Soon!'}
        summary={`
          (Activities will soon come to be once appropriate funding
          can take place. Please bear with us!)
        `}
      />
    </div>
  </div>
)


ActivitiesFragment.propTypes = {
  getImage: PropTypes.func
}

ActivitiesFragment.defaultProps = {
  getImage: () => {}
}

export default ActivitiesFragment
