import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Profile from '../Profile/Profile.jsx'
import profile_pic_greg from '../../../../assets/Greg_Jones.jpg'
import profile_pic_earlene from '../../../../assets/Earlene.jpg'
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'
import './style.css'

class AboutUs extends Component{
  static PropTypes = {
    getImage: PropTypes.func
  }
  static defaultProps = {
    getImage: () => {}
  }
  constructor (props){
    super(props)
      this.state = {
        hide_page: false, //by default show this page.
        directors: []
      }
      this.shouldPageRender.bind(this)
    }

  componentWillMount () {
    /* Do backend calls for profile data here */
  }

  componentDidMount () {
  }

  /* This method will return whether a specific profile is accessed or not */
  profileIsAccessed(flag = false) {
    /* set the state here */
    this.setState(() =>
      ({hide_page: flag}) /* Hide current rendering */
    )
  }

  shouldPageRender = () => {
    const {hide_page} = this.state
    const {getImage} = this.props

    if (!hide_page) {
      return (
        <div id="about_us" className="about-us">
          <header className='container-fluid'>
            <h1 className="about-us-header">
              About Us
              <hr style={{border: 'solid #1e416e 2px', borderRadius: '5px',}}/>
            </h1>
            <h5 className='container'>
              <i style={{color: '#1e416e'}}>
                We thank all our friends and family for your support and prayers.
                <br/>
                With the Lord, and you, we are GEM.
                <br/>
                <i style={{color: '#1e416e'}}>Sincerely,</i><br/>
                &nbsp;- Greg & Earlene Jones
              </i>
            </h5>
          </header>
          <main className='container-fluid'>
            <section className="about-us-section row">
              <h3 className='text-left'>Directors</h3>
              <hr style={{border: 'solid #1e416e 1px', borderRadius: '5px', width: '80%'}}/>
              <br/>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-3 about-us-profile'>
                    <a href={`${this.props.match.url}/Greg_Jones`}>
                      <DynamicImg
                        title='Greg Jones'
                        dataList={[{
                          path: profile_pic_greg,
                          name: 'Greg-Jones'
                        }]}
                        showCaption={false}
                        showOverlay={false}
                        showTitle
                        imageStyle={{
                          borderRadius: 20,
                          backgroundColor: 'rgba(0, 0, 0, .55)',
                          height: 275
                        }}
                      />
                    </a>
                  </div>
                  <div className='col-md-3 about-us-profile'>
                    <a href={`${this.props.match.url}/Earlene_Jones`}>
                      <DynamicImg
                        title='Earlene Jones'
                        dataList={[{
                          path: profile_pic_earlene,
                          name: 'Earlene-Jones'
                        }]}
                        showCaption={false}
                        showOverlay={false}
                        showTitle
                        imageStyle={{
                          border: 'solid #def 1px',
                          borderRadius: 20,
                          backgroundColor: 'rgba(0, 0, 0, .55)',
                          height: 275
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className='about-us-section row'>
              <h3 className='text-left'>Co-Directors</h3>
              <hr style={{border: 'solid #1e416e 1px', width: '80%', borderRadius: '5px',}}/>
              <br/>
            </section>
          </main>
        </div>
      )
    }
    return null;
  }
  /* Here we will map routes to their respective profiles. */
  render () {

    let profiles = [{
        route : 'Greg_Jones',
        profile_image:profile_pic_greg,
        occupation: 'Director',
        name : 'Greg Jones',
        phone: '214-629-0158',
        email: 'Gdjones51@aol.com',
        bio : `I am Greg Jones, a follower of Jesus Christ, my Lord and Savior. I wish I could proclaim this relationship from my birth, but the truth is I was a sinner, without hope.

        Although I learned of Christ at the early age of 7, I grew up living without a plan or purpose. The story of his sacrifices had not yet taken over my life. Any problems that came my way, I fixed myself. I believed that all my successes were my own; I was a proud man, and I continued to turn to the world to provide me with the happiness I sought. This worked for a long time until I was getting ready to leave college. I wasn't aware that I was a train wreck just waiting to happen until then. I crash landed on a pathway straight to hell and I did not know how to stop.

        I hit rock bottom and went through many trials and tribulations, experiencing much hurt and pain. Going through this time I was a sheep without a shepherd. I began to lean on the truths I had learned at a young age and knew I had to trust someone. So I began to call on a God that I barely knew. The Holy Spirit began to work in my heart and led me to the West Dallas community. It was there that I met my dear friend and now Pastor and spiritual mentor, Arrvel Wilson and his wife, Eletha. I began pouring out my heart to him, and he'd just listen. At the end, he just said, "Let's pray." During that session, I asked God for forgiveness and dedicated my life to serving Him.

        Soon after, I shared with my wife what happened and together we began a process of spiritual reconciliation with the center of our lives given to Jesus Christ. My wife, Earlene, and I have been together since 1971 and are now enjoying over 40 years of marriage. The one thing God did immediately was set us free as one in Christ in His unity. We now are a model to our family: our daughter Kim, and three grandsons, Nathaniel, Noah, and Nehemiah.

        God had a plan for me and He just patiently waited for me to answer His call to service for Kingdom building. I begin serving as a volunteer at West Dallas Community Church and have never looked back. I later accepted the responsibility of Outreach Director and have been serving in this position for the past 20 years. I am currently the Senior Deacon and serve in numerous ministries as we forge to make an impact in West Dallas and beyond to continue to build Christ's Kingdom. I am a missionary for Jesus Christ for HIS service to bring all glory to GOD.`
    },{
        route: 'Earlene_Jones',
        profile_image:profile_pic_earlene,
        occupation: 'Director',
        name : 'Earlene Jones',
        bio : `Earlene Jones was not always a follower of Jesus Christ. I came to accept Him as a child of age 9 was baptized but did not really understand what I had done. But I did not have a personal relationship with Jesus till later in my life.  My father died when I was 10 years old and I was angry because I did not understand why. My mom always took us to church so I was churched all my life. My mom raised my four brothers and I she taught us the word and right from wrong. I was a good person and attend church and served in church to be with my friends to fill the void of loosing of my dad.
        We all graduated high school and my brothers went on to college, I chose to take some class but did not graduate from college as they did. I moved to Albuquerque, New Mexico after high school  and work at the University of New Mexico and took an occasionally class, still attended church  and felt that I was okay because I was working in the  church. But I knew something was missing. I did not have a close relationship with Jesus until my late 20’s. God placed a mentor in my life that walked with me and helped me understand what my mom had been living out before us and teaching us all our life. It is so true that train a child up in the word they may depart but they will come back. I did experience things in the world and kept coming back to feeling lost, hopeless and still in need of a Savior. I knew I needed a personal relationship to experience true salvation.
         I met Greg Jones in 1971 we both had been raised in church and knew from some of our life choices we were experiencing God’s grace and mercy. Through many trials and lots of pain I came into my right relationship with Jesus and knew that God had a calling on my life, We  raised our daughter up  the word and now have been called to raise our grandsons up to fear and reverence Him. We have learned unconditional love through the trails of parenting our grown daughter. God has used our past and pains to minister to others.
        Earlene Jones is a woman on a mission called by God to minister hope, help and healing to the hurting and the lost. I love the Lord and serve Him with my whole heart. My relationship continues to grow as I serve on the mission field. God has grown me to be a prayer warrior and servant for I humbly submit myself to the Lord daily rendering my heart to Him for correction and direction.
         We came to West Dallas Community Church, Arrvel Wilson the Pastor. I continue to grow under the leading of the Holy Spirit and Pastor Wilson’s leadership. I have grown as a woman of God under Mrs. Wilson’s leadership also. I am a woman of God with strong convictions. I boldy and compassionately speak God’s truth and desire everyone I meet to know Jesus Christ and the pardon of their sins. I feel called to minister to all walks of life and God has chosen me to do that at Dallas Pregnancy Resource Center and my church. I serve with Greg my husband and our ministries join us together even closer as one.
        The result of having a personal relationship with Jesus Christ is knowing my desire is to please only the Lord and serve Him with my body, mind and soul. I love and fear the Lord and depend strongly on the leading and guiding of the Holy Spirit. I am sure of my calling I know that know that when people spend time with you they should be challenged when they leave you to be different, because the Spirit of the Lord is surrounding you.
        `,
        email: 'earlmwhite@gmail.com'
    }]

    return (
      <div>
        {this.shouldPageRender()}
        <Switch>
          {profiles.map(profile => (
            <Route
              path={`${this.props.match.path}/${profile.route}`}
              render={() => <Profile
                profile_image={profile.profile_image}
                profile_name={profile.name}
                profile_occupation={profile.occupation}
                profile_bio={profile.bio}
                onLoadFunction={this.profileIsAccessed.bind(this)}
                phone={profile.phone}
                email={profile.email}
              />} exact/>
            )
          )}
          {/* <Route path={`${this.props.match.path/:profile}`} render */}
          <Redirect to={`${this.props.match.url}`}/>
        </Switch>
      </div>
    )
  }
}

export default AboutUs
