import React from 'react'
import Article from '../../presentational/Article/Article.jsx'
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'

const PrayerFragment = ({getImage}) => (
  <div>
    <br />
    <br />
    <br />
    <h5 className='text-center xioudown-banner'>Prayer requests</h5>
    <hr style={{border: 'solid #1e416e 1px'}}/>
    <ul className='col-lg-12 col-md-12'>
      <li className='community-fragment uplifting-inverted'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
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
            childBefore
            childAfter={false}
            slice='bisection'
            children={(
              <div className='frag-img-container'>
                <DynamicImg
                  title='prayers-for-you'
                  dataList={[{
                    path: getImage('37161393_10205359654428711_8565820940498239488_n.jpg'),
                    name: 'prayers-for-you'
                  }]}
                  style={{
                    margin: 0,
                    display: 'block',
                    width: 769,
                    background: 'rgba(0, 0, 0, 0)',
                    border: 'solid #1e416e 1px',
                    borderRadius: '10px'
                  }}
                  showTitle={false}
                  showCaption={false}
                />
              </div>
            )}
          />
        </div>
      </li>
      <li className='community-fragment uplifting'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
          <Article
            width='100%'
            header='Prayers heard abroad!'
            summary={`
            If you want to pray for someone but don't know how to make that approach,
            we humbly encourage you to submit your thoughts to us, and we can pray 
            for them. 
            
            Our lives are a ministry, and it is never a burden of ours to help you serve
            the kingdom and our Lord and Savior, whether that be through service in 
            Spirit or interceding for others; we can help you. 
            
            Allow us to serve you in that.
          `}
            children={(
              <div className='frag-img-container' style={{maxWidth: 769}}>
                <DynamicImg
                  title='prayers-heard-abroad'
                  dataList={[{
                    path: getImage('37588589_10155221650800834_5980536509919395840_n.jpg'),
                    name: 'prayers-heard-abroad'
                  }]}
                  style={{
                    width: 769,
                    margin: 0,
                    display: 'block',
                    background: 'rgba(0, 0, 0, 0)',
                    border: 'solid #1e416e 1px',
                    borderRadius: '10px'
                  }}
                  showTitle={false}
                  showCaption={false}
                />
              </div>
            )}
            slice='bisection'
          />
        </div>
      </li>
    </ul>
  </div>
)

export default PrayerFragment
