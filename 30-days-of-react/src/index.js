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
  const { image, name, job } = props;
  return (
    <div className="profile__infor">
      <img src={image} alt="avatar" />
      <h3 className="profile__title">{name}</h3>
      <p className="profile__description">{job}</p>
    </div>
  );
};
const ProfileSkills = (props) => {
  const { skillList } = props;
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
    name: "Asabeneh Yetayeh",
    job: "Senior Developer, Finland",
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
    ],
  };
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
  const { color } = props;
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

// Day 6
const PrimeBoard = () => {
  const isPrime = Array(32).fill(true);
  const primeList = [];
  for (let i = 2; i <= 32; i++) {
    if (isPrime[i]) {
      for (let j = i * 2; j <= 32 * 32; j += i) {
        isPrime[j] = false;
      }
      primeList.push(i);
    }
  }
  return (
    <div className="wrapper">
      <h1 className="text-center">30 Days of React</h1>
      <h3 className="text-center">Number Generator</h3>
      <div className="board-container">
        {Array(32)
          .fill(undefined)
          .map((item, index) => {
            const itemColor = primeList.includes(index)
              ? "item-red"
              : index % 2
              ? "item-yellow"
              : "item-green";
            return <div className={`board-item ${itemColor}`}>{index}</div>;
          })}
      </div>
    </div>
  );
};

const ColorBoard = () => {
  const colors = [];
  for (let i = 0; i < 32; i++) {
    colors.push(hexaColor());
  }
  return (
    <div className="wrapper">
      <h1 className="text-center">30 Days of React</h1>
      <h3 className="text-center">Hexadecimal Colors</h3>
      <div className="board-container">
        {colors.map((item, index) => {
          return (
            <div className="board-item" style={{ backgroundColor: item }}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const tenHighestPopulation = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "United States of America", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russian Federation", population: 146599183 },
  { country: "Japan", population: 126960000 },
];

const Bar = (props) => {
  const { country, population, width } = props;
  return (
    <ul className="bar-container">
      <li className="country">
        {country === "United States of America"
          ? "USA"
          : country === "Russian Federation"
          ? "Russian"
          : country}
      </li>
      <li className="populationbar-container">
        <p className="population-bar" style={{ width: `${width}%` }}></p>
      </li>
      <li className="population-number">{population}</li>
    </ul>
  );
};

const BarGroup = () => {
  const maxPopulation = tenHighestPopulation.reduce(
    (acc, cur) => (acc > cur.population ? acc : cur.population),
    0
  );
  console.log(maxPopulation);
  return (
    <div className="wrapper">
      <h1 className="text-center">30 Days of React</h1>
      <h3 className="text-center">World Population</h3>
      <div className="group-container">
        {tenHighestPopulation.map((item) => {
          return (
            <Bar
              country={item.country}
              population={item.population}
              width={(item.population * 100) / maxPopulation}
            />
          );
        })}
      </div>
    </div>
  );
};

const app = (
  <div>
    <FrontEndTechs />
    <SubscribeForm />
    <UserCard />
    <Colors />
    <PrimeBoard />
    <ColorBoard />
    <BarGroup />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
