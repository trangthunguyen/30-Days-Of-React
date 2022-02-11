import React from "react";
import { Link} from "react-router-dom";
import USER from "./user";
import '../styles/components/ProfileSkills.css'

const AllSkills = () => {
    const { skillList } = USER;
    return (
      <div>
        <ul className="skills__wrapper">
          {skillList.map((item, index) => (
            <li className="skills__item" key={index}>
              <Link to={`/about/skills/${item.skill}`}>{item.skill}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default AllSkills