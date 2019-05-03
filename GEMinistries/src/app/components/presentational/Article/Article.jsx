import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Article = ({header, summary, width, overflows, articleLink}) => (
  <article id="" style={{width : width}}>
    <hr/>
    <div className="article-summary">
      <h4>{header}</h4>
      {summary.split(/\n/g).map((paragraph, index) => {
        const key = `${header}-${index}`
        return (
          paragraph
          && <p key={key}>{
            paragraph}
          </p>)
      })}
      {overflows && <a href={articleLink}> Read More... </a>}
    </div>
  </article>
)

Article.propTypes = {
  header: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  width: PropTypes.number,
  overflows: PropTypes.bool,
  articleLink: PropTypes.string
}

export default Article;
