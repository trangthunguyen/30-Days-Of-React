import { Component } from "react";
import { fetchCatData, getCatImage } from "./apis/cat.api";
import "./App.scss";
import { CatDetail } from "./components/CatDetail";
import { Header } from "./components/Header";
import { Origin } from "./components/Origin";

class App extends Component {
  state = { catList: [] };
  componentDidMount() {
    let catList = [];
    fetchCatData()
      .then((res) => (catList = res.data))
      .then(() => {
        catList.map((item, index) => {
          getCatImage(item.id).then((res) => {
            const newArr = [...catList];
            newArr[index].img = res.data[0].url;
            this.setState({ catList: newArr });
          });
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    let weightSum = 0;
    let yearSum = 0;
    let origins = {};
    this.state.catList.map((item) => {
      const metric = item.weight.metric.split(" ");
      const weightAvg = (Number(metric[0]) + Number(metric[2])) / 2;
      weightSum += weightAvg;

      const year = item.life_span.split(" ");
      const yearAvg = (Number(year[0]) + Number(year[2])) / 2;
      yearSum += yearAvg;

      !origins[item.origin]
        ? (origins[item.origin] = 1)
        : origins[item.origin]++;
    });
    return (
      <div className="App">
        <Header
          weight={(weightSum / this.state.catList.length).toFixed(2)}
          lifeSpan={(yearSum / this.state.catList.length).toFixed(2)}
        />
        <div className="content">
          <div className="content-item content-origin">
            {Object.entries(origins).map(([key, value]) => {
              return <Origin origin={key} value={value} key={key} />;
            })}
          </div>
          <div className="content-item">
            {this.state.catList.map((item, index) => {
                return <CatDetail catDetail={item} key={index} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
