import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from '../../presentational/Article/Article.jsx'
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'
import './style.css';

/* stateful page component */
class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {

  }

  componentDidMount() {
    /* if there were any callbacks, call em */
    //in this case, a profile is accessed and we want it to render
    this.props.onLoadFunction(true)
  }

  componentWillUnmount() {
    this.props.onLoadFunction()
  }

  render() {
    const {profile_image, profile_name, profile_occupation, profile_bio, email, phone} = this.props
    /*
        {this.props.params}
        {this.props.match.url}
    */
    return (
      <div className='profile-page container-fluid'>
        <section className='row profile-specs'>
          <div className='col-md-6 col-sm-8'>
            <DynamicImg
              title={profile_name}
              dataList={[{
                path: profile_image,
                name: 'profile_image'
              }]}
              imageStyle={{
                borderRadius: 15
              }}
              showCaption={false}
              showTitle={false}
            />
          </div>
          <div className='col-md-5 offset-md-1 profile-contact-section'>
            <ul className=''>
              <li>Name: {profile_name}</li>
              <li>Role: {profile_occupation}</li>
              <br/>
              <ul>
                <h5>Contact:</h5>
                <li>{phone || '(No phone number avialable)'}</li>
                <li>{email || '(No email available)'}</li>
              </ul>
            </ul>
          </div>
        </section>
        <section>
          <Article
            header={`About ${profile_name}:`}
            summary={profile_bio}
            width='100%'
          />
        </section>
      </div>
    )
  }
}

export default Profile;

