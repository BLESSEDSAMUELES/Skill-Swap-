import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-title" onClick={() => navigate('/')}>
          Skill Swap Platform
        </h2>
      </div>

      <div className="navbar-right">
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/profile">My Profile</Link>}
        {isLoggedIn && <Link to="/requests">Swap Requests</Link>}
        {!isLoggedIn && <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
