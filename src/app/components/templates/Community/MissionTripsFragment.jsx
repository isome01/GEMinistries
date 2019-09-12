import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Article from "../../presentational/Article/Article.jsx"
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'

const MissionTripsFragment = ({getImage}) => (
  <Fragment>
    <br/>
    <br/>
    <br/>
    <h5 className='text-center xioudown-banner'>Mission trips: What we do and where the Lord takes us</h5>
    <hr style={{border: 'solid #1e416e 1px'}}/>
    <ul className='col-lg-12 col-md-12'>
      <li className='community-fragment uplifting-inverted'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
          <Article
            summaryid='missiontrip-2019'
            width='100%'
            header='Our trip to Uganda'
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
            childBefore
            childAfter={false}
            slice='bisection'
            children={(
              <div className='frag-img-container'>
                <DynamicImg
                  title='prayers-for-you'
                  dataList={[{
                    path: 'https://www.geneseo.edu/sites/default/files/styles/news_article/public/sites/news/kroenert1.jpg.jpeg?itok=5_1OH5-p',
                    name: 'prayers-for-you'
                  }]}
                  imageStyle={{
                    margin: 0,
                    display: 'block',
                    width: 600,
                    background: 'none',
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
      <hr style={{border: 'solid #1e416e 1px'}}/>
      <li className='community-fragment uplifting'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
          <Article
            summaryid='serving-abroad'
            width='100%'
            header='Serving abroad and around!'
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
            children={(
              <div className='frag-img-container' style={{maxWidth: 769}}>
                <DynamicImg
                  title='prayers-heard-abroad'
                  dataList={[{
                    path: 'https://www.volunteerforever.com/uploads/editor_uploads/rsz_peace-corps-001.jpg',
                    name: 'prayers-heard-abroad'
                  }]}
                  imageStyle={{
                    width: 600,
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
      <hr style={{border: 'solid #1e416e 1px'}}/>
      <li className='community-fragment uplifting-inverted'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
          <Article
            summaryid='Serve with us!'
            width='100%'
            header='Serve with us!'
            summary={`
              Come and participate with us on our journeys, and for any light of
              mission trips that are on your heart, do not hesitate to suggest.
            `}
            childBefore
            childAfter={false}
            children={(
              <div className='frag-img-container' style={{maxWidth: 769}}>
                <DynamicImg
                  title='serve-with-us'
                  dataList={[{
                    path: 'https://jmubethechange.files.wordpress.com/2013/09/purpleworld.jpg',
                    name: ''
                  }]}
                  imageStyle={{
                    width: 769,
                    margin: 0,
                    display: 'block',
                    background: 'rgba(0, 0, 0, 0)',
                    border: 'solid #1e416e 1px',
                    borderRadius: 10
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
  </Fragment>
)

MissionTripsFragment.propTypes = {
  getImage: PropTypes.func
}

MissionTripsFragment.defaultProps = {
  getImage: () => {}
}

export default MissionTripsFragment
