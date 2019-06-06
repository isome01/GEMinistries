import React, { Component } from 'react';

import Article from '../../presentational/Article/Article.jsx';

import './style.css';

/* stateful page component */
class Profile extends Component {

    constructor(props){
        super(props);

        this.state = {

        };
    }

    componentWillMount(){

    }

    componentDidMount(){
        /* if there were any callbacks, call em */
        //in this case, a profile is accessed and we want it to render
       this.props.onLoadFunction(true)
    }

    componentWillUnmount(){
       this.props.onLoadFunction()
    }

    render() {
        /*
            {this.props.params}
            {this.props.match.url}
        */
        return (
          <div className="profile-page">
              <main>
                  <section className="profile-specs">
                      <div>
                          <img src={this.props.profile_image} alt="profile image"/>
                      </div>
                      <ul>
                          <li>Name: {this.props.profile_name}</li>
                          <li>Role: {this.props.profile_occupation}</li>
                          <br/>
                          <ul>
                              <h5>Contact:</h5>
                              <li>{this.props.phone || '(No phone number avialable)'}</li>
                              <li>{this.props.email || '(No email available)'}</li>
                          </ul>
                      </ul>
                  </section>
                  <section>
                      <Article
                        header={`About ${this.props.profile_name}:`}
                        summary={this.props.profile_bio}
                        width={'100%'}
                      />
                  </section>
              </main>
          </div>
        );
    }
};

export default Profile;
