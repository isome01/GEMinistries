import React from 'react';
import PropTypes from 'prop-types'
import './SlidingCarousel.css'

const SlidingCarousel = ({title, dataList, className, style}) => (
  <div className='article-slide-container carousel slide' data-ride="carousel">
    <ul className="carousel-indicators">
      {
        (dataList || []).map((data, index) => (
          <li
            data-target={`#${title}`}
            data-slide-to={`${index}`}
            className={index === 0 ? 'active' : ''}>
          </li>
        ))
      }
    </ul>
    <div className={`carousel-inner ${className}`} style={style || {border: "solid navy 1px"}}>
      {
        (dataList || []).map((data, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className='carousel-caption d-none d-md-block'>
              <h5>{title}</h5>
              {data.caption && <p>{data.caption}</p>}
            </div>
            <img
              id={`${data.name}-${index}`}
              src={data.path}
              alt={data.name}
            />
          </div>
        ))
      }
    </div>
    {
      dataList.length > 1 &&
      <div>
        <a className="carousel-control-prev" href={`#${title}`} data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href={`#${title}`} data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    }
  </div>
)

SlidingCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      caption: PropTypes.string
    })
  ).isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({})
}

export default SlidingCarousel;
