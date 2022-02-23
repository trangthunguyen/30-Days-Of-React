import React, { useRef, useState } from "react";
import "../styles/Colors.css";
import ItemColor from "./itemcolor/ItemColor";

const Colors = () => {
  const inpRef = useRef(27);
  const hexaColor = () => {
    let str = "0123456789abcdef";
    let res = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      res += str[index];
    }
    return res;
  };
  const genColors = (number) => {
    const colorsArr = [];
    for (let i = 0; i < number; i++) {
      colorsArr.push(hexaColor());
    }
    return colorsArr;
  };
  const [colors, setColors] = useState(genColors(27));
  const handleClick = () => {
    const value = inpRef.current.value;
    if (value.trim().length === 0) {
      setColors(genColors(27));
    } else {
      setColors(genColors(value));
    }
  };

  const handleChange = () => {
    const value = inpRef.current.value;
    if(value.match(/[^0-9]/g)){
      inpRef.current.value=''
    }
  }
  return (
    <div className="wrapper">
      <h1 className="text-center">30 Days of React</h1>
      <h3 className="text-center">Hexadecimal Colors</h3>
      <div className="input-container">
        <input type="text" ref={inpRef} onChange={handleChange} />
        <button onClick={handleClick}>GENERATE</button>
      </div>
      <div className="color-container">
        {colors.map((item, index) => (
          <ItemColor key={index} color={item} />
        ))}
      </div>
    </div>
  );
};

export default Colors;
