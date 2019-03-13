import React, { Component } from 'react';
import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer.jsx';
import NavbarContainer from '../../components/NavbarContainer/NavbarContainer.jsx';

//Image imports
import banner_logo from '../../../assets/GEM_Logo_Navy.png';
import banner_moto from '../../../assets/mission_statement_2.png';

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
                <header>
                    <PageBanner banner_logo={banner_logo} banner_moto={banner_moto}/>
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