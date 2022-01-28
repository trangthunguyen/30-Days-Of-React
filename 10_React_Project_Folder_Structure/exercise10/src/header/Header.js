import react from 'react';
import '../style/header/Header.scss'

const Header = (props) => {
  const {
    data: {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    },
    styles: { backgroundColor, color },
  } = props;

  const background = {
    backgroundColor: backgroundColor === "light" ? "#66cbff" : "#000000",
    color: color === "light" ? "#000000" : "#fff",
  };
  return (
    <header style={background}>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  );
};
export default Header;
