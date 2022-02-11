import React from "react";
import "../styles/components/About.css";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="profile__container">
      <div className="profile__content">
        <nav
          style={{
            borderBottom: "1px solid",
            paddingBottom: "1rem",
          }}
        >
          <Link to='infor'>Infor</Link> | {""}
          <Link to="skills">Skill</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default About;
