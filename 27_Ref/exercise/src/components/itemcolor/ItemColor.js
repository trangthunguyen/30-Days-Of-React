import React from "react";
import '../../styles/itemcolor/ItemColor.css'

const ItemColor = (props) => {
    const { color } = props;
    const itemColorStyle = {
      backgroundColor: color,
    };
    return (
        <div className="item-detail" style={itemColorStyle}>
          <p>{color} </p>
          <p className="copy-circle"><span className="copy-text">Copy</span></p>
        </div>
    );
  };

  export default ItemColor