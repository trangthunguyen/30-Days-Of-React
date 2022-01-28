import React from "react";
import "../style/style.scss";
import asabenehImage from "../assets/images/profile_picture.png";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../components/user/Main";

class Portfolio extends React.Component {
    state = {
      count: 0,
      styles: {
        backgroundColor: "light",
        color: "light",
      },
    };
    showDate = (time) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
  
      const month = months[time.getMonth()].slice(0, 3);
      const year = time.getFullYear();
      const date = time.getDate();
      return ` ${month} ${date}, ${year}`;
    };
    addOne = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    minusOne = () => {
      this.setState({ count: this.state.count - 1 });
    };
    handleTime = () => {
      alert(this.showDate(new Date()));
    };
    greetPeople = () => {
      alert("Welcome to 30 Days Of React Challenge, 2020");
    };
    changeBackground = () => {
      this.setState({
        styles: {
          backgroundColor:
            this.state.styles.backgroundColor === "light" ? "dark" : "light",
          color: this.state.styles.color === "light" ? "dark" : "light",
        },
      });
      console.log(this.state.styles);
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
      };
      const techs = ["HTML", "CSS", "JavaScript"];
      const user = { ...data.author, image: asabenehImage };
  
      return (
        <div className="app">
          {this.state.backgroundColor}
          <Header data={data} styles={this.state.styles} />
          <Main
            user={user}
            techs={techs}
            handleTime={this.handleTime}
            greetPeople={this.greetPeople}
            changeBackground={this.changeBackground}
            addOne={this.addOne}
            minusOne={this.minusOne}
            count={this.state.count}
            styles={this.state.styles}
          />
          <Footer date={new Date()} styles={this.state.styles} />
        </div>
      );
    }
  }

  export default Portfolio