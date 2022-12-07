import React from 'react';
import { Link } from 'react-router-dom';
import '../Cssmodules/navbar.css';

function Navigation() {
  return (

    <div className="nav-bar">
      <div className="logo">
        <h1 className="magicians">Math Magicians</h1>
      </div>
      <nav className="nav">
        <Link className="links" to="/">Home</Link>
        |
        <Link className="links" to="/calculator">Calculator</Link>
        |
        <Link className="links" to="/Quotes">Quotes</Link>
      </nav>
    </div>
  );
}
export default Navigation;
