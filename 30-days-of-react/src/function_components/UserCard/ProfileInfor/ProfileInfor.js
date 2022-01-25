import React from "react";
import './ProfileInfor.css'

const ProfileInfor = (props) => {
    const { image, name, job } = props;
    return (
      <div className="profile__infor">
        <img src={image} alt="avatar" />
        <h3 className="profile__title">{name}</h3>
        <p className="profile__description">{job}</p>
      </div>
    );
};

export default ProfileInfor