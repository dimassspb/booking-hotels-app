import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="sticky">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <img
            className="brand-logo"
            src="https://1000logos.net/wp-content/uploads/2020/08/Booking_Com_logo_PNG17.png"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/registration">
              Register
            </Link>
            <Link className="nav-item nav-link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
