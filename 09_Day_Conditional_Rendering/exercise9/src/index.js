import React from "react";
import ReactDOM from "react-dom";
import './assets/style/index.css'

const options = {
  spring: "pink",
  summer: "yellow",
  autumn: "blue",
  winter: "white",
  morning: "#87CEFA",
  noon: "#FF6347",
  afternoon: "#E6E6FA",
  evening: "	#7FFFD4",
};

const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  color: "white",
};

const Button = ({ text, onClick }) => (
  <button style={buttonStyles} onClick={onClick}>
    {text}
  </button>
);

class App extends React.Component {
  state = {
    backgroundColor: options["morning"],
  };
  onChangeBackgroundColor = (selection) => {
    const date = new Date()
    let option
    if(selection === 'season') {
      const month = date.getMonth()
      option = month<3 ? 'spring' : month<6 ? 'summer' : month<9 ? 'autumn' : 'winter' 
    } else {
      const hour = date.getHours()
      option = hour<10 ? 'morning' : hour<13 ? 'noon' : hour<18 ? 'afternoon' : 'evening'
    }
    this.setState({ backgroundColor: options[option] });
  };
  render() {
    const backgroundColor = this.state;
    return (
      <div className="app" style={backgroundColor}>
        <Button
          text={"Season"}
          onClick={() => this.onChangeBackgroundColor("season")}
        />
        <Button
          text={"Day"}
          onClick={() => this.onChangeBackgroundColor("day")}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
