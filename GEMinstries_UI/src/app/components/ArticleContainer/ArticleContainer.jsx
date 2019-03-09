import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ArticleContainer.css';

class ArticleContainer extends Component {
    render(){
        return(
            <article id=""> 
                <hr/>
                <div className="article-summary">
                    <h4>Article Header</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet vestibulum ligula quis gravida. Donec sed tortor sit amet quam pharetra blandit suscipit aliquam ipsum. Aliquam ut hendrerit arcu. Ut porttitor magna ipsum, ac cursus urna imperdiet quis. Donec facilisis libero a risus convallis, elementum luctus urna efficitur. Praesent ut tellus at erat dapibus luctus vel non nisl. Cras volutpat nulla feugiat vestibulum egestas. Integer porttitor auctor arcu, sed varius est. Curabitur id vulputate nunc. Suspendisse non justo vitae ipsum auctor porttitor. Ut cursus felis sed nunc dignissim consectetur. Suspendisse at urna sed odio rutrum euismod sit amet sed risus. Vivamus bibendum eros lacus, nec auctor lectus laoreet non. Etiam pellentesque eget dolor eu efficitur.   
                        Nulla non nulla urna. Nulla ultricies ante velit, ac laoreet justo varius vel. Aliquam egestas sapien ligula, vel pulvinar elit pulvinar ullamcorper. Aenean maximus eros est, vel cursus felis pharetra eget. Fusce non vestibulum orci. Proin at nulla sapien. Vivamus ante est, consequat ut urna sit amet, tincidunt efficitur erat. Mauris iaculis velit in luctus pulvinar. Donec at sodales odio. Maecenas eget metus justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut nibh eros, luctus ut dolor in, commodo pulvinar felis. Sed eu diam eu turpis aliquam tempor. Aliquam eget mi arcu. Sed elementum tortor non tortor ultricies, id pharetra nisi eleifend. Praesent tincidunt scelerisque nulla quis congue.
                    </p>
                    <a href="#"> Example Link... </a>
                </div>

                <div className="article-slide-container carousel slide" data-ride="carousel">
                    {/*<!-- Indicators -->*/}
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    
                    {/**/}
                    <div className="carousel-inner" style={{border:"solid navy 2px"}}>
                        <div className="carousel-item active">
                            <img src="https://www.geneseo.edu/sites/default/files/styles/news_article/public/sites/news/Kroenert-senegal-peace-corps.jpg.jpeg?itok=Myk8IOz7" alt="Los Angeles" width="" height="" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://ucsdnews.ucsd.edu/news_uploads/Peace-Corps-160219.jpg" alt="Chicago" width="" height="" />
                        </div>
                        <div className="carousel-item">
                        <img src="https://www.experiencegla.com/media/uploads/high-school-peace-corps.jpg" alt="New York" width="" height="" />
                        </div>
                    </div>
                    {/* Left and Right controls */}
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </article>
        );
    }
};

export default ArticleContainer;