import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img
            className="brand-logo"
            src="https://1000logos.net/wp-content/uploads/2020/08/Booking_Com_logo_PNG17.png"
            alt=""
          />
        </a>
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
            <a className="nav-item nav-link active" href="/register">
              Register
            </a>
            <a className="nav-item nav-link" href="/login">
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
