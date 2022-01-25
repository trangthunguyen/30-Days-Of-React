import React from "react";
import './Bar.css'

class Bar extends React.Component {
    constructor (props) {
      super(props)
    }
    render(){
    const { country, population, width } = this.props;
    return (
      <ul className="bar-container">
        <li className="country">
          {country === "United States of America"
            ? "USA"
            : country === "Russian Federation"
            ? "Russian"
            : country}
        </li>
        <li className="populationbar-container">
          <p className="population-bar" style={{ width: `${width}%` }}></p>
        </li>
        <li className="population-number">{population}</li>
      </ul>
    );
    }
  };

  export default Bar