import React, { Component } from 'react';
import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer.jsx';
import NavbarContainer from '../../components/NavbarContainer/NavbarContainer.jsx';

import './Homepage.css'

class Homepage extends Component{


    componentWillMount(){
        /* Set some arbitrary variables */
    }

    componentDidMount(){

    }

    render(){
        return(
            <div id="home_page" class="home">
                <header>
                    <PageBanner />
                    <NavbarContainer />
                </header>
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