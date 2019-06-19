import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PageBanner = ({className, bannerLogo ,bannerMoto}) => {
  const generateParallax = e => {
    if (e.target) {
      let moto = document.getElementById(e.target.id).style
      moto.backgroundImage = `url('${e.target.name}')`
      moto.attachment = 'fixed'
      moto.position = 'center'
      moto.backgroundRepeat = 'no-repeat'
      moto.backgroundSize = 'cover'
      moto.height = '100%'
      console.log('loaded')
    }
  }

  return (
    <div
      id='page_banner'
      className={`page-banner row ${className || ''}`}>
      <div className='col-md-1' />
      <div className='col-md-10'>
        <div className='row' style={{height: '100px'}}>
          {bannerMoto && bannerLogo &&
            <div className='col-sm-1' />
          }
          {bannerLogo &&
            <div className='text-center col-sm'>
              <img id='page-banner-logo' src={bannerLogo || ''} alt='banner-logo' style={{height: '100px'}}/>
            </div>
          }
          {bannerMoto &&
            <div className='text-center col-sm'>
              <img id='page-banner-moto' src={bannerMoto || ''} alt='banner-moto' style={{height: '100px'}}/>
            </div>
          }
        </div>
      </div>
      <div className='col-md-1' />
    </div>
  )
}

PageBanner.propTypes = {
  className: PropTypes.string,
  bannerMoto: PropTypes.string,
  bannerLogo: PropTypes.string
}

export default PageBanner;
