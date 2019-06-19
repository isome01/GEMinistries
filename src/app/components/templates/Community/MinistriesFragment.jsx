import React, {Fragment} from 'react'
import Article from "../../presentational/Article/Article.jsx"
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'

const MinistriesFragment = ({getImage}) => (
  <Fragment>
    <br />
    <br />
    <br />
    <h5 className='text-center xioudown-banner'>Ministries for all ages</h5>
    <hr style={{border: 'solid #1e416e 1px'}}/>
    <ul className='col-lg-12 col-md-12'>
      <li className='community-fragment uplifting-inverted'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
          <Article
            width={'100%'}
            header={'Youth Ministry and Prayer'}
            summary={`
              Youth ministry for age groups 4-6, 7-12 and even 13-17 are all welcome.
              More information coming soon! 
            `}
            slice='bisection'
            children={(
              <div className='frag-img-container' style={{maxWidth: 769}}>
                <DynamicImg
                  title='prayers-heard-abroad'
                  dataList={[{
                    path: getImage('https://uploads.weconnect.com/8b30e0780a8fbc9e5f60a6ca0434adb172436eea/ie7d696xgv4ufquduscxpkl7iel.jpg'),
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
          />
        </div>
      </li>
      <li className='community-fragment uplifting'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
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
      <li className='community-fragment uplifting-inverted'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
          <Article
          width={'100%'}
          header={`Adult Ministry`}
          summary={`
             - Beneficiaries: Adult ministries will provide services and resources to women
             and men who are 18 years old or older and live below the federal poverty level.
             
             - Location: About one-half of the services and resources provided by Adult minis
            -try will be provided within the 75212 zip code. The remaining services and resources
            provided by Senior Ministry will be provided in the Dallas/Fort Worth area.
            
             - Fees and Costs: Services and resources of Adult Ministry will be provided free of 
             any fee, cost or charge to the beneficiaries of those services and resources.
  
             - Services and Resources: Services and resources of Adult Ministry will include:
             spiritual development through courses and activities designed to address spiritual
             needs, including evangelism, Bible studies, and teaching on moral and ethical 
             standards and values clarification; courses and activities designed to address needs 
             for emotional stability through support groups and counseling seminars; social
             programs that address needs in the areas of communication skills, interpersonal 
             skills, and positive use of leisure time activities; and vocational training.
          `}
        />
        </div>
      </li>
    </ul>
  </Fragment>
);

export default MinistriesFragment
