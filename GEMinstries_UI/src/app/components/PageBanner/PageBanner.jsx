import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PageBanner.css';

class PageBanner extends Component {

    render(){
        return(
            <div id="page_banner" class="page-banner">
                <div class="banner-header">
                    <img alt="Page_Banner_Logo" src={this.props.banner_logo} style={{display:'inline-block',width:'20%',height:'197px', maxWidth:'100%' }}/>
                    <img alt="Page_Banner_Moto" src={this.props.banner_moto} style={{display:'inline-block',width:'80%',height:'197px', maxWidth:'100%'}}/>  
                </div>
            </div>
        )
    }
}

export default PageBanner;