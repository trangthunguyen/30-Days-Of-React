import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main/Main';
import useFetch from './hooks/customHooks';

function App() {
  const countries = useFetch('https://restcountries.com/v2/all')

  return (
    <div className="App">
      <Header totalCountries={countries.length} />
      <Main countries={countries} />
      <Footer />
    </div>
  );
}

export default App;
