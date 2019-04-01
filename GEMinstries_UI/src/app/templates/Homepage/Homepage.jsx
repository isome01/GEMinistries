import React, { Component } from 'react';
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer.jsx';

import './Homepage.css'; //styling

class Homepage extends Component{


    componentWillMount(){
        /* Set some arbitrary variables */
    }

    componentDidMount(){
    }

    render(){
        return(
            <div id="home_page" class="home">
                <main>
                    <section>
                        <hr style={{border:'solid #eee 2px'}}/>
                        <ArticleContainer />
                        <hr style={{border:'solid #eee 2px'}}/>
                        <ArticleContainer />
                        <hr style={{border:'solid #eee 2px'}}/>
                        <ArticleContainer />
                    </section>
                </main>
                <footer>

                </footer>
            </div>
        )
    }
}

export default Homepage;