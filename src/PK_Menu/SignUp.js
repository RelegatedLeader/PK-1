import React, { useState } from 'react';
import '../PK_Menu/CSS Files/SignupStyles.css';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [same_password, setSamePassword] = useState('');

  const navigate = useNavigate();

  const saveToFile = () => {
    // Check if passwords match
    if (password !== same_password) {
      alert('Passwords do not match. Please re-enter.');
      return;
    }

    // Check if all fields are filled
    if (
      first_name === '' ||
      last_name === '' ||
      username === '' ||
      password === '' ||
      same_password === ''
    ) {
      alert('Please enter all required information.');
      return;
    }

    // Register user
    //localStorage.clear(); //  <-- clear it to restart the whole thing
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert('That username is taken...');
      return;
    } else {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('User registered successfully.');
    }

    // Clear input fields
    setFirstName('');
    setLastName('');
    setUsername('');
    setPassword('');
    setSamePassword('');

    // Redirect to login page
    navigate('/randomWordPage');
    //localStorage.clear(); //  <-- clear it to restart the whole thing
  };

  /** // Generate and display random words
  generate_random_words();

  // Note: Use setTimeout to wait a brief moment before showing the alert
  setTimeout(() => {
    alert('Here are your random words: \n' + randomWords.join(', '));
  }, 100);

  const generate_random_words = () => {
    let randomWordsArray = [];
    for (let i = 0; i < 8; i++) {
      randomWordsArray.push(words[Math.floor(Math.random() * words.length)]);
    }
    setRandomWords(randomWordsArray); // Update randomWords state with the generated array
  }; */

  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h1>Sign Up</h1>
        <br />

        <label htmlFor='first_name'>First Name:</label>
        <input
          id='first_name'
          type='text'
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />

        <label htmlFor='last_name'>Last Name:</label>
        <input
          id='last_name'
          type='text'
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />

        <label htmlFor='username'>Username:</label>
        <input
          id='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor='same_password'>Re-enter Password:</label>
        <input
          id='same_password'
          type='password'
          value={same_password}
          onChange={(e) => setSamePassword(e.target.value)}
          required
        />
        <br />
        <button className='glow-on-hover' onClick={saveToFile}>
          Sign Up!
        </button>
        <br />
        <br />

        <Link to='/login'>
          <button className='glow-on-hover'>Have an account? Sign in </button>
        </Link>
      </div>
    </div>
  );
}
