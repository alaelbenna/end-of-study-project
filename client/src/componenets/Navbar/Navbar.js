import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove tokens from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userDetails');
    navigate('/login');
  };

  return (
    <button className="nav-link btn btn-link" onClick={handleLogout}>
      LOGOUT
    </button>
  );
}

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize with a default value or retrieve from context

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                Admin
              </a>
            </li>
        
             {isAuthenticated ? (
              <li className="nav-item">
                <LogoutButton />
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link login-button" href="/login">
                  LOGIN
                </a>
              </li>
            )} 
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
