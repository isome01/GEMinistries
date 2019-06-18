import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import DynamicImg from '../../containers/DynamicImg/DynamicImg.jsx'
import './style.css'

const ProfileCard = ({className, profileLink, profilePic, profileName}) => (
  <div className={`profile_container ${className}`}>
    <Link to={profileLink || "#"}>
      <div align="text-center">
        <DynamicImg
          title={profileName}
          dataList={[{
            path: profilePic,
            name: profileName,
            caption: profileName
          }]}
          style={{
            display: 'inline-block',
            width: '100%',
            height: '100%'
          }}
          showTitle={false}
          showCaption={false}
        />
      </div>
      <h5 className='text-center'>{profileName}</h5>
    </Link>
  </div>
)

ProfileCard.propTypes = {
  className: PropTypes.string,
  profileLink: PropTypes.string,
  profilePic: PropTypes.string.isRequired,
  profileName: PropTypes.string.isRequired,
};

export default ProfileCard;
