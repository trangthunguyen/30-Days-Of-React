import { Component } from "react";
import { fetchCatData, getCatImage } from "./apis/cat.api";
import { CatDetail } from "./components/CatDetail";
import { Header } from "./components/Header";
import { Origin } from "./components/Origin";
import "./App.scss";

let origins = {};
let i = 0;
class App extends Component {
  state = { catList: [] };
  componentDidMount() {
    fetchCatData()
      .then((res) => {
        const newArr = [...res.data];
        Promise.all(
          newArr.map((item) => {
            return getCatImage(item.id)
          })
        ).then((response) => {
          console.log(response);
          newArr.forEach((item,index)=>{
            item.img = response[index].data[0].url
            !origins[item.origin]
            ? (origins[item.origin] = [item])
            : origins[item.origin].push(item);
          })
          origins.all = newArr;
          this.setState({ catList: newArr });
        });
      })
      .catch((error) => console.log(error));
  }
  handleClick = (e) => {
    console.log(e.target.name);
    this.setState({ catList: origins[e.target.name] });
  };
  render() {
    let weightSum = 0;
    let yearSum = 0;
    this.state.catList.map((item) => {
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
          weight={(weightSum / this.state.catList.length).toFixed(2)}
          lifeSpan={(yearSum / this.state.catList.length).toFixed(2)}
        />
        <div className="content">
          <div className="content-item content-origin">
            {Object.entries(origins).map(([key, value]) => {
              return (
                <Origin
                  origin={key}
                  value={value.length}
                  key={key}
                  onClick={this.handleClick}
                />
              );
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
