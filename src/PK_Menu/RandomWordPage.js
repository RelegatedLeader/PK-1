import React, { useState } from 'react';
import './CSS Files/RandomWordPage.css';
import { useNavigate } from 'react-router-dom';

export default function RandomWordPage() {
  const [randomWords, setRandomWords] = useState([]);
  const navigate = useNavigate();
  const words = [
    'apple',
    'book',
    'car',
    'dog',
    'eagle',
    'forest',
    'guitar',
    'house',
    'ice',
    'jungle',
    'kangaroo',
    'lamp',
    'mountain',
    'notebook',
    'ocean',
    'piano',
    'quartz',
    'robot',
    'sun',
    'tree',
    'umbrella',
    'volcano',
    'whale',
    'xylophone',
    'yacht',
    'zebra',
    'airplane',
    'banana',
    'cloud',
    'dolphin',
    'elephant',
    'flower',
    'galaxy',
    'honey',
    'island',
    'jacket',
    'kite',
    'lion',
    'moon',
    'nest',
    'owl',
    'penguin',
    'quill',
    'river',
    'star',
    'turtle',
    'unicorn',
    'vase',
    'wind',
    'x-ray',
    'yellow',
    'zipper',
    'asteroid',
    'bridge',
    'castle',
    'diamond',
    'engine',
    'fire',
    'glacier',
    'horse',
    'ink',
    'jewel',
    'kangaroo',
    'leaf',
    'machine',
    'night',
    'octopus',
    'planet',
    'queen',
    'rocket',
    'snow',
    'thunder',
    'underwater',
    'valley',
    'wizard',
    'xenon',
    'yawn',
    'zephyr',
    'amethyst',
    'beach',
    'canyon',
    'desert',
    'emerald',
    'falcon',
    'giant',
    'harbor',
    'iguana',
    'jungle',
    'koala',
    'light',
    'meadow',
    'nebula',
    'oasis',
    'pearl',
    'quasar',
    'rain',
    'shadow',
    'temple',
    'utopia',
    'vortex',
  ];

  const saveWordsToFile = (words) => {
    const fileContent = words.join('\n');
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'security_words.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const generateRandomWords = () => {
    let randomWordsArray = [];

    for (let i = 0; i < 8; i++) {
      randomWordsArray.push(words[Math.floor(Math.random() * words.length)]);
    }
    setRandomWords(randomWordsArray);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const yourSecurityCode = randomWordsArray;
    users.push({ yourSecurityWords: yourSecurityCode });
    localStorage.setItem('users', JSON.stringify(users));
    saveWordsToFile(yourSecurityCode);
    alert(
      'Make sure to add your username or something to the text file remember your code by.'
    );

    navigate('/');
  };

  return (
    <div className='container'>
      <h1>Security Words</h1>
      <h4>
        The following are your security words that only belong to you and you
        will need them to sign in when signed out. Please do not share these
        with anyone and secure them in a private space.
      </h4>
      <button className='glow-on-hover' onClick={generateRandomWords}>
        Generate Security Words
      </button>
      <h3>Your Security Words:</h3>
      <ul>
        {randomWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}
