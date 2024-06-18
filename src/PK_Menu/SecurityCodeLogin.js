import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SecurityCodeLogin() {
  const [securityWords, setSecurityWords] = useState(Array(8).fill(''));
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (index, event) => {
    const newSecurityWords = [...securityWords];
    newSecurityWords[index] = event.target.value;
    setSecurityWords(newSecurityWords);
  };

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(
      (user) =>
        JSON.stringify(user.yourSecurityWords) === JSON.stringify(securityWords)
    );

    if (currentUser) {
      setLoginSuccessful(true);
      setLoginMessage('Login successful!');
      navigate('/mainApp');
    } else {
      setLoginSuccessful(false);
      setLoginMessage('Invalid security code. Please try again.');
    }
  };

  return (
    <div>
      <h1>Your account exists!</h1>
      <h3>Please enter your 8-word security code to login</h3>
      <div>
        {securityWords.map((word, index) => (
          <div key={index}>
            <label htmlFor={`word-${index}`}>Enter word {index + 1}</label>
            <input
              type='text'
              value={word}
              onChange={(event) => handleInputChange(index, event)}
              id={`word-${index}`}
              required
            />
          </div>
        ))}
        <button className='glow-on-hover' onClick={handleSubmit}>
          Submit words
        </button>
      </div>
      <p style={{ color: loginSuccessful ? 'green' : 'red' }}>{loginMessage}</p>
    </div>
  );
}
