import React, { useEffect, useState } from "react";
import Button from "../../shares/Button";
import "../../styles/components/main/Main.scss";
import Chart from "./chart/Chart";
import CountryBox from "./countryList/CountryBox";
import Search from "./search/Search";

const Main = (props) => {
  const [selection, setSelection] = useState("population");
  const { countries } = props;

  const [countryList, setCountryList] = useState([]);
  useEffect(() => setCountryList(countries), [countries]);

  const onClick = (e) => {
    const { name } = e.target;
    setSelection(name);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setCountryList(countries.filter((item) => checkValue(item, value)));
  };

  const checkValue = (item, value) => {
    if (item.name.toLowerCase().includes(value)) {
      return true;
    }
    if (!item.capital) {
      return false;
    }
    if (item.capital.toLowerCase().includes(value)) {
      return true;
    }
    if (
      item.languages.find((lang) => {
        if (lang.name.toLowerCase().includes(value)) {
          return true;
        }
      })
    )
      return true;
    return false;
  };

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
      <p className="no-result">
        {" "}
        {countryList.length === 0 ? "0 satisfied the search criteria" : ""}
      </p>
      <Search onChange={onChange} />

      <div className="country-box-container">
        {countryList.map((item) => (
          <CountryBox country={item} key={item.name} />
        ))}
      </div>
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
