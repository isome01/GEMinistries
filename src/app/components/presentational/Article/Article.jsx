import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Article = ({header, summary, summaryid, width, children, childBefore, childAfter, className}) => (
  <article style={{width : width}} className={className || ''}>
    <div className="article-summary">
      <h4>{header}</h4>
      {!childAfter && childBefore && children}
      <div id={summaryid} >
        {summary.split(/\n/g).map((paragraph, index) => {
          const key = `${header}-${index}`
          return (
            paragraph
            && <p key={key}>{paragraph}</p>)
        })}
      </div>
      {childAfter && !childBefore && children}
    </div>
  </article>
)

Article.propTypes = {
  header: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  summaryid: PropTypes.string.isRequired,
  width: PropTypes.number,
  children: PropTypes.node,
  childBefore: PropTypes.node,
  childAfter: PropTypes.node,
  className: PropTypes.string
}

Article.defaultProps = {
  childAfter: true,
  childBefore: false
}

export default Article;
