import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import './style.css'

const DynamicImg = ({title, dataList, className, style, showCaption, showTitle, passingLink, getCurrentImage, transTime}) => {
  /*
    Remember, title CANNOT have a string with whitespaces. Capiche?
  */
  const id = title.replace(/ /g, '-').replace(/(\$|%|^|&|\*|\.|@|#|!|\(|\)|\+|=|-|_|\{|}|\[|]|'|"|;|:|\/|,|\?|>|<)/g, '')

  const imgBoxStyle = {
    margin: style.margin || 'auto',
    width: '100%',
    maxWidth: style.width || style.maxWidth || '100%',
    height: '100%',
    maxHeight: style.height || style.maxHeight || '100%',
    border: style.border || 'solid #eee 2px',
    borderRadius: style.borderRadius || '0',
    backgroundColor: style.backgroundColor || 'rgba'
  }
  const imgStyle = {
    width: '100%',
    maxWidth: (style.width || style.maxWidth) || 'auto',
    height: '100%',
    maxHeight: (style.height || style.maxHeight) || 'auto',
    objectFit: 'contain'
  }

  return (
    <div
      id={id}
      className='carousel slide'
      data-ride="carousel"
      style={{
        display: style.display || 'block',
        height: 'inherit',
        width: 'inherit'
      }}
    >
      {
        dataList.length > 1 &&
        <ol className="carousel-indicators">
          {
            (dataList).map((data, index) => (
              <li
                onLoad={() => {console.log('YUP')}}
                data-target={`#${id}`}
                data-slide-to={`${index}`}
                className={index === 0 ? 'active' : ''}>
              </li>
            ))
          }
        </ol>
      }
      <div
        className={`carousel-inner ${className}`}
        style={!className ? {...imgBoxStyle} : {className}}
      >
        {
          (dataList || []).map((data, index) => {
            return (
              data.path &&
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                {(showCaption || showTitle) &&
                  <Fragment>
                    <div className='carousel-caption d-none d-sm-block'>
                      {showTitle && title && <h5>{title}</h5>}
                      {showCaption && data.caption && <p>{data.caption}</p>}
                    </div>
                  </Fragment>
                }
                <img
                  id={`${id}-${index}`}
                  src={data.path}
                  alt={data.name}
                  name={passingLink}
                  style={{...imgStyle}}
                />
              </div>
            )
          })
        }
        {(showCaption || showTitle) && <div className='dialog-overlay' />}
      </div >
      {
        dataList.length > 1 &&
        <div>
          <a
            className="carousel-control-prev"
            href={`#${id}`}
            data-slide="prev"
            role='button'>
            <span className="carousel-control-prev-icon" />
          </a>
          <a
            className="carousel-control-next"
            href={`#${id}`}
            data-slide="next"
            role='button'>
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      }
    </div>
  )
}

DynamicImg.propTypes = {
  title: PropTypes.string.isRequired,
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      caption: PropTypes.string
    })
  ).isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  showTitle: PropTypes.bool,
  showCaption: PropTypes.bool,
  passingLink: PropTypes.string,
  getCurrentImage: PropTypes.func,
  transTime: PropTypes.number
}

DynamicImg.defaultProps = {
  showTitle: true,
  showCaption: true,
  passingLink: '',
  resizeByWidth: null,
  resizeByHeight: null,
  getCurrentImage: null,
  transTime: 0
}

export default DynamicImg;
