import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import { useState } from "react";

function App() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  let initBtnPosition = {
    top: 0,
    left: 0,
  };
  const style = {
    position: "absolute",
    padding: "10px",
    backgroundColor: "#81cee1",
    color: "#000000",
    border: "none",
  };
  const [btnPosition, setBtnPosition] = useState(initBtnPosition);
  const text = "30 days of React";
  const onMouseEnter = () => {
    const top = Math.floor(Math.random() * windowWidth);
    const left = Math.floor(Math.random() * windowHeight);
    setBtnPosition({ top: top, left: left });
  };
  const btnStyle = { ...style, ...btnPosition };
  return (
    <div className="App">
      <Button
        className="btn"
        btnStyle={btnStyle}
        text={text}
        onMouseEnter={onMouseEnter}
      />
    </div>
  );
}

export default App;
