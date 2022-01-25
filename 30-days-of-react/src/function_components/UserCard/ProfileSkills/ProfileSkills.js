import React from "react";
import './ProfileSkills.css'

const ProfileSkills = (props) => {
    const { skillList } = props;
    return (
      <div>
        <h3 className="profile__title">Skills</h3>
        <ul className="skills__wrapper">
          {skillList.map((item, index) => (
            <li className="skills__item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default ProfileSkills