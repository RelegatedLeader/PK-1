import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../MainApp/MainAppCSS/MainApp.css';

export function MainApp() {
  const navigate = useNavigate();
  function log_out() {
    navigate('/');
  }

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  const handleBackButton = (event) => {
    window.history.pushState(null, null, window.location.pathname);
    alert('You cannot go back from this page.');
  };

  return (
    <div>
      <h1>Main App</h1>
      <h4>You have successfully made it to the beginning of the end...</h4>
      <button className='glow-on-hover' onClick={log_out}>
        {' '}
        Logout ?{' '}
      </button>
    </div>
  );
}
