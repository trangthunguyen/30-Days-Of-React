import React from "react";
import Bar from "./Bar";
import "../../../styles/components/main/chart/Chart.scss";

const Chart = (props) => {
  const { text, topData } = props;
  return (
    <div className="chart">
      <p className="text-center">{text}</p>
      <div className="chart-wrapper">
        <div className="chart-wrapper-box">
          {topData.map((item) => {
            return (
              <Bar
                key={item.name}
                name={item.name}
                number={item.number}
                width={(item.number * 100) / topData[0].number}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chart;
