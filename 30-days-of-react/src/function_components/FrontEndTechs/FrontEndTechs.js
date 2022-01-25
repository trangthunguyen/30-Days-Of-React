import React from "react";
import TechsImg from "../../assets/images/frontend_technologies.png";
import './FrontEndTechs.css'

const FrontEndTechs = () => {
    const imgStyle = { maxWidth: '100%' };
    return (
      <div>
        <img src={TechsImg} alt="frontend technologies" style={imgStyle} />
      </div>
    );
};

export default FrontEndTechs