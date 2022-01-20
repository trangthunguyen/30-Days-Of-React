import React from "react";
import ReactDOM from "react-dom";
import TechsImg from "./assets/images/frontend_technologies.png";
import AVATAR from "./assets/images/profile_picture.png";

const imgStyle = { maxWidth: 100 + "%" };
const skills = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "NumPy",
  "Pandas",
  "Data Analysis",
  "MYSQL",
  "GraphQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git",
];

const hexaColor = () => {
  let str = "0123456789abcdef";
  let res = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    res += str[index];
  }
  return res;
};

//Day 3
const ex1 = (
  <div>
    <img src={TechsImg} alt="frontend technologies" style={imgStyle} />
  </div>
);

const ex2 = (
  <div className="form__container">
    <div className="form__content">
      <h1 className="form__title">subscribe</h1>
      <p className="form__description">
        Sign up with your email address to receive news and updates.
      </p>
      <div>
        <input
          className="form__input"
          type={"text"}
          placeholder="First name"
        ></input>
        <input
          className="form__input"
          type={"text"}
          placeholder="Last name"
        ></input>
        <input
          className="form__input"
          type={"email"}
          placeholder="Email"
        ></input>
      </div>
      <button className="form__btn">Subscribe</button>
    </div>
  </div>
);

const ex3 = (
  <div className="profile__container">
    <div className="profile__content">
      <div className="profile__infor">
        <img src={AVATAR} alt="avatar" />
        <h3 className="profile__title">Asabeneh Yetayeh</h3>
        <p className="profile__description">Senior Developer, Finland</p>
      </div>
      <h3 className="profile__title">Skills</h3>
      <ul className="skills__wrapper">
        {skills.map((item, index) => (
          <li className="skills__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
//End Day 3

//Day 4 + 5
const FrontEndTechs = () => {
  return (
    <div>
      <img src={TechsImg} alt="frontend technologies" style={imgStyle} />
    </div>
  );
};

const SubscribeFormTitle = () => {
  return (
    <div>
      <h1 className="form__title">subscribe</h1>
      <p className="form__description">
        Sign up with your email address to receive news and updates.
      </p>
    </div>
  );
};
const SubscribeFormContent = () => {
  return (
    <div>
      <div>
        <input
          className="form__input"
          type={"text"}
          placeholder="First name"
        ></input>
        <input
          className="form__input"
          type={"text"}
          placeholder="Last name"
        ></input>
        <input
          className="form__input"
          type={"email"}
          placeholder="Email"
        ></input>
      </div>
      <button type="button" className="form__btn">
        Subscribe
      </button>
    </div>
  );
};
const SubscribeForm = () => {
  return (
    <div className="form__container">
      <div className="form__content">
        <SubscribeFormTitle />
        <SubscribeFormContent />
      </div>
    </div>
  );
};

const ProfileInfor = (props) => {
  const {image, name, job} = props
  return (
    <div className="profile__infor">
      <img src={image} alt="avatar" />
      <h3 className="profile__title">{name}</h3>
      <p className="profile__description">{job}</p>
    </div>
  );
};
const ProfileSkills = (props) => {
  const {skillList}=props
  return (
    <div>
      <h3 className="profile__title">Skills</h3>
      <ul className="skills__wrapper">
        {skillList.map((item, index) => (
          <li className="skills__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
const UserCard = () => {
  const user = {
    image: AVATAR,
    name: 'Asabeneh Yetayeh',
    job: 'Senior Developer, Finland',
    skillList: [
      "HTML",
      "CSS",
      "Sass",
      "JS",
      "React",
      "Redux",
      "Node",
      "MongoDB",
      "Python",
      "Flask",
      "Django",
      "NumPy",
      "Pandas",
      "Data Analysis",
      "MYSQL",
      "GraphQL",
      "D3.js",
      "Gatsby",
      "Docker",
      "Heroku",
      "Git",
    ]
  }
  return (
    <div className="profile__container">
      <div className="profile__content">
        <ProfileInfor image={user.image} name={user.name} job={user.job} />
        <ProfileSkills skillList={user.skillList} />
      </div>
    </div>
  );
};

const ItemColor = (props) => {
  const {color} = props;
  const itemColorStyle = {
    padding: "20px",
    margin: "2px 0",
    borderRadius: "5px",
    textAlign: 'center',
    backgroundColor: color,
    color: '#fff'
  };
  return (
    <div className="itemColor__wrapper">
      <p className="itemColor-color" style={itemColorStyle}>
        {color}
      </p>
    </div>
  );
};
const Colors = () => {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(hexaColor());
  }
  return (
    <div className="color__container">
      {colors.map((item, index) => (
        <ItemColor key={index} color={item} />
      ))}
    </div>
  );
};

const app = (
  <div>
    <FrontEndTechs />
    <SubscribeForm />
    <UserCard />
    <Colors />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
