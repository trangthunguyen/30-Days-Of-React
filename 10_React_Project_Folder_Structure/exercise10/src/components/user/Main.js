import Button from "../../share/button/Button";
import TechList from "./TechList";
import UserCard from "./UserCard";
import '../../style/components/user/Main.scss'
import { Count } from "../../utils/Count";

const Main = (props) => {
  const {
    techs,
    user,
    greetPeople,
    handleTime,
    changeBackground,
    count,
    addOne,
    minusOne,
    styles: { backgroundColor, color },
  } = props;
  const background = {
    backgroundColor: backgroundColor === "light" ? "#fff" : "#000000",
    color: color === "light" ? "#000000" : "#fff",
  };
  return (
    <main>
      <div className="main-wrapper" style={background}>
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        <UserCard user={user} />
        <Button text="Greet People" onClick={greetPeople} />
        <Button text="Show Time" onClick={handleTime} />
        <Button text="Change Background" onClick={changeBackground} />
        <Count count={count} addOne={addOne} minusOne={minusOne} />
      </div>
    </main>
  );
};

export default Main;
