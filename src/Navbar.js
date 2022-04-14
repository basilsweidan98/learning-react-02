import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className='linkstyle' to='/'>     
        <h1 >SYNECHRON COMPANY</h1>
      </Link>

      <ul className="nav-links">

        <Link className='listyle' to='/ReadMore' >
          <li>Read More</li></Link>

        <Link className='listyle'  to='/AboutUs'>
          <li>About Us</li>
        </Link>

      </ul>

    </nav>
  );
}

export default Navbar;