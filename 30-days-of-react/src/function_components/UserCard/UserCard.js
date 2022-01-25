import React from "react";
import ProfileInfor from "./ProfileInfor/ProfileInfor";
import ProfileSkills from "./ProfileSkills/ProfileSkills";
import AVATAR from "../../assets/images/profile_picture.png";
import './UserCard.css'


const UserCard = () => {
    const user = {
      image: AVATAR,
      name: "Asabeneh Yetayeh",
      job: "Senior Developer, Finland",
      skillList: [
        "HTML",
        "CSS",
        "Sass",
        "JS",
        "React",
        "Redux",
        "Node",
        "MongoDB",
        "Python",
        "Flask",
        "Django",
        "NumPy",
        "Pandas",
        "Data Analysis",
        "MYSQL",
        "GraphQL",
        "D3.js",
        "Gatsby",
        "Docker",
        "Heroku",
        "Git",
      ],
    };
    return (
      <div className="profile__container">
        <div className="profile__content">
          <ProfileInfor image={user.image} name={user.name} job={user.job} />
          <ProfileSkills skillList={user.skillList} />
        </div>
      </div>
    );
  };

export default UserCard