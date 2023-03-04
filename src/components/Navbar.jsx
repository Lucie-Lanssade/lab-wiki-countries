import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <ul className="">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <Link className="navbar-brand" to="/countries">
              All countries
            </Link>
            <Link className="navbar-brand" to="/country">
              Country Details
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
