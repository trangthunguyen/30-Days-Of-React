import React from "react";
import "./ItemColor.css";

class ItemColor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { color } = this.props;
    const itemColorStyle = {
      padding: "20px",
      margin: "2px 0",
      borderRadius: "5px",
      textAlign: "center",
      backgroundColor: color,
      color: "#fff",
    };
    return (
      <div className="itemColor__wrapper">
        <p className="itemColor-color" style={itemColorStyle}>
          {color}
        </p>
      </div>
    );
  }
}

export default ItemColor;
