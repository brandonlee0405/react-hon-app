import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../design/Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          Heroes Of Newerth
        </Link>
        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default Navbar;
