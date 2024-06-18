import React from 'react';
import { Link } from 'react-router-dom';
import '../PK_Menu/CSS Files/MenuStyles.css';

export default function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-options'>
        <h1>PK-1</h1>
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
