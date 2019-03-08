import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PageBanner.css';

class PageBanner extends Component {

    render(){
        return(
            <div id="page_banner" class="page-banner">
                <div class="banner-header">
                    <h1>Hello Greg and Earlene Ministries. :D</h1>
                    <p> The Lord is on your side. </p>    
                </div>
            </div>
        )
    }
}

export default PageBanner;