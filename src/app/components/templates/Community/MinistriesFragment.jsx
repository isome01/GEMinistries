import React, {Fragment} from 'react'
import Article from "../../presentational/Article/Article.jsx"
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'
import PropTypes from 'prop-types'

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
            width='100%'
            header='Youth Ministry'
            summaryid='Youth Ministry'
            summary={`
            
              Beneficiaries: The Youth Ministry will provide services and resources to boys and girls from age five to eighteen who are from families with no or low income living below the federal poverty level.
              
              Location: About one-half of the Youth Ministry services will be provided within the 75212 zip code.   The remaining Youth Ministry services and resources will be provided in the Dallas/Fort Worth area.
              
              Fees and Costs: Services and resources of the Youth Ministry will be provided free of any fee, cost, or charge to the beneficiaries of those services and resources.
              Services and Resources: Services and resources of the Youth Ministry will include: Christian ministry and counseling; social services (such as recreation, communication, and
              ref: Greg and Earlene Ministry Outreach  EIN: 83-2883768
              interpersonal skills); youth camps; Bible studies; preparation for employment; tutoring and after school homework assistance.
            `}
            slice='whole'
            childBefore
            children={(
              <div className='frag-img-container' style={{maxWidth: 769}}>
                <DynamicImg
                  title='prayers-heard-abroad'
                  dataList={[{
                    path: getImage('37161393_10205359654428711_8565820940498239488_n.jpg'),
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
          />
        </div>
      </li>
      <hr style={{border: 'solid #1e416e 1px'}}/>
      <li className='community-fragment uplifting'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
          <Article
            summaryid='adult-ministry'
            width='100%'
            header='Adult Ministry'
            summary={
              (<Fragment>
                <div>
                  <h5> - Beneficiaries:</h5>
                  <p>Adult Ministry will provide services and resources to women and men who are eighteen years old or older and live below the federal poverty level.</p>
                </div>
                <div>
                  <h5> - Location: </h5>
                  <p>About one-half of the services and resources provided by Adult  Ministry will be provided within the 75212 zip code.  The remaining services and resources provided by Senior Ministry will be provided in the Dallas/Fort Worth area.</p>
                </div>
                <div>
                  <h5> - Fees and Costs: </h5>
                  <p>Services and resources of Adult Ministry will be provided free of any fee, cost, or charge to the beneficiaries of those services and resources.</p>
                </div>
                <div>
                  <h5> - Services and Resources: </h5>
                  <p>Services and resources of Adult Ministry will include: spiritual development through courses and activities designed to address spiritual needs, including evangelism, Bible studies, and teaching on moral and ethical standards and values clarification; courses and activities designed to address needs for emotional stability through support groups and counseling seminars; social programs that address needs in the areas of communication skills, interpersonal skills, and positive use of leisure time activities; and vocational training.</p>
                </div>
              </Fragment>)
            }
            slice='bisection'
            children={(
              <DynamicImg
                title='Family Ministry'
                dataList={[{
                  path: 'http://southbrookleyumc.org/wp-content/uploads/2018/03/AdultMinistriesWEB.jpg',
                  name: 'adult-ministry'
                }]}
                imageStyle={{
                  margin: 0,
                  display: 'block',
                  width: 600,
                  background: 'rgba(0, 0, 0, 0)',
                  border: 'solid #1e416e 1px',
                  borderRadius: '10px'
                }}
                showTitle={false}
                showCaption={false}
              />
            )}
          />
        </div>
      </li>
      <hr style={{border: 'solid #1e416e 1px'}}/>
      <li className='community-fragment uplifting-inverted'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
          <Article
            summaryid='Family Services'
            width='100%'
            header='Family Services'
            summary={(
              <Fragment>
                <div>
                  <h5>- Beneficiaries: </h5>
                  <p>Family Services will provide services and resources to families
                    that live below the federal poverty level.</p>
                </div>
                <div>
                  <h5>- Location:</h5>
                  <p>About one-half of the services and resources provided by Family Services will be
                    provided within the 75212 zip code.  The remaining services and resources provided
                    by Family Services will be provided in the Dallas/Fort Worth area.</p>
                </div>
                <div>
                  <h5>- Fees and Costs:</h5>
                  <p>Services and resources of Family Services will be provided free of any fee, cost,
                    or charge to the beneficiaries of those services and resources.</p>
                </div>
                <div>
                  <h5>- Services and Resources:</h5>
                  <p>Services and resources of Family Services will include:  resources to help stabilize
                    home living; food supplements to help meet nutritional needs;  vocational training to
                    aid family members attending school or seeking employment; assistance in obtaining
                    temporary housing in emergency situations; financial planning; family counseling
                    ministry;women and men outreach ministry.</p>
                </div>
              </Fragment>
            )}
            slice='bisection'
            children={(
              <div>
                <DynamicImg
                  title='Family Ministry'
                  dataList={[{
                    path: 'http://southbrookleyumc.org/wp-content/uploads/2018/03/AdultMinistriesWEB.jpg',
                    name: 'family-ministry'
                  }]}
                  imageStyle={{
                    margin: 0,
                    display: 'block',
                    width: 600,
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
      <hr style={{border: 'solid #1e416e 1px'}}/>
      <li className='community-fragment uplifting'>
        <div className='pallet offset-lg-1 col-lg-10 offset-lg-1 offset-md-1 col-md-10 offset-md-1'>
          <Article
            summaryid='Senior Ministry'
            width='100%'
            header={`Senior Ministry`}
            summary={(
              <Fragment>
                <div>
                  <h5> - Beneficiaries:</h5>
                  <p>Senior Ministry will provide services and resources (A) to women and men who (1) are fifty years of age or older, (2) have special needs, and (3) live below the federal poverty level and (B) to women and men who (1) are sixty-five years of age or older and (2) live below the federal poverty level.</p>
                </div>
                <div>
                  <h5> - Location:</h5>
                  <p>About one-half of the services and resources provided by Senior Ministry will be provided within the 75212 zip code.  The remaining services and resources provided by Senior Ministry will be provided in the Dallas/Fort Worth area.</p>
                </div>
                <div>
                  <h5> - Fees and Costs:</h5>
                  <p>Services and resources of Senior Ministry will be provided free of any fee, cost, or charge to the beneficiaries of those services and resources.</p>
                </div>
                <div>
                  <h5> - Services and Resources: </h5>
                  <p>Services and resources of Senior Ministry will include: mentoring and counseling; services designed to address age related emotional needs; age appropriate social services designed to encourage active participation in activities and opportunities that build selfworth; spiritual development through Bible studies, and teaching on morals, ethics, and value clarification.</p>
                </div>
              </Fragment>
            )}
            childBefore
            childAfter={false}
            slice='bisection'
            children={(
              <div className='frag-img-container'>
                <DynamicImg
                  title='young-adults-ministry'
                  dataList={[{
                    path: 'https://uploads.weconnect.com/8b30e0780a8fbc9e5f60a6ca0434adb172436eea/ie7d696xgv4ufquduscxpkl7iel.jpg',
                    name: 'prayers-for-you'
                  }]}
                  imageStyle={{
                    margin: 0,
                    display: 'block',
                    width: 600,
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
    </ul>
  </Fragment>
)


MinistriesFragment.propTypes = {
  getImage: PropTypes.func
}

MinistriesFragment.defaultProps = {
  getImage: () => {}
}

export default MinistriesFragment
