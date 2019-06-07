import React from 'react';
import PropTypes from 'prop-types'
import './style.css'

const DynamicImg = ({title, dataList, className, style, showCaption, showTitle}) => (
  /*
  Remember, title CANNOT have a string with whitespaces. Capiche?
  */
  <div
    id={title.replace(/ /g, '-')}
    className='carousel slide'
    data-ride="carousel"
    style={{display: (style.display ? style.display : 'block')}}>
    {
      dataList.length > 1 &&
      <ol className="carousel-indicators">
        {
          (dataList).map((data, index) => (
            <li
              data-target={`#${title}`}
              data-slide-to={`${index}`}
              className={index === 0 ? 'active' : ''}>
            </li>
          ))
        }
      </ol>
    }
    <div
      className={`carousel-inner ${className}`}
      style={{
        border: style.border || 'solid #eee 2px',
        borderRadius: style.borderRadius || '0',
        backgroundColor: style.backgroundColor || '#000'
      }}
    >
      {
        (dataList || []).map((data, index) => (
          data.path &&
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            {(showCaption || showTitle) &&
            <div className='carousel-caption d-none d-sm-block'>
              {showTitle && title && <h5>{title}</h5>}
              {showCaption && data.caption && <p>{data.caption}</p>}
            </div>}
            <img
              id={`${data.name}-${index}`}
              src={data.path}
              alt={data.name}
              style={{
                width: style.width || '',
                height: style.height || ''
              }}
            />
          </div>
        ))
      }
    </div>
    {
      dataList.length > 1 &&
      <div>
        <a className="carousel-control-prev" href={`#${title}`} data-slide="prev" role='button'>
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href={`#${title}`} data-slide="next" role='button'>
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    }
  </div>
)

DynamicImg.propTypes = {
  title: PropTypes.string.isRequired,
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      caption: PropTypes.string
    })
  ).isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  showTitle: PropTypes.bool,
  showCaption: PropTypes.bool
}

DynamicImg.defaultProps = {
  showTitle: true,
  showCaption: true
}

export default DynamicImg;
