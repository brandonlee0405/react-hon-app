import React from 'react';
import { Link } from 'react-router-dom';
import '../../design/Navbar.css';

const SignInLink = () => {
  return (
    <Link className="nav-right" id="sign-in-link" to="/">
      Sign In
    </Link>
  );
};

export default SignInLink;
