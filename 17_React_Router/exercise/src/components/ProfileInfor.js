import React from "react";
import USER from "./user";
import "../styles/components/ProfileInfor.css";

const ProfileInfor = () => {
  const { image, name, job } = USER;
  return (
    <div className="profile__infor">
      <img src={image} alt="avatar" />
      <h3 className="profile__title">{name}</h3>
      <p className="profile__description">{job}</p>
    </div>
  );
};

export default ProfileInfor;
