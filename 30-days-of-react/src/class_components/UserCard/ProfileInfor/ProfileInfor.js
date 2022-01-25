import React from "react";
import "./ProfileInfor.css";

class ProfileInfor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { image, name, job } = this.props;
    return (
      <div className="profile__infor">
        <img src={image} alt="avatar" />
        <h3 className="profile__title">{name}</h3>
        <p className="profile__description">{job}</p>
      </div>
    );
  }
}

export default ProfileInfor;
