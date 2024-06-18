import React from 'react';
import { Link } from 'react-router-dom';
import '../PK_Menu/CSS Files/MenuStyles.css';
import logo from '../PK_Menu/images/pk-logo-no-background.png'; // Adjust the path as necessary

export default function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-options'>
        <img className='logo' src={logo} alt='logo' />

        <Link to='login'>
          <button className='glow-on-hover'> Login</button>
        </Link>
        <br />
        <br />
        <Link to='signup'>
          <button className='glow-on-hover'> Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
