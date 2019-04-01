import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './presentational.css';

const ProfileCard = (props) => (
    <div class="profile_container">
        <Link to={props.profile_link || "#"} >
            <div align="center">
                <img alt="Profile Image" src={props.profile_pic}/>
                <h5> {props.profile_name} </h5>
            </div>
        </Link>
    </div>
);

ProfileCard.propTypes = {
    
};

export default ProfileCard;