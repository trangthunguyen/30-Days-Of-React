import React from "react";
import "./ColorBoard.css";

class ColorBoard extends React.Component {
  constructor() {
    super();
  }
  render() {
    const hexaColor = () => {
      let str = "0123456789abcdef";
      let res = "#";
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
        res += str[index];
      }
      return res;
    };
    const colors = [];
    for (let i = 0; i < 32; i++) {
      colors.push(hexaColor());
    }
    return (
      <div className="wrapper">
        <h1 className="text-center">30 Days of React</h1>
        <h3 className="text-center">Hexadecimal Colors</h3>
        <div className="board-container">
          {colors.map((item, index) => {
            return (
              <div className="board-item" style={{ backgroundColor: item }}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorBoard;
