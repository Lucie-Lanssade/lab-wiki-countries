import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setCountries(response);
      })
      .catch((e) => console.error(e));
  }, []);

  if (!countries) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route
          path="/countries"
          element={<CountriesList countries={countries} />}
        />
        <Route
          path="/countries/:countryId"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}
export default App;
