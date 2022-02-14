import { Component } from 'react';
import { fetchCatData } from './apis/cat.api';
import './App.css';
import { Header } from './components/Header';

class App extends Component {
  state = { catList: []}
  componentDidMount () {
    fetchCatData()
    .then(res => this.setState({catList:res.data}))
    .catch(error => console.log(error))
  }
  render() {
    let weightSum=0
    let yearSum=0
    console.log(this.state.catList);
    this.state.catList.map(item => {
      console.log(item);
      const metric = item.weight.metric.split(' ')
      console.log(metric);
      const weightAvg = (Number(metric[0]) + Number(metric[2]))/2
      weightSum+=weightAvg

      const year = item.life_span.split(' ')
      const yearAvg = (Number(year[0]) + Number(year[2]))/2
      yearSum+=yearAvg
    })
    return (
      <div className="App">
        <Header weight={(weightSum/this.state.catList.length).toFixed(2)} lifeSpan={(yearSum/this.state.catList.length).toFixed(2)}/>
      </div>
    );
  }
}

export default App;
