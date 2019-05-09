import React from 'react';
import PropTypes from 'prop-types'
import './style.css'

const DynamicImg = ({title, dataList, className, style}) => (
  <div id={title} className='carousel slide' data-ride="carousel">
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
    <div className={`carousel-inner ${className}`} style={style || {border: "solid navy 1px"}}>
      {
        (dataList || []).map((data, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className='carousel-caption d-none d-sm-block'>
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
  style: PropTypes.shape({})
}

export default DynamicImg;
