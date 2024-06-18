import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> Relegated</h1>
      <p style={{ textAlign: 'center' }}>
        Here is where your admin tools will be ... this app won't do much, this
        is just to give someone a private key to log in , that's it...
      </p>

      <Link to='/adminShowInfo'>
        <button className='glow-on-hover'> Show People's information</button>
      </Link>
    </div>
  );
}
