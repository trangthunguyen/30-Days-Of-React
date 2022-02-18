import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../shares/Button";
import "../../styles/components/main/Main.scss";
import Chart from "./chart/Chart";
import Search from "./search/Search";

const Main = (props) => {
  const [selection, setSelection] = useState("population");
  const { countries } = props;

  const onClick = (e) => {
    const { name } = e.target;
    setSelection(name);
  };

  const onChange = (e) => {
      console.log(e.target.value);
  }

  const maxPopulation = countries.reduce((acc, cur) => acc + cur.population, 0);

  countries.sort(function (a, b) {
    return b.population - a.population;
  });

  const tenHighestPopulation = [{ name: "World", number: maxPopulation }];
  countries.slice(0, 9).map((item) => {
    tenHighestPopulation.push({ name: item.name, number: item.population });
  });

  const languages = [{ name: "Total", number: countries.length }];
  for (const item of countries) {
    for (const lang of item.languages) {
      const found = languages.findIndex(
        (element) => element.name === lang.name
      );
      if (found === -1) {
        languages.push({ name: lang.name, number: 1 });
      } else {
        languages[found].number++;
      }
    }
  }
  const tenHighestLanguage = languages
    .sort((a, b) => b.number - a.number)
    .slice(0, 11);

  const selections = {
    population: {
      text: "10 Most populated countries in the world",
      data: tenHighestPopulation,
    },
    languages: {
      text: "10 Most spoken languages in the world",
      data: tenHighestLanguage,
    },
  };

  return (
    <div className="main">
      <Search onChange={onChange}/>
      <div className="chart-container">
        <nav>
          <Button name="population" onClick={onClick} />
          <Button name="languages" onClick={onClick} />
        </nav>
        <Chart
          text={selections[selection].text}
          topData={selections[selection].data}
        />
      </div>
    </div>
  );
};

export default Main;
