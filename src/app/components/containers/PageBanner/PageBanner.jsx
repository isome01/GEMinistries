import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PageBanner = ({className, bannerLogo ,bannerMoto}) => {
  return (
    <div
      id='page_banner'
      className={`page-banner row ${className || ''}`}
      style={{background: '#1e416e'}}>
      <div
        className='col-md-1'
        style={{background: 'linear-gradient(to right, #fff, #1e416e)'}}
      />
      <div className='col-md-2'>
        {bannerLogo &&
        (<img
          id='page-banner-logo'
          alt="Page_Banner_Logo"
          src={bannerLogo}
          className='banner-img'
        />)}
      </div>
      <div className='col-md-8'>
        {bannerMoto &&
        (<img
          id='page-banner-moto'
          alt="Page_Banner_Moto"
          src={bannerMoto}
          className='banner-img'
        />)}
      </div>
      <div
        className='col-md-1'
        style={{background: 'linear-gradient(to left, #fff, #1e416e)'}}
      />
    </div>
  )
}

PageBanner.propTypes = {
  className: PropTypes.string,
  bannerMoto: PropTypes.string,
  bannerLogo: PropTypes.string
}

export default PageBanner;
