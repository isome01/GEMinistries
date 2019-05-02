import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const ProfileCard = ({className, profileLink, profilePic, profileName}) => (
  <div className={`profile_container ${className}`}>
    <Link to={profileLink || "#"}>
      <div align="center">
        <img alt="Profile Image" src={profilePic}/>
        <h5> {profileName} </h5>
      </div>
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
