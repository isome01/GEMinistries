import React from 'react'
import PropTypes from 'react'
import {ClipLoader} from 'react-spinners'

const PageLoader = props => (
  <div className='page-loader'>
    <ClipLoader
      sizeUnit='px'
      size={props.size || 150}
      color={props.color || '#000080'}
      loading={props.loading}
    />
  </div>
)

export default PageLoader
