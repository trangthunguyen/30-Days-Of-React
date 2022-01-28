import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./page/Portfolio";

const App = () => {
  return (
    <div className="app">
      <Portfolio />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
