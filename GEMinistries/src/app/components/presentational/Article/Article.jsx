import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Article = ({header, summary, summaryid, width, overflows, articleLink}) => (
  <article style={{width : width}}>
    <div className="article-summary">
      <h4>{header}</h4>
      <div id={summaryid} >
        {summary.split(/\n/g).map((paragraph, index) => {
          const key = `${header}-${index}`
          return (
            paragraph
            && <p key={key}>{paragraph}</p>)
        })}
      </div>
      {overflows.doesOverflow &&
        <span
          className='article-link'
          onClick={e => {

             if (articleLink)
               articleLink(summaryid)
             const more = '... Read More'
             const less = 'Read Less...'
             e.target.text = e.target.text === more ? less : more
           }}>
          Read More...
        </span>
      }
    </div>
    <hr/>
  </article>
)

Article.propTypes = {
  header: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  overflows: PropTypes.bool,
  articleLink: PropTypes.func
}

export default Article;
