import React from "react";
import { Outlet} from "react-router-dom";
import '../styles/components/ProfileSkills.css'

const ProfileSkills = () => {
    return (
      <div>
        <h3 className="profile__title">Skills</h3>
        <Outlet />
      </div>
    );
};

export default ProfileSkills