import React from "react";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p className="information1">Copyright ©2020 30 Days Of React</p>
      <p className="information1">
        Join{" "}
        <a
          className="lesson-link"
          href="https://github.com/Asabeneh/30-Days-Of-React"
        >
          30 Days of React challenge
        </a>
      </p>
      <p className="information2">
        Designed and Built by{" "}
        <a href="https://www.linkedin.com/in/asabeneh/" className="actor-link">
          Asabeneh Yetayeh
        </a>
      </p>
    </footer>
  );
};

export default Footer;
