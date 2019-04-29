import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Article = props => (
  <article id="" style={{width : props.article_width}}>
    <hr/>
    <div className="article-summary">
      <h4>{props.article_header || 'Article Header'}</h4>
      <p>
        { props.article_summary || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet vestibulum ligula quis gravida. Donec sed tortor sit amet quam pharetra blandit suscipit aliquam ipsum. Aliquam ut hendrerit arcu. Ut porttitor magna ipsum, ac cursus urna imperdiet quis. Donec facilisis libero a risus convallis, elementum luctus urna efficitur. Praesent ut tellus at erat dapibus luctus vel non nisl. Cras volutpat nulla feugiat vestibulum egestas. Integer porttitor auctor arcu, sed varius est. Curabitur id vulputate nunc. Suspendisse non justo vitae ipsum auctor porttitor. Ut cursus felis sed nunc dignissim consectetur. Suspendisse at urna sed odio rutrum euismod sit amet sed risus. Vivamus bibendum eros lacus, nec auctor lectus laoreet non. Etiam pellentesque eget dolor eu efficitur.   
        Nulla non nulla urna. Nulla ultricies ante velit, ac laoreet justo varius vel. Aliquam egestas sapien ligula, vel pulvinar elit pulvinar ullamcorper. Aenean maximus eros est, vel cursus felis pharetra eget. Fusce non vestibulum orci. Proin at nulla sapien. Vivamus ante est, consequat ut urna sit amet, tincidunt efficitur erat. Mauris iaculis velit in luctus pulvinar. Donec at sodales odio. Maecenas eget metus justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut nibh eros, luctus ut dolor in, commodo pulvinar felis. Sed eu diam eu turpis aliquam tempor. Aliquam eget mi arcu. Sed elementum tortor non tortor ultricies, id pharetra nisi eleifend. Praesent tincidunt scelerisque nulla quis congue.`}
      </p>
      {
        props.link_to_more ? <a href="#"> Read More... </a> : null
      }
    </div>
  </article>
)

export default Article;
