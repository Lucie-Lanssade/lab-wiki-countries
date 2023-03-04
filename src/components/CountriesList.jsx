import React from 'react';
import { Link } from 'react-router-dom';
// import allCountries from '../countries.json';

function CountriesList({ countries }) {
  if (!CountriesList) {
    return 'page loading...';
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {countries.map((country) => {
              return (
                <Link
                  key={country.name.common}
                  className="list-group-item list-group-item-action"
                  to={country.alpha3Code}
                >
                  {country.name.common}
                  <span>
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                      alt={country.name.common}
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
