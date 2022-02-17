// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.css'

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
  <option key={label} value={value}>
    {" "}
    {label}
  </option>
));

const App = (props) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    title: "",
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
      title: false,
      country: false,
      tel: false,
      dateOfBirth: false,
      favoriteColor: false,
      weight: false,
      bio: false,
    },
    submit: false,
  };
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        skills: { ...formData.skills, [name]: checked },
      });
    } else if(type === 'radio') {
      setFormData({...formData, gender: value})
    } 
    else if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    console.log(name, value, type, checked);
  };
  const onSubmit = (e) => {
    /*
     e.preventDefault()
     stops the default behavior of form element
     specifically refreshing of page
    */
    e.preventDefault();
    setFormData({ ...formData, submit: true });
    const {
      firstName,
      lastName,
      title,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = formData;

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
      title,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
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
  const onBlur = (e) => {
    const { name } = e.target;
    console.log(name);
    setFormData({
      ...formData,
      touched: { ...formData.touched, [name]: true },
    });
  };
  const validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      tel: "",
      dateOfBirth: "",
      favoriteColor: "",
      weight: "",
      country: "",
      gender: "",
      bio: "",
      file: "",
      skills: "",
    };

    const keyList = {
      firstName: "First name",
      lastName: "Last name",
      title: "Title",
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

    for (const key in keyList) {
        if(key!=="file") {
          if((formData.submit || formData.touched[key]) && formData[key].trim().length === 0) {
            errors[key] = `${keyList[key]} is not empty`
        }
      }
    }

    if (
      ((formData.submit || formData.touched.firstName) &&
        formData.firstName.length < 3) ||
      (formData.touched.firstName && formData.firstName.length > 12)
    ) {
      errors.firstName = "First name must be between 2 and 12";
    } 
    if (
      (formData.submit || formData.touched.email) &&
      !formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    )
      errors.email = "Invalid email";
    if (
      (formData.submit || formData.touched.tel) &&
      (!formData.tel.match(/^\d{10}$/) || formData.tel.match(/[^0-9]/))
    )
      errors.tel = "Invalid phone number";
    if (
      (formData.submit || formData.touched.weight) &&
      !formData.weight.match(/([0-9]*[.])?[0-9]+/)
    )
      errors.weight = "Invalid number";
    return errors;
  };

  // accessing the state value by destrutcturing the state
  const {
    firstName,
    lastName,
    title,
    country,
    email,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    gender,
    bio,
  } = formData;

  const errors = validate();

  return (
    <div className="App">
      <h3>Add Student</h3>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="form-group">
            <label htmlFor="firstName">First Name </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="First Name"
            />
            <br />
            {errors.firstName && <small>{errors.firstName}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Last Name"
            />
            <br />
            {errors.lastName && <small>{errors.lastName}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="title">Title </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={title}
              onChange={onChange}
              onBlur={onBlur}
            />
            <br />
            {errors.title && <small>{errors.title}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Email"
            />
            <br />
            {errors.email && <small>{errors.email}</small>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tel">Telephone </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={tel}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Tel"
          />
          <br />
          {errors.tel && <small>{errors.tel}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of birth </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Date of Birth"
          />
          <br />
          {errors.dateOfBirth && <small>{errors.dateOfBirth}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="favoriteColor">Favorite Color</label>
          <input
            type="color"
            id="color"
            name="favoriteColor"
            value={favoriteColor}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Favorite Color"
          />
          <br />
          {errors.favoriteColor && <small>{errors.favoriteColor}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Weight in Kg"
          />
          <br />
          {errors.weight && <small>{errors.weight}</small>}
        </div>
        <div>
          <label htmlFor="country">Country</label> <br />
          <select
            name="country"
            onChange={onChange}
            onBlur={onBlur}
            id="country"
            value={country}
          >
            {selectOptions}
          </select>
        </div>
        <br />
        {errors.country && <small>{errors.country}</small>}

        <div>
          <p>Gender</p>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={onChange}
              checked={gender === "Female"}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={onChange}
              checked={gender === "Male"}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={onChange}
              checked={gender === "Other"}
            />
            <label htmlFor="other">Other</label>
          </div>
          <br />
          {errors.gender && <small>{errors.gender}</small>}
        </div>

        <div>
          <p>Select your skills</p>
          <div>
            <input type="checkbox" id="html" name="html" onChange={onChange} />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input type="checkbox" id="css" name="css" onChange={onChange} />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="javascript"
              name="javascript"
              onChange={onChange}
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
          <br />
          {errors.skills && <small>{errors.skills}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label> <br />
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={onChange}
            onBlur={onBlur}
            cols="120"
            rows="10"
            placeholder="Write about yourself ..."
          />
          <br />
          {errors.bio && <small>{errors.bio}</small>}
        </div>

        <div className="form-group">
          <input type="file" name="file" onChange={onChange} onBlur={onBlur} />
          <br />
          {errors.file && <small>{errors.file}</small>}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
