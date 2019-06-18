import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const columnslice = {
  whole: 'col-sm-12',
  bisection: 'col-sm-6',
  skewedLeft: 'col-sm-8',
  skewedRight: 'col-sm-4'
}

const Article = ({header, summary, summaryid, width, children, childBefore, childAfter, className, slice}) => (
  <article style={{width : width}} className={className || ''}>
    <div className='article-summary row'>
      {slice === 'whole' &&
        <div className='col-sm-12'>
        <h4 className='article-header'>{header}</h4>
      </div>
      }
      {
        !childAfter && childBefore && children &&
        <div className={`col-sm ${slice !== 'whole' ? 'text-center' : ''}`}>
          {children}
        </div>
      }
      <div className={columnslice[slice] && children ? columnslice[slice] : columnslice.whole}>
        {slice !== 'whole' &&
        <h4 className='article-header'>{header}</h4>
        }
        <div id={summaryid}>
          {summary.split(/\n/g).map((paragraph, index) => {
            const key = `${header}-${index}`
            return (
              paragraph
              && <p className='article-paragraph' key={key}>
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>
      {childAfter && !childBefore && children &&
        <div className={`col-sm ${slice !== 'whole' ? 'text-center' : ''}`}>
          {children}
        </div>
      }
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
  className: PropTypes.string,
  slice: PropTypes.string
}

Article.defaultProps = {
  childAfter: true,
  childBefore: false,
  children: null,
  columnSlice: 'whole'
}

export default Article;
