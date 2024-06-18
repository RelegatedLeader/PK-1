import React, { useState } from 'react';
import '../PK_Menu/CSS Files/LoginStyles.css'; // Adjust the path based on your project structure
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  // wille be obtained in another page <-- the second verification process
  //const [loginMessage, setLoginMessage] = useState('');
  //const [loginSuccessful, setLoginSuccessful] = useState(false);

  const navigate = useNavigate();

  const evaluate = (e) => {
    e.preventDefault();

    // Retrieve the users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if there is a matching user
    const user = users.find(
      (user) =>
        user.username === usernameValue && user.password === passwordValue
    );

    if (user) {
      // User exists
      if (user.username === 'relegated' && user.password === 'password') {
        // User is admin
        navigate('/admin');
      } else if (user.username !== 'relegated') {
        // User is not admin and username is not 'relegated'
        navigate('/securityPage');
      } else {
        // Username is 'relegated' but password is not 'password'
        alert('Invalid username or password.');
      }
    } else {
      // User does not exist
      alert('The account does not exist..');
    }

    // Clear the form fields
    setUsernameValue('');
    setPasswordValue('');
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <h1>Login</h1>
        <label htmlFor='username'>Username:</label>
        <input
          id='username'
          type='text'
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          type='password'
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <br />
        <button className='glow-on-hover' onClick={evaluate}>
          Login!
        </button>
        <br />
        <br />
        <Link to='/signup'>
          <button className='glow-on-hover'> Need an account? Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
