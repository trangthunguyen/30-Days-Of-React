import React from "react";
import Bar from "./Bar/Bar";
import './BarGroup.css'

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

  export default BarGroup