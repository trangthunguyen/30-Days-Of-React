import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/style.css";
import { countriesData } from "./data/countries";

const countryList = countriesData;

const Button = ({ text, onClick }) => (
  <button className="btn" onClick={onClick}>
    {text}
  </button>
);

const CountryBox = ({
  country: { name, capital, languages, population, flag, currency },
}) => (
  <div className="country-box">
    <div className="countrybox-title">
      <img src={flag} alt={name} />
      <p>{name}</p>
    </div>
    <p>
      <strong>Capital: </strong>
      {capital}
    </p>
    <p>
      <strong>Language: </strong>
      {languages}
    </p>
    <p>
      <strong>Population: </strong>
      {population}
    </p>
    <p>
      <strong>currency: </strong>
      {currency}
    </p>
  </div>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      description
    } = this.props.data;
    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
          <p>{description}</p>
        </div>
      </header>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { country, changeCountry } = this.props;
    return (
      <main>
        <div className="main-wrapper">
          <CountryBox country={country} />
          <Button text="Select Country" onClick={changeCountry} />
        </div>
      </main>
    );
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  state = {
    country: countryList[0],
  };
  changeCountry = () => {
    this.setState({
      country: countriesData[Math.floor(Math.random() * countriesData.length)],
    });
  };
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
      description: "Select your country for your next holiday"
    };

    return (
      <div className="app">
        <Header data={data} />
        <Main country={this.state.country} changeCountry={this.changeCountry} />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
