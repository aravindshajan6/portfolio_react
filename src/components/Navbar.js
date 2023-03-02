import React from 'react';
import '../styles/navbar.css';


function Navbar() {
  return (
    <div className='navbar'>
      
      <div className='links'>
      
      <h1 className=''>Aravind Shajan</h1>
        <a href='/home' className='hvr-wobble-vertical'>
          Home
        </a>
        <a href='/about' className='hvr-wobble-vertical'>
          About
        </a>
        <a href='skills' className='hvr-wobble-vertical'>
          Skills
        </a>
        <a href='/experience' className='hvr-wobble-vertical'>
          Experience
        </a>
        <a href='/contact' className='hvr-wobble-vertical'>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
