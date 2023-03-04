import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import allCountries from '../countries.json';

function CountryDetails({ countries }) {
  const [foundCountry, setFoundCountry] = useState(null);

  const { countryId } = useParams();

  useEffect(() => {
    const country = countries.find((countryObj) => {
      return countryObj.alpha3Code === countryId;
    });

    //because we put 'null' in useState, we need to set up a condition that checks if a country was found, otherwise, country is undefined (because the request takes some time)
    if (country) {
      setFoundCountry(country);
    }
  }, []);

  console.log(foundCountry);
  if (foundCountry) {
    return (
      <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {foundCountry.borders.map((border) => {
                    return (
                      <li>
                        <Link to={`/${border}`}>
                          {alphaCodeToCountry(border, countries).name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
}

export default CountryDetails;

//External function that matches the border countries' alpha code to their name and displays their full name.
const alphaCodeToCountry = (code, countries) => {
  const country = countries.find((country) => country.alpha3Code === code);
  console.log('Country', country);
  return country;
};
