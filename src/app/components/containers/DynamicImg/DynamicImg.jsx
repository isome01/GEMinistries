import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import {fromJS} from 'immutable'
import './style.css'

const DynamicImg = (props) => {
  const {
    title,
    dataList,
    imageClass = '',
    imageStyle = {},
    applyImgStyle,
    containerClass = '',
    containerStyle = {},
    showCaption,
    showTitle,
    passingLink,
    getCurrentImage,
    transTime,
    showOverlay
  } = props
  /*
    Remember, "title" CANNOT have a string with whitespaces. Capiche?
  */
  const id = title.replace(/ /g, '-').replace(/(\$|%|^|&|\*|\.|@|#|!|\(|\)|\+|=|-|_|\{|}|\[|]|'|"|;|:|\/|,|\?|>|<)/g, '')

  const imgBoxStyle = (fromJS(containerStyle).size ?  {
      margin: containerStyle.margin || 'auto',
      width: '100%',
      maxWidth: containerStyle.width || containerStyle.maxWidth || '100%',
      height: '100%',
      maxHeight: containerStyle.height || containerStyle.maxHeight || '100%',
      border: containerStyle.border || 'solid #eee 2px',
      borderRadius: containerStyle.borderRadius || '0',
      backgroundColor: containerStyle.backgroundColor || '#000',
      ...containerStyle
    } : {}
  )
  const imgStyle = (
    applyImgStyle && (fromJS(imageStyle).size) ?
    {
      width: '100%',
      maxWidth: (imageStyle.width || imageStyle.maxWidth) || 'auto',
      height: '100%',
      maxHeight: (imageStyle.height || imageStyle.maxHeight) || 'auto',
      objectFit: 'contain',
      ...imageStyle
    } : {}
  )

  return (
    <div
      id={id}
      className='carousel slide'
      data-ride="carousel"
      style={{display: containerStyle.display || 'block'}}
    >
      {
        dataList.length > 1 &&
        <ol className="carousel-indicators">
          {
            (dataList).map((data, index) => (
              <li
                key={`${data.path}-car`}
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
        className={`carousel-inner ${containerClass}`}
        style={imgBoxStyle}
      >
        {
          (dataList || []).map((data, index) => {
            return (
              data.path &&
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={`${data.name}-${index}`}>
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
                  className={imageClass}
                  style={imgStyle}
                />
              </div>
            )
          })
        }
        {((showCaption || showTitle) && showOverlay) && <div className='dialog-overlay' />}
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
  containerClass: PropTypes.string,
  imageClass: PropTypes.string,
  showTitle: PropTypes.bool,
  showCaption: PropTypes.bool,
  showOverlay: PropTypes.bool,
  passingLink: PropTypes.string,
  getCurrentImage: PropTypes.func,
  transTime: PropTypes.number,
  applyImgStyle: PropTypes.bool
}

DynamicImg.defaultProps = {
  showTitle: true,
  showCaption: true,
  showOverlay: true,
  passingLink: '',
  resizeByWidth: null,
  resizeByHeight: null,
  getCurrentImage: null,
  transTime: 0,
  applyImgStyle: true
}

export default DynamicImg;
