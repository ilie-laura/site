import React from 'react';
import Logo from '../assets/BobbaLogo.png';
import {Link} from 'react-router-dom';
import '../style/Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo}  />
            
        </div>
        <div className='rightSide'></div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/menu">Menu</Link>
    </div>
  );
}
export default Navbar;

