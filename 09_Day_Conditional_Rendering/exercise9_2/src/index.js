import React from "react";
import ReactDOM from "react-dom";

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
    isLoading: false,
  };
  fetchData = () => {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  };
  render() {
    return (
      <div>
        <h1>{this.state.isLoading ? "loading" : "done"}</h1>
        <Button text={"fetch data"} onClick={this.fetchData} />
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
