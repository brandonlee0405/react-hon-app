import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        {
          // TODO: Need to complete when setting up authentication
        }
        <NavLink to="/homepage">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating red lighten-2">
          BL
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
