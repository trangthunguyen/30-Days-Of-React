import React from "react";
import './ProfileSkills.css'

class ProfileSkills extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { skillList } = this.props;
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
  }
};

export default ProfileSkills