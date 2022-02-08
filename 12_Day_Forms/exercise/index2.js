// // index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import validator from 'validator';
import "./index.css";

const options = [
  {
    value: "",
    label: "-- Select Country--",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option value={value}> {label}</option>
));

class App extends Component {
  // declaring state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
      email: false,
      country: false,
      tel: false,
      dateOfBirth: false,
      favoriteColor: false,
      weight: false,
      gender: false,
      file: false,
      bio: false,
    },
    submit: false
  };
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      });
    } else if (type === "file") {
      this.setState({ [name]: e.target.files[0] });
    } else {
      console.log('file');
      this.setState({ [name]: value });
    }
  };
  handleBlur = (e) => {
    const { name, value } = e.target;
    this.setState({ touched: { ...this.state.touched, [name]: true } });
    console.log(name);
  };
  validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      tel: "",
      dateOfBirth: "",
      favoriteColor: "",
      weight: "",
      gender: "",
      file: "",
      bio: "",
    };

    const keyList = {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      country: "Country",
      tel: "Telephone",
      dateOfBirth: "Date of birth",
      favoriteColor: "Favorite color",
      weight: "Weight",
      gender: "Gender",
      file: "File",
      bio: "Biography",
    };
    
    const checkEmpty = (str) => {
      if (validator.isEmpty(str)) {
        return true
      }
      return false
    };
    
    for (const key in keyList) {
      if(key!=='file') {
        if(this.state.submit && checkEmpty(this.state[key])) {
          errors[key] = `${keyList[key]} is not empty`
        }
      }
    }

    if (
      (this.state.submit || this.state.touched.email) &&
      !validator.isEmail(this.state.email)
    ) {
      errors.email = "Invalid email";
    }

    if (
      (this.state.submit || this.state.touched.tel) &&
      !validator.isMobilePhone(this.state.tel, 'vi-VN')
    ) {
      errors.tel = "Invalid phone number";
    }

    if (
      (this.state.submit || this.state.touched.weight) &&
      !validator.isNumeric(this.state.weight)
    ) {
      errors.weight = "Invalid number";
    }

    return errors;
  };
  handleSubmit = (e) => {
    /*
      e.preventDefault()
      stops the default behavior of form element 
      specifically refreshing of page
      */
    e.preventDefault();
    this.setState({submit: true})
    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = this.state;

    const formattedSkills = [];
    for (const key in skills) {
      console.log(key);
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
    };
    /*
     the is the place where we connect backend api
      to send the data to the database
      */
    console.log(data);
  };

  render() {
    // accessing the state value by destrutcturing the state
    // the noValidate attribute on the form is to stop the HTML5 built-in validation

    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = this.validate();
    return (
      <div className="App">
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="row">
            <div className="form-group">
              <label htmlFor="firstName">First Name </label>
              <input
                required
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder="First Name"
              />{" "}
              <br />
              <small>{firstName}</small>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name </label>
              <input
                required
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder="Last Name"
              />{" "}
              <br />
              <small>{lastName}</small>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input
                required
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder="Email"
              />
              <br />
              <small>{email}</small>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tel">Telephone </label>
            <input
              required
              type="tel"
              name="tel"
              value={this.state.tel}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Tel"
            />
            <br />
            <small>{tel}</small>
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of birth </label>
            <input
              required
              type="date"
              name="dateOfBirth"
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Date of Birth"
            />
            <br />
            <small>{dateOfBirth}</small>
          </div>
          <div className="form-group">
            <label htmlFor="favoriteColor">Favorite Color</label>
            <input
              required
              type="color"
              id="favoriteColor"
              name="favoriteColor"
              value={this.state.favoriteColor}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Favorite Color"
            />
            <br />
            <small>{favoriteColor}</small>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight </label>
            <input
              required
              type="number"
              id="weight"
              name="weight"
              value={this.state.weight}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Weight in Kg"
            />
            <br />
            <small>{weight}</small>
          </div>
          <div>
            <label htmlFor="country">Country</label> <br />
            <select
              name="country"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              id="country"
            >
              {selectOptions}
            </select>
            <br />
            <small>{country}</small>
          </div>

          <div>
            <p>Gender</p>
            <div>
              <input
                required
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={this.handleChange}
                checked={this.state.gender === "Female"}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                required
                id="male"
                type="radio"
                name="gender"
                value="Male"
                onChange={this.handleChange}
                checked={this.state.gender === "Male"}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                required
                id="other"
                type="radio"
                name="gender"
                value="Other"
                onChange={this.handleChange}
                checked={this.state.gender === "Other"}
              />
              <label htmlFor="other">Other</label>
            </div>
            <br />
            <small>{gender}</small>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                required
                type="checkbox"
                id="html"
                name="html"
                onChange={this.handleChange}
              />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input
                required
                type="checkbox"
                id="css"
                name="css"
                onChange={this.handleChange}
              />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input
                required
                type="checkbox"
                id="javascript"
                name="javascript"
                onChange={this.handleChange}
              />
              <label htmlFor="javascript">JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor="bio">Bio</label> <br />
            <textarea
              id="bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              cols="120"
              rows="10"
              placeholder="Write about yourself ..."
            />
            <br />
            <small>{bio}</small>
          </div>

          <div>
            <input
              required
              type="file"
              name="file"
              onChange={this.handleChange}
              // onBlur={this.handleBlur}
            />
            <br />
            <small>{file}</small>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);