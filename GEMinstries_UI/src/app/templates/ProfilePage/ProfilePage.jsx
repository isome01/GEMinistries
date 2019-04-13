import React, { Component } from 'react';

import ArticleContainer from '../../components/ArticleContainer/ArticleContainer.jsx';

import './ProfilePage.css';

/* stateful page component */
class ProfilePage extends Component{

    constructor(props){
        super(props);

        this.state = {

        };
    }

    componentWillMount(){
         
    }

    componentDidMount(){
        /* if there were any callbacks, call em */
        console.log('mounting profile page');
        //in this case, a profile is accessed and we want it to render
       this.props.onLoadFunction(true);
    }

    componentWillUnmount(){
        console.log('Unmouting profile page');
       this.props.onLoadFunction();
    }

    render(){
        /*
            {this.props.params}
            {this.props.match.url}
        */
        return(
            <div className="profile-page">
                <header></header>
                <main>
                    <section className>
                        <img src={this.props.profile_image} alt="profile image"/>
                        <ol>
                            <li>Name: {this.props.profile_name}</li>
                            <li>  {this.props.profile_occupation}</li>
                        </ol>
                    </section>
                    <section>
                        <ArticleContainer 
                            article_header={`About ${this.props.profile_name}:`}
                            article_summary={this.props.profile_bio} 
                            article_width={'100%'}
                        />
                    </section>
                </main>
                <footer></footer>
            </div>
        );
    }
};

export default ProfilePage;