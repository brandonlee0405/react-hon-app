import React from 'react';
import { Link } from 'react-router-dom';
import '../../design/Navbar.css';

const SignOutLink = () => {
  return (
    <Link className="nav-right" id="sign-up-link" to="/">
      Sign Out
    </Link>
  );
};

export default SignOutLink;
