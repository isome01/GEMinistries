import React, {Component} from 'react';
import './SlidingCarousel.css'

const SlidingCarousel = () => (
    <div className="article-slide-container carousel slide" data-ride="carousel">
        {/*<!-- Indicators -->*/}
        <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
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
            <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
        </a>
    </div>
);

export default SlidingCarousel;
