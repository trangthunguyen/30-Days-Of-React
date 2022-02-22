import React from "react";
import '../../../styles/components/main/chart/Bar.scss'

const Bar = (props) => {
    const { name, number, width } = props;
    return (
      <ul className="bar-container">
        <li className="country">
          {name}
        </li>
        <li className="populationbar-container">
          <p className="population-bar" style={{ width: `${width}%` }}></p>
        </li>
        <li className="population-number">{number}</li>
      </ul>
    );
  };

  export default Bar