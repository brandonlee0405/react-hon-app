import React from 'react';
import { Link } from 'react-router-dom';
import '../../design/Navbar.css';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';

const Navbar = () => {
  return (
    <nav className="nav-links">
      <Link id="nav-logo" to="/homepage">
        Heroes of Newerth
      </Link>
      <SignInLink />
      <SignOutLink />
    </nav>
  );
};

export default Navbar;
