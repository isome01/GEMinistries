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
      className={`page-banner row ${className || ''}`}
      style={{background: '#1e416e'}}>
      <div
        className='col-md-1'
        style={{background: 'linear-gradient(to right, #fff, #1e416e)'}}
      />
      <div className='col-md-10' style={{background: '#1e416e'}}>
        <div className='row' style={{height: '100px'}}>
          <div className='col-sm-1' />
          <div id='page-banner-logo' className='text-center col-sm-2' name={bannerLogo} />
          <div id='page-banner-moto' className='text-center col-sm-8' name={bannerMoto} onLoad={generateParallax}/>
        </div>
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
