import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ProfileCard from '../../presentational/ProfileCard.jsx';
import ProfilePage from '../ProfilePage/ProfilePage.jsx';

import profile_pic_greg from '../../../assets/Greg_Jones.jpg';

import './AboutUspage.css';

class AboutUspage extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        /* Do backend calls for profile data here */
        
    }

    componentDidMount(){

        /* set the state here */
    }

    /* Here we will map routes to their respective profiles. */
    render(){
        return(
            <div>
                <div id="about_us" class="about-us">
                    <header>
                    </header>
                    <main>
                        <h1 className="about-us-header">
                            About Us
                        </h1>
                        <section class="about-us-section">
                            <ProfileCard
                                profile_pic={profile_pic_greg}
                                profile_name='Greg Jones'
                                profile_link={`${this.props.match.url}/Greg_Jones`}
                            />
                            <ProfileCard
                                profile_pic={profile_pic_greg}
                                profile_name='Greg Jones'
                                profile_link={`${this.props.match.url}/Greg_Jones`}
                            />
                        </section>
                    </main>
                    <footer class="about-us-footer">
                    </footer>
                </div>
                <Route path={`${this.props.match.path}/Greg_Jones`} strict component={ProfilePage} />
                {console.log(this.props.match.path)}
            </div>
        );
    }
};

export default AboutUspage;