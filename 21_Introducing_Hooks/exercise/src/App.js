import { Component, useEffect, useState } from "react";
import { fetchCatData, getCatImage } from "./apis/cat.api";
import { CatDetail } from "./components/CatDetail";
import { Header } from "./components/Header";
import { Origin } from "./components/Origin";
import "./App.scss";

let origins = {};
const App = () => {
  const [catList, setCatList] = useState([])

  let totalCats = 1
  useEffect(() => {
    fetchCatData()
      .then((res) => {
        const newArr = [...res.data];
        Promise.all(
          newArr.map((item) => {
            return getCatImage(item.id)
          })
        ).then((response) => {
          newArr.forEach((item,index)=>{
            item.img = response[index].data[0].url
            !origins[item.origin]
            ? (origins[item.origin] = [item])
            : origins[item.origin].push(item);
          })
          origins.all = newArr;
          totalCats = origins.all.length
          setCatList(newArr);
        });
      })
      .catch((error) => console.log(error));
  },[])

  const handleClick = (e) => {
    setCatList(origins[e.target.name]);
  };
    let weightSum = 0;
    let yearSum = 0;
    catList.map((item) => {
      const metric = item.weight.metric.split(" ");
      const weightAvg = (Number(metric[0]) + Number(metric[2])) / 2;
      weightSum += weightAvg;

      const year = item.life_span.split(" ");
      const yearAvg = (Number(year[0]) + Number(year[2])) / 2;
      yearSum += yearAvg;
    });
    return (
      <div className="App">
        <Header
          weight={(weightSum / catList.length).toFixed(2)}
          lifeSpan={(yearSum / catList.length).toFixed(2)}
        />
        <div className="content">
          <div className="content-item content-origin">
            {Object.entries(origins).map(([key, value]) => {
              return (
                <Origin
                  origin={key}
                  value={value.length}
                  key={key}
                  onClick={handleClick}
                />
              );
            })}
          </div>
          <div className="content-item">
            {catList.map((item, index) => {
              return <CatDetail catDetail={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
}

export default App;
