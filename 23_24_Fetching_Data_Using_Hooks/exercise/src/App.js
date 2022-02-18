import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main/Main';
import { useEffect, useState } from 'react';
import { fetchCountryData } from './apis/country.api';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    fetchCountryData()
      .then(res => setCountries(res.data))
      .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      <Header totalCountries={countries.length} />
      <Main countries={countries} />
      <Footer />
    </div>
  );
}

export default App;
