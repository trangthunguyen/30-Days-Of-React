import React from "react";
import './Colors.css'
import ItemColor from "./ItemColor/ItemColor";


const Colors = () => {
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
    for (let i = 0; i < 5; i++) {
      colors.push(hexaColor());
    }
    return (
      <div className="color__container">
        {colors.map((item, index) => (
          <ItemColor key={index} color={item} />
        ))}
      </div>
    );
  };

export default Colors