import react from "react";

const TechList = (props) => {
  const { techs } = props;
  return (
    <>
      {techs.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </>
  );
};

export default TechList;
