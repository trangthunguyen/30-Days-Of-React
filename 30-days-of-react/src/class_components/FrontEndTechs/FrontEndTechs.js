import React from "react";
import TechsImg from "../../assets/images/frontend_technologies.png";
import './FrontEndTechs.css'

class FrontEndTechs extends React.Component {
  constructor() {
    super();
  }
  render() {
    const imgStyle = { maxWidth: '100%' };
    return (
      <div>
        <img src={TechsImg} alt="frontend technologies" style={imgStyle} />
      </div>
    );
  }
};

export default FrontEndTechs